import React, { useState } from 'react';

import { Link } from 'react-router-dom';
import { Post } from '@/components/Post';

import styles from './CardTextTitle.module.scss';

const CardTextTitle = () => {
  const [isModalOpened, setIsModalOpened] = useState(false);

  return (
    <h2 className={styles.title}>
      <p className={styles.postLink} onClick={() => setIsModalOpened(true)}>
        Следует отметить, что новая модель организационной деятельности модель организационной деятельности
      </p>

      {isModalOpened && <Post closeModal={() => setIsModalOpened(false)} />}
    </h2>
  );
};

export default CardTextTitle;
