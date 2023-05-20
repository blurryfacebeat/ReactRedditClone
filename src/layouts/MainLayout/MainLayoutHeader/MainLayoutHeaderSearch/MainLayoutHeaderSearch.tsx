import { useContext } from 'react';

import { userContext } from '@/context';
import { MainLayoutHeaderSearchUserBlock } from '@/layouts/MainLayout/MainLayoutHeader/MainLayoutHeaderSearch/MainLayoutHeaderSearchUserBlock';

import styles from './MainLayoutHeaderSearch.module.scss';

const MainLayoutHeaderSearch = () => {
  const { name, iconImg } = useContext(userContext);

  return (
    <div className={styles.searchBlock}>
      <MainLayoutHeaderSearchUserBlock avatarSrc={iconImg} username={name} />
    </div>
  );
};

export default MainLayoutHeaderSearch;
