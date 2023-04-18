import React, { useState } from 'react';

import { IDropdownProps } from '@/components/Dropdown/Dropdown.types';

import styles from './Dropdown.module.scss';

const Dropdown = (props: IDropdownProps) => {
  const { button, children } = props;

  const [isOpened, setIsOpened] = useState(false);

  return (
    <div className={styles.container}>
      <div onClick={() => setIsOpened(!isOpened)}>{button}</div>
      {isOpened && (
        <div className={styles.listContainer}>
          <div className={styles.list} onClick={() => setIsOpened(false)}>
            {children}
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
