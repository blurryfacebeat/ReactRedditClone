import { useEffect, useState } from 'react';
import { getQueryFromRedditAuth } from '@/utils';
import { setBaseHttpClientAuthorizationToken } from '@/modules/HttpClient/BaseHttpClient/BaseHttpClient';

export const useAuth = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const url = new URL(window.location.href);
    const queryMap = getQueryFromRedditAuth(url.hash);

    setBaseHttpClientAuthorizationToken({
      token: queryMap.get('access_token'),
      tokenType: queryMap.get('token_type'),
    });

    setIsLoading(false);
  }, []);

  return [isLoading];
};
