import Cookies from 'js-cookie';
import { useEffect, useState } from 'react';

import { convertSecondsToDays, getQueryFromRedditAuth } from '@/utils';
import { setBaseHttpClientAuthorizationToken } from '@/modules/HttpClient/BaseHttpClient/BaseHttpClient';

export const useAuth = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const savedToken = getAuthCookies();

    if (savedToken) {
      setBaseHttpClientAuthorizationToken({
        fullToken: savedToken,
      });

      setIsLoading(false);

      return;
    }

    const url = new URL(window.location.href);
    const queryMap = getQueryFromRedditAuth(url.hash);

    const tokenType = queryMap.get('token_type');
    const accessToken = queryMap.get('access_token');

    if (!accessToken || !tokenType) {
      setIsLoading(false);

      return;
    }

    const expiresAfterSeconds = Number(queryMap.get('expires_in'));
    const expiresAfterDays = convertSecondsToDays(expiresAfterSeconds);

    setAuthCookies(`${tokenType} ${accessToken}`, expiresAfterDays);

    setBaseHttpClientAuthorizationToken({
      token: accessToken,
      tokenType,
    });

    setIsLoading(false);
  }, []);

  return [isLoading];
};

const setAuthCookies = (value: string, expiresDays: number) => {
  Cookies.set('authToken', value, { expires: expiresDays });
};

const getAuthCookies = () => Cookies.get('authToken');
