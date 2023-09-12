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

import React, { createContext, useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import { AUTH_PROVIDER, EGO_JWT_KEY, EXPLORER_PATH } from '../utils/constants';
import { decodeToken, extractUser, isValidJwt } from '../utils/egoTokenUtils';
import { ProviderType, UserStatus, UserType, UserWithId } from '../../global/types';
import getInternalLink from '../utils/getInternalLink';
import { getConfig } from '../config';

type T_AuthContext = {
  token?: string;
  logout: () => void;
  user?: UserWithId;
  fetchWithAuth: typeof fetch;
};

const AuthContext = createContext<T_AuthContext>({
  token: undefined,
  logout: () => {},
  user: undefined,
  fetchWithAuth: fetch,
});

if (process.env.NODE_ENV === 'development') {
  AuthContext.displayName = 'AuthContext';
}

export const AuthProvider = ({
  egoJwt,
  children,
  session
}: {
  egoJwt?: string;
  children: React.ReactElement;
  session: any;
}) => {
  const router = useRouter();
  const { NEXT_PUBLIC_AUTH_PROVIDER } = getConfig();
  // TODO: typing this state as `string` causes a compiler error. the same setup exists in argo but does not cause
  // a type issue. using `any` for now
  const [token, setTokenState] = useState<any>(egoJwt);
  const [user, setUser] = useState<UserWithId>();

  useEffect(() => {
    if(NEXT_PUBLIC_AUTH_PROVIDER === AUTH_PROVIDER.KEYCLOAK && session?.account){
      const newUser: UserWithId = {
        id: session?.user?.sub,
        email: session?.user?.email,
        type: UserType.USER,
        status: UserStatus.APPROVED,
        firstName: session?.user?.firstName,
        lastName: session?.user?.lastName,
        createdAt: 0,
        lastLogin: 0,
        providerType: ProviderType.KEYCLOAK,
        providerSubjectId: "",
        scope: session?.scopes
      }
      setUser(newUser);
    }
  }, [session])

  const removeToken = () => {
    localStorage.removeItem(EGO_JWT_KEY);
    setTokenState(null);
  };

  const logout = () => {
    removeToken();
    router.push(getInternalLink({ path: EXPLORER_PATH }));
  };

  if (!token) {
    if (isValidJwt(egoJwt)) {
      setTokenState(egoJwt);
    }
  } else {
    if (!isValidJwt(token)) {
      if (egoJwt && token === egoJwt) {
        removeToken();
      }
    } else if (!egoJwt) {
      setTokenState(null);
    }
  }

  const fetchWithAuth: T_AuthContext['fetchWithAuth'] = (url, options) => {

    let headers = { 
      ...options?.headers, 
      accept: '*/*',
      ...(NEXT_PUBLIC_AUTH_PROVIDER === AUTH_PROVIDER.EGO) && {Authorization: `Bearer ${token || ''}`}
    };

    return fetch(url, {
      ...options,
      headers,
      body: null,
    });
  };

  if(NEXT_PUBLIC_AUTH_PROVIDER === AUTH_PROVIDER.EGO){
    const userInfo = token ? decodeToken(token) : null;
    if(userInfo) {
      setUser(extractUser(userInfo));
    }
  }
  const authData = {
    token,
    logout,
    user,
    fetchWithAuth,
  };

  return <AuthContext.Provider value={authData}>{children}</AuthContext.Provider>;
};

export default function useAuthContext() {
  return React.useContext(AuthContext);
}
