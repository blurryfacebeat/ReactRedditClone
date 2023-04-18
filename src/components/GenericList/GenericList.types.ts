export interface IGenericListItem {
  id: string;
  text: string;
  onClick?: (id: string) => void;
  className?: string;
  As?: 'a' | 'li' | 'button' | 'div';
  href?: string;
}

export interface IGenericListProps {
  list: IGenericListItem[];
}
