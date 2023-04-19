import React, { useEffect, useState } from 'react';

import { IDropdownProps } from '@/components/Dropdown/Dropdown.types';

import styles from './Dropdown.module.scss';

const NOOP = () => {};

const Dropdown = (props: IDropdownProps) => {
  const { button, children, isOpen, onOpen = NOOP, onClose = NOOP } = props;

  const [isOpened, setIsOpened] = useState(isOpen);

  useEffect(() => setIsOpened(isOpen), [isOpen]);
  useEffect(() => (isOpened ? onOpen() : onClose()), [isOpened]);

  const handleOpen = () => {
    if (isOpen === undefined) setIsOpened(!isOpened);
  };

  return (
    <div className={styles.container}>
      <div onClick={handleOpen}>{button}</div>
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
