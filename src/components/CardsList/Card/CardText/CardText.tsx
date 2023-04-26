import React from 'react';

import { Link } from 'react-router-dom';

import styles from './CardText.module.scss';

const CardText = () => {
  return (
    <div className={styles.textContent}>
      <div className={styles.metaData}>
        <div className={styles.userLink}>
          <img src="https://dota2.ru/img/heroes/pudge/portrait.jpg" alt="User avatar" className={styles.avatar} />
          <Link to="/user-url" className={styles.username}>
            Дмитрий Гришин
          </Link>
        </div>
        <span className={styles.createdAt}>
          <span className={styles.publishedLabel}>опубликовано </span>
          <span>4 часа назад</span>
        </span>
      </div>

      <h2 className={styles.title}>
        <Link to="/post-url" className={styles.postLink}>
          Следует отметить, что новая модель организационной деятельности модель организационной деятельности
        </Link>
      </h2>
    </div>
  );
};

export default CardText;
