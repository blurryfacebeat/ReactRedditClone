import React from 'react';

import { MainLayoutHeaderSearch } from '@/layouts/MainLayout/MainLayoutHeader/MainLayoutHeaderSearch';
import { MainLayoutHeaderSort } from '@/layouts/MainLayout/MainLayoutHeader/MainLayoutHeaderSort';
import { MainLayoutHeaderThreadTitle } from '@/layouts/MainLayout/MainLayoutHeader/MainLayoutHeaderThreadTitle';

import styles from './MainLayoutHeader.module.scss';

const MainLayoutHeader = () => {
  return (
    <header className={styles.header}>
      <MainLayoutHeaderSearch />
      <MainLayoutHeaderThreadTitle />
      <MainLayoutHeaderSort />
    </header>
  );
};

export default MainLayoutHeader;
