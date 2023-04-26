import React, { createContext, useContext } from 'react';

import { useUserData } from '@/hooks';
import { tokenContext } from '@/context';
import { IUserContextData, IUserContextProviderProps } from '@/context/userContext/userContext.types';

export const userContext = createContext<IUserContextData>({ name: '', iconImg: '' });

export const UserContextProvider = (props: IUserContextProviderProps) => {
  const { children } = props;

  const { token } = useContext(tokenContext);

  const [data] = useUserData(token);

  return <userContext.Provider value={data}>{children}</userContext.Provider>;
};
