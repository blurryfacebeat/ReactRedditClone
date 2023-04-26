import { ReactNode } from 'react';

export interface IUserContextData {
  name: string;
  iconImg: string;
}

export interface IUserContextProviderProps {
  children: ReactNode;
}
