import { useSelector } from 'react-redux';

import { RootState } from '@/store/store';

import { MainLayoutHeaderSearchUserBlock } from '@/layouts/MainLayout/MainLayoutHeader/MainLayoutHeaderSearch/MainLayoutHeaderSearchUserBlock';

import styles from './MainLayoutHeaderSearch.module.scss';

const MainLayoutHeaderSearch = () => {
  const profileData = useSelector((state: RootState) => state.profile.profileInfo);

  return (
    <div className={styles.searchBlock}>
      <MainLayoutHeaderSearchUserBlock avatarSrc={profileData.iconImg} username={profileData.name} />
    </div>
  );
};

export default MainLayoutHeaderSearch;
