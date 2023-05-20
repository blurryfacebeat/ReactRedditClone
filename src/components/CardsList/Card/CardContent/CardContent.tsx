import styles from './CardContent.module.scss';

const CardContent = () => {
  return (
    <div className={styles.preview}>
      <img className={styles.previewImg} src="https://wallpaperaccess.com/full/671214.jpg" alt="Preview image" />
    </div>
  );
};

export default CardContent;
