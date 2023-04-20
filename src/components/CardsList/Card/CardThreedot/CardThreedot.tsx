import React from 'react';

import { Text } from '@/components/Text';
import { Dropdown } from '@/components/Dropdown';
import ThreeDotIcon from '@/assets/icons/ThreedotIcon.svg';

import styles from './CardThreedot.module.scss';

const CardThreedot = () => {
  return (
    <div className={styles.threedot}>
      <Dropdown
        button={
          <button className={styles.threedotButton}>
            <ThreeDotIcon />
          </button>
        }
      >
        <div className={styles.dropdown}>
          MenuItems
          <button className={styles.closeButton}>
            <Text color={'--grey-9'}>Закрыть</Text>
          </button>
        </div>
      </Dropdown>
    </div>
  );
};

export default CardThreedot;
