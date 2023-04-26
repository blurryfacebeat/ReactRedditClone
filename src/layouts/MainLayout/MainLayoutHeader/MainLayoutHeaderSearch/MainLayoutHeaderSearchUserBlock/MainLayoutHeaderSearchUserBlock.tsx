import React from 'react';

import { Link } from 'react-router-dom';
import { Text } from '@/components/Text';
import UserAvatarIcon from '@/assets/icons/UserAvatar.svg';
import { IMainLayoutHeaderSearchUserBlockProps } from '@/layouts/MainLayout/MainLayoutHeader/MainLayoutHeaderSearch/MainLayoutHeaderSearchUserBlock/MainLayoutHeaderSearchUserBlock.types';

import styles from './MainLayoutHeaderSearchUserBlock.module.scss';

const CLIENT_ID = process.env.CLIENT_ID;
const authLink = `https://www.reddit.com/api/v1/authorize?client_id=${CLIENT_ID}&response_type=token&state=random_string&redirect_uri=http://localhost:3000/auth&scope=read submit identity`;

const MainLayoutHeaderSearchUserBlock = (props: IMainLayoutHeaderSearchUserBlockProps) => {
  const { avatarSrc, username } = props;

  return (
    <Link to={authLink} className={styles.userBox}>
      <div className={styles.avatarBox}>
        {avatarSrc ? <img src={avatarSrc} alt="User Avatar" className={styles.avatarImage} /> : <UserAvatarIcon />}
      </div>

      <div className={styles.username}>
        <Text fontSize={20} tabletFontSize={20} color={username ? '--black-1' : '--grey-5'}>
          {username || 'Аноним'}
        </Text>
      </div>
    </Link>
  );
};

export default MainLayoutHeaderSearchUserBlock;
