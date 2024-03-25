/*
 *
 * Copyright (c) 2022 The Ontario Institute for Cancer Research. All rights reserved
 *
 *  This program and the accompanying materials are made available under the terms of
 *  the GNU Affero General Public License v3.0. You should have received a copy of the
 *  GNU Affero General Public License along with this program.
 *   If not, see <http://www.gnu.org/licenses/>.
 *
 *  THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY
 *  EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
 *  OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT
 *  SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
 *  INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED
 *  TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS;
 *  OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER
 *  IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN
 *  ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 *
 */

import urlJoin from 'url-join';

import { getConfig } from '../config';

const { NEXT_PUBLIC_EGO_API_ROOT, NEXT_PUBLIC_KEYCLOAK_HOST, NEXT_PUBLIC_KEYCLOAK_REALM } =
	getConfig();

export const EGO_JWT_KEY = 'EGO_JWT';
export const EGO_API_KEY_ENDPOINT = `${NEXT_PUBLIC_EGO_API_ROOT}/o/api_key`;
export const EGO_SCOPES_ENDPOINT = `${NEXT_PUBLIC_EGO_API_ROOT}/o/scopes`;

export const EXPLORER_PATH = '/explorer';
export const USER_PATH = '/user';
export const LOGIN_PATH = '/login';
export const INFO_PATH = '/info'
export const ABOUT_PATH = '/about'

// external docs links
const OVERTURE_DMS_DOCS_ROOT = 'https://overture.bio/documentation/dms/';
export const DMS_HELP_URL = urlJoin(OVERTURE_DMS_DOCS_ROOT, 'user-guide');
export const DMS_INSTALLATION_URL = urlJoin(OVERTURE_DMS_DOCS_ROOT, 'installation');
export const DMS_EMAIL_SETTING_URL = urlJoin(DMS_INSTALLATION_URL, 'configuration/prereq/emails');
export const SCORE_DOCS = 'https://overture.bio/documentation/score/user-guide/client-setup/'
export const SUBMISSION_DOCS = 'https://www.overture.bio/documentation/song/user/submit/'

// keycloak
export const KEYCLOAK_URL_ISSUER = urlJoin(
	NEXT_PUBLIC_KEYCLOAK_HOST,
	'realms',
	NEXT_PUBLIC_KEYCLOAK_REALM,
);
export const KEYCLOAK_URL_TOKEN = urlJoin(KEYCLOAK_URL_ISSUER, 'protocol/openid-connect/token');
export const KEYCLOAK_API_KEY_ENDPOINT = urlJoin(KEYCLOAK_URL_ISSUER, 'apikey/api_key');

export const AUTH_PROVIDER = {
	EGO: 'ego',
	KEYCLOAK: 'keycloak',
};

const PROXY_API_PATH = '/api';
const PROXY_PROTECTED_API_PATH = '/api/protected';

export const INTERNAL_API_PROXY = {
	ARRANGER: urlJoin(PROXY_API_PATH, 'arranger'),
	PROTECTED_ARRANGER: urlJoin(PROXY_PROTECTED_API_PATH, 'arranger'),
	PROTECTED_EGO_APIKEY_ENDPOINT: urlJoin(PROXY_PROTECTED_API_PATH, 'ego/apikey'),
	PROTECTED_EGO_API_SCOPES_ENDPOINT: urlJoin(PROXY_PROTECTED_API_PATH, 'ego/scopes'),
	PROTECTED_KEYCLOAK_APIKEY_ENDPOINT: urlJoin(PROXY_PROTECTED_API_PATH, 'keycloak/apikey'),
	PROTECTED_KEYCLOAK_TOKEN_ENDPOINT: urlJoin(PROXY_PROTECTED_API_PATH, 'keycloak/token'),
};
