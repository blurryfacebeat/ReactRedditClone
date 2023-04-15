import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export interface IMainLayoutProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  children: ReactNode;
}
