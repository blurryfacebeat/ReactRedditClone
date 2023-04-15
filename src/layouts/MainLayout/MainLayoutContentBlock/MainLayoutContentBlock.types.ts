import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export interface IMainLayoutContentBlockProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  children: ReactNode;
}
