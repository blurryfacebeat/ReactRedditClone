import React from 'react';
import cn from 'classnames';

import ThreeDotIcon from '@/assets/icons/ThreedotIcon.svg';
import TriangleIcon from '@/assets/icons/TriangleIcon.svg';
import CommentIcon from '@/assets/icons/CommentIcon.svg';
import LinkIcon from '@/assets/icons/LinkIcon.svg';
import PlusLayerIcon from '@/assets/icons/PlusLayerIcon.svg';

import styles from './Card.module.scss';

const Card = () => {
  return (
    <li className={styles.card}>
      <div className={styles.textContent}>
        <div className={styles.metaData}>
          <div className={styles.userLink}>
            <img src="https://dota2.ru/img/heroes/pudge/portrait.jpg" alt="User avatar" className={styles.avatar} />
            <a href="#user-url" className={styles.username}>
              Дмитрий Гришин
            </a>
          </div>
          <span className={styles.createdAt}>4 часа назад</span>
        </div>

        <h2 className={styles.title}>
          <a href="#post-url" className={styles.postLink}>
            Следует отметить, что новая модель организационной деятельности модель организационной деятельности
          </a>
        </h2>
      </div>

      <div className={styles.preview}>
        <img className={styles.previewImg} src="https://wallpaperaccess.com/full/671214.jpg" alt="Preview image" />
      </div>

      <div className={styles.menu}>
        <button className={styles.menuButton}>
          <ThreeDotIcon />
        </button>
      </div>

      <div className={styles.controls}>
        <div className={styles.karmaCounter}>
          <button className={cn(styles.triangle, styles.triangleUp)}>
            <TriangleIcon />
          </button>

          <span className={styles.karmaValue}>234</span>

          <button className={cn(styles.triangle, styles.triangleDown)}>
            <TriangleIcon />
          </button>
        </div>

        <button className={styles.commentsButton}>
          <CommentIcon />

          <span className={styles.commentsCounter}>13</span>
        </button>

        <div className={styles.actions}>
          <button className={styles.actionButton}>
            <LinkIcon />
          </button>

          <button className={styles.actionButton}>
            <PlusLayerIcon />
          </button>
        </div>
      </div>
    </li>
  );
};

export default Card;
