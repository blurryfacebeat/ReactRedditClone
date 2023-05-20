import { createPortal } from 'react-dom';
import { useEffect, useRef } from 'react';

import { CommentForm } from '@/components/CommentForm';
import { IPostProps } from '@/components/Post/Post.types';

import styles from './Post.module.scss';

const Post = (props: IPostProps) => {
  const { closeModal } = props;

  const modalRef = useRef<HTMLDivElement>(null);

  const handleClick = (event: MouseEvent | TouchEvent) => {
    if (
      event.target instanceof HTMLElement &&
      modalRef.current?.contains(event.target) &&
      event.target.id === 'cardModal'
    )
      closeModal();
  };
  const clickHandlerWithDispose = () => {
    document.addEventListener('mousedown', handleClick);

    return () => document.removeEventListener('mousedown', handleClick);
  };

  useEffect(() => {
    const dispose = clickHandlerWithDispose();

    return () => dispose();
  }, []);

  const node = document.getElementById('app-modal');
  if (!node) return null;

  return createPortal(
    <div id="cardModal" ref={modalRef} className={styles.modal}>
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

        <CommentForm />
      </div>
    </div>,
    node,
  );
};

export default Post;
