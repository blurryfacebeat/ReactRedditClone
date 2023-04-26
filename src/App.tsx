import React, { useEffect } from 'react';

import { AppRoutes } from '@/routes/routes';
import { fetchProfileInfo } from '@/services';
import { getQueryFromRedditAuth } from '@/utils/getQueryFromRedditAuth';
import { setBaseHttpClientAuthorizationToken } from '@/modules/HttpClient/BaseHttpClient';

export const App = () => {
  useEffect(() => {
    const url = new URL(window.location.href);
    const queryMap = getQueryFromRedditAuth(url.hash);

    setBaseHttpClientAuthorizationToken({ token: queryMap.get('access_token'), tokenType: queryMap.get('token_type') });

    fetchProfileInfo()
      .then((res) => {
        console.log(321, res);
      })
      .catch((err) => {
        console.log(321, err);
      });
  }, []);

  return (
    <>
      <AppRoutes />
    </>
  );
};
