import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export interface ITextProps extends DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement> {
  children: ReactNode;
  fontSize?: number;
  mobileFontSize?: number;
  tabletFontSize?: number;
  color?: string;
}
