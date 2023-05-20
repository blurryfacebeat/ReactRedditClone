import BlockIcon from '@/assets/icons/BlockIcon.svg';
import WarningIcon from '@/assets/icons/WarningIcon.svg';
import { DropDownListItem } from '@/components/Dropdown/DropDownList/DropDownListItem';
import { IDropDownListProps } from '@/components/Dropdown/DropDownList/DropDownList.types';

import styles from './DropDownList.module.scss';

const dropDownItems = [
  {
    icon: BlockIcon,
    text: 'Скрыть',
  },
  {
    icon: WarningIcon,
    text: 'Пожаловаться',
  },
];

const DropDownList = (props: IDropDownListProps) => {
  const { postId } = props;

  return (
    <ul className={styles.dropDownList}>
      {dropDownItems.map(({ icon, text }) => (
        <DropDownListItem Icon={icon} text={text} key={text} />
      ))}
    </ul>
  );
};

export default DropDownList;
