import type { NextApiRequest, NextApiResponse } from 'next'
import httpProxy from "http-proxy";


import { getConfig } from '@/global/config';
import { INTERNAL_API_PROXY } from '@/global/utils/constants';

const proxy = httpProxy.createProxyServer()

const { NEXT_PUBLIC_ARRANGER_API } = getConfig();

// You can export a config variable from any API route in Next.js.
// We'll use this to disable the bodyParser, otherwise Next.js
// would read and parse the entire request body before we
// can forward the request to the API. By skipping the bodyParser,
// we can just stream all requests through to the actual API.
export const config = {
	api: {
		bodyParser: false,
        externalResolver: true,
	},
}

const convertToRegexPath = (path: string) => {
    const escapedPath = path.replaceAll('/', '\\/');
    return new RegExp(`^${escapedPath}\\/?`)
}

const replacePath = (url: string, path: string, ) => {
    return url?.replace(convertToRegexPath(path), '') || "";
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {

    let path = req.url;
    let target = "";
    if(req.url?.startsWith(INTERNAL_API_PROXY.ARRANGER)){
        path = replacePath(req?.url, INTERNAL_API_PROXY.ARRANGER);
        target = NEXT_PUBLIC_ARRANGER_API;
    } else {
        return res.status(404).end()
    }
    req.url = path;

    // Don't forward cookies to the API:
    req.headers.cookie = ''

    console.info(`proxy without authentication - proxing to target:${target} path:${path}`)

    proxy.web(req, res, {
        target ,
        changeOrigin: true,
    }, (err) => {
        console.error(`Proxy error for ${req.url}: ${JSON.stringify(err)}`)
        if (err) {
            return res.status(500).json(err)
        }
    })
}