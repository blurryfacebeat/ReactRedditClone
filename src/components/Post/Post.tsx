import React from 'react';
import { createPortal } from 'react-dom';

import styles from './Post.module.scss';

const Post = () => {
  const node = document.getElementById('app-modal');

  if (!node) return null;

  return createPortal(
    <div className={styles.modal}>
      <div className={styles.modalContainer}>
        <h2>Следует отметить, что новая модель организационной деятельности поможет</h2>

        <div className={styles.cotent}>
          <p>
            Следует отметить, что новая модель организационной деятельности поможет Следует отметить, что новая модель
            организационной деятельности поможет
          </p>
          <p>
            Следует отметить, что новая модель организационной деятельности поможет Следует отметить, что новая модель
            организационной деятельности поможет
          </p>
          <p>
            Следует отметить, что новая модель организационной деятельности поможет Следует отметить, что новая модель
            организационной деятельности поможет
          </p>
        </div>
      </div>
    </div>,
    node,
  );
};

export default Post;
