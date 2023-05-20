import CommentIcon from '@/assets/icons/CommentIcon.svg';

import styles from './CardControlsComments.module.scss';

const CardControlsComments = () => {
  return (
    <button className={styles.commentsButton}>
      <CommentIcon />

      <span className={styles.commentsCounter}>13</span>
    </button>
  );
};

export default CardControlsComments;
