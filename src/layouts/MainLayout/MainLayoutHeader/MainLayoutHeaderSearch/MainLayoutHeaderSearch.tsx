import { useSelector } from 'react-redux';

import { RootState } from '@/store/store';

import { MainLayoutHeaderSearchUserBlockSkeleton } from './MainLayoutHeaderSearchUserBlockSkeleton';
import { MainLayoutHeaderSearchUserBlock } from '@/layouts/MainLayout/MainLayoutHeader/MainLayoutHeaderSearch/MainLayoutHeaderSearchUserBlock';

import styles from './MainLayoutHeaderSearch.module.scss';

const MainLayoutHeaderSearch = () => {
  const isLoading = useSelector((state: RootState) => state.profile.isLoading);
  const profileData = useSelector((state: RootState) => state.profile.profileInfo);

  return (
    <div className={styles.searchBlock}>
      {isLoading ? (
        <MainLayoutHeaderSearchUserBlockSkeleton />
      ) : (
        <MainLayoutHeaderSearchUserBlock avatarSrc={profileData.iconImg} username={profileData.name} />
      )}
    </div>
  );
};

export default MainLayoutHeaderSearch;
