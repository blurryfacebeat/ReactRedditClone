import { ReactNode } from 'react';

export interface ITextProps {
  children: ReactNode;
  fontSize?: number;
  mobileFontSize?: number;
  tabletFontSize?: number;
  color?: string;
}
