import React from 'react';

import { MainLayoutHeaderSearchUserBlock } from '@/layouts/MainLayout/MainLayoutHeader/MainLayoutHeaderSearch/MainLayoutHeaderSearchUserBlock';

import styles from './MainLayoutHeaderSearch.module.scss';

const MainLayoutHeaderSearch = () => {
  return (
    <div className={styles.searchBlock}>
      <MainLayoutHeaderSearchUserBlock />
    </div>
  );
};

export default MainLayoutHeaderSearch;
