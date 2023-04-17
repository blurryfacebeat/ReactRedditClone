import React from 'react';

import { CardControlsKarma } from '@/components/CardsList/Card/CardControls/CardControlsKarma';
import { CardControlsActions } from '@/components/CardsList/Card/CardControls/CardControlsActions';
import { CardControlsComments } from '@/components/CardsList/Card/CardControls/CardControlsComments';

import styles from './CardControls.module.scss';

const CardControls = () => {
  return (
    <div className={styles.controls}>
      <CardControlsKarma />

      <CardControlsComments />

      <CardControlsActions />
    </div>
  );
};

export default CardControls;
