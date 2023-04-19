import { ReactNode } from 'react';

export interface IDropdownProps {
  button: ReactNode;
  children: ReactNode;
  isOpen?: boolean;
  onOpen?: () => void;
  onClose?: () => void;
}
