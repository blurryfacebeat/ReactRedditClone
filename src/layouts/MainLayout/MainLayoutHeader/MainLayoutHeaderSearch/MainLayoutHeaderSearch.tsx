import React from 'react';

import styles from './MainLayoutHeaderSearch.module.scss';
import { MainLayoutHeaderSearchUserBlock } from '@/layouts/MainLayout/MainLayoutHeader/MainLayoutHeaderSearch/MainLayoutHeaderSearchUserBlock';

const MainLayoutHeaderSearch = () => {
  return (
    <div className={styles.searchBlock}>
      <MainLayoutHeaderSearchUserBlock />
    </div>
  );
};

export default MainLayoutHeaderSearch;
