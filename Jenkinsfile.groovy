String podSpec = '''
apiVersion: v1
kind: Pod
spec:
  containers:
  - name: node
    image: node:lts
    tty: true
  - name: docker
    image: docker:18-git
    tty: true
    env:
    - name: DOCKER_HOST
      value: tcp://localhost:2375
    - name: HOME
      value: /home/jenkins/agent
  - name: helm
    image: alpine/helm:3.1.0
    command:
    - cat
    tty: true
  - name: dind-daemon
    image: docker:18.06-dind
    securityContext:
      privileged: true
      runAsUser: 0
    volumeMounts:
    - name: docker-graph-storage
      mountPath: /var/lib/docker
  securityContext:
    runAsUser: 1000
  volumes:
  - name: docker-graph-storage
    emptyDir: {}
'''

pipeline {
    agent {
        kubernetes {
            yaml podSpec
        }
    }

    environment {
        gitHubRegistry = 'ghcr.io'
        gitHubRepo = 'overture-stack/dms-ui'
        gitHubImageName = "${gitHubRegistry}/${gitHubRepo}"

        commit = sh(
            returnStdout: true,
            script: 'git describe --always'
        ).trim()

        version = sh(
            returnStdout: true,
            script:
                'cat ./package.json | ' +
                'grep "version" | ' +
                'cut -d : -f2 | ' +
                "sed \'s:[\",]::g\'"
        ).trim()
    }

    options {
        timeout(time: 30, unit: 'MINUTES')
        timestamps()
    }

    stages {
        stage('Run tests') {
            steps {
                container('node') {
                    sh 'npm ci'
                    sh 'npm run test'
                }
            }
        }

        stage('Build image') {
            steps {
                container('docker') {
                    // DNS error if --network is default
                    sh "docker build \
                        --build-arg APP_COMMIT=${commit} \
                        --build-arg APP_VERSION=${version} \
                        --network=host \
                        -f Dockerfile \
                        -t paperscrape:${commit} ."
                }
            }
        }

        stage('Publish Images') {
            when {
                anyOf {
                    branch 'paperscrape'
                }
            }
            steps {
                container('docker') {
                    withCredentials([
                        usernamePassword(
                            credentialsId:'OvertureBioGithub',
                            passwordVariable: 'PASSWORD',
                            usernameVariable: 'USERNAME',
                        )
                    ]) {
                        sh "docker login ${gitHubRegistry} -u $USERNAME -p $PASSWORD"

                        script {
                            sh "docker tag paperscrape:${commit} ${gitHubImageName}:paperscrape-${version}"
                            sh "docker push ${gitHubImageName}:paperscrape-${version}"

                            sh "docker tag paperscrape:${commit} ${gitHubImageName}:paperscrape-${commit}"
                            sh "docker push ${gitHubImageName}:paperscrape-${commit}"
                        }
                    }
                }
            }
        }
    }
}
