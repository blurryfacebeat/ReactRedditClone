import React from 'react';

import styles from './CardText.module.scss';

const CardText = () => {
  return (
    <div className={styles.textContent}>
      <div className={styles.metaData}>
        <div className={styles.userLink}>
          <img src="https://dota2.ru/img/heroes/pudge/portrait.jpg" alt="User avatar" className={styles.avatar} />
          <a href="#user-url" className={styles.username}>
            Дмитрий Гришин
          </a>
        </div>
        <span className={styles.createdAt}>
          <span className={styles.publishedLabel}>опубликовано </span>
          <span>4 часа назад</span>
        </span>
      </div>

      <h2 className={styles.title}>
        <a href="#post-url" className={styles.postLink}>
          Следует отметить, что новая модель организационной деятельности модель организационной деятельности
        </a>
      </h2>
    </div>
  );
};

export default CardText;
