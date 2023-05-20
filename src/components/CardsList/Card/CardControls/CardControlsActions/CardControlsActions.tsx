import LinkIcon from '@/assets/icons/LinkIcon.svg';
import PlusLayerIcon from '@/assets/icons/PlusLayerIcon.svg';

import styles from './CardControlsActions.module.scss';

const CardControlsActions = () => {
  return (
    <div className={styles.actions}>
      <button className={styles.actionButton}>
        <LinkIcon />
      </button>

      <button className={styles.actionButton}>
        <PlusLayerIcon />
      </button>
    </div>
  );
};

export default CardControlsActions;
