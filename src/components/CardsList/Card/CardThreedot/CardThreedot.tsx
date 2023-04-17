import React from 'react';

import ThreeDotIcon from '@/assets/icons/ThreedotIcon.svg';

import styles from './CardThreedot.module.scss';

const CardThreedot = () => {
  return (
    <div className={styles.threedot}>
      <button className={styles.threedotButton}>
        <ThreeDotIcon />
      </button>
    </div>
  );
};

export default CardThreedot;
