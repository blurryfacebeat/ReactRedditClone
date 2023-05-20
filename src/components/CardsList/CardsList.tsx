import { Card } from '@/components/CardsList/Card';

import styles from './CardsList.module.scss';

const CardsList = () => {
  return (
    <ul className={styles.cardsList}>
      <Card />
    </ul>
  );
};

export default CardsList;
