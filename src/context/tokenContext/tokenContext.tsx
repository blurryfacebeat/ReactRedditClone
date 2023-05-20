import { createContext, useEffect } from 'react';

import { getQueryFromRedditAuth } from '@/utils';
import { ITokenContextData, ITokenContextProviderProps } from '@/context/tokenContext/tokenContext.types';

export const tokenContext = createContext<ITokenContextData>({ token: '' });

export const TokenContextProvider = (props: ITokenContextProviderProps) => {
  const { children } = props;

  const url = new URL(window.location.href);
  const queryMap = getQueryFromRedditAuth(url.hash);

  const token = `${queryMap.get('token_type')} ${queryMap.get('access_token')}`;

  useEffect(() => {
    // setBaseHttpClientAuthorizationToken({ token: queryMap.get('access_token'), tokenType: queryMap.get('token_type') });
  }, []);

  return <tokenContext.Provider value={{ token }}>{children}</tokenContext.Provider>;
};
