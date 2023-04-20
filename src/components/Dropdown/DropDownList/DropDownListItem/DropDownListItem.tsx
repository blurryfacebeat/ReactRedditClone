import React from 'react';

import { Text } from '@/components/Text';
import { IPropDownListProps } from '@/components/Dropdown/DropDownList/DropDownListItem/DropDownList.types';

import styles from './DropDownListItem.module.scss';

const DropDownListItem = (props: IPropDownListProps) => {
  const { Icon, text } = props;

  return (
    <li className={styles.dropDownListItem}>
      <Icon />
      <Text color={'--grey-5'}>{text}</Text>
    </li>
  );
};

export default DropDownListItem;
