import { CardText } from '@/components/CardsList/Card/CardText';
import { CardContent } from '@/components/CardsList/Card/CardContent';
import { CardThreedot } from '@/components/CardsList/Card/CardThreedot';
import { CardControls } from '@/components/CardsList/Card/CardControls';

import styles from './Card.module.scss';

const Card = () => {
  return (
    <li className={styles.card}>
      <CardText />

      <CardContent />

      <div className={styles.cardRightWrapper}>
        <CardThreedot />

        <CardControls />
      </div>
    </li>
  );
};

export default Card;
