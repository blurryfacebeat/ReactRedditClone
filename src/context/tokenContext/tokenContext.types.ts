import { ReactNode } from 'react';

export interface ITokenContextData {
  token: string;
}

export interface ITokenContextProviderProps {
  children: ReactNode;
}
