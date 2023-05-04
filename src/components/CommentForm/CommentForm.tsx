import React, { ChangeEvent, FormEvent, useState } from 'react';

import styles from './CommentForm.module.scss';

const CommentForm = () => {
  const [value, setValue] = useState('');

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setValue(event.target.value);
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <textarea className={styles.input} value={value} onChange={handleChange} />
      <button className={styles.button} type="submit">
        Комментировать!!
      </button>
    </form>
  );
};

export default CommentForm;
