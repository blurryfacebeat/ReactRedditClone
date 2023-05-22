import styles from './MainLayoutHeaderSearchUserBlockSkeleton.module.scss';

const MainLayoutHeaderSearchUserBlockSkeleton = () => {
  return (
    <div className={styles.skeleton}>
      <div className={styles.avatar} />
      <div className={styles.username} />
    </div>
  );
};

export default MainLayoutHeaderSearchUserBlockSkeleton;
