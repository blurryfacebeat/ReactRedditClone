import cn from 'classnames';

import TriangleIcon from '@/assets/icons/TriangleIcon.svg';

import styles from './CardControlsKarma.module.scss';

const CardControlsKarma = () => {
  return (
    <div className={styles.karmaCounter}>
      <button className={cn(styles.triangle, styles.triangleUp)}>
        <TriangleIcon />
      </button>

      <span className={styles.karmaValue}>234</span>

      <button className={cn(styles.triangle, styles.triangleDown)}>
        <TriangleIcon />
      </button>
    </div>
  );
};

export default CardControlsKarma;
