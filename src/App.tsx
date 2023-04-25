import React, { useEffect } from 'react';

import { AppRoutes } from '@/routes/routes';
import { setBaseHttpClientAuthorizationToken } from '@/modules/HttpClient/BaseHttpClient';
import { useSearchParams } from 'react-router-dom';

export const App = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    console.log(321, searchParams);
    setBaseHttpClientAuthorizationToken({ token: 'fwqfwq', tokenType: 'bearer' });
  }, []);

  return (
    <>
      <AppRoutes />
    </>
  );
};
