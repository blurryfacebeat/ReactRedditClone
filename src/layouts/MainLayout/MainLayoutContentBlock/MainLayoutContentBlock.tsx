import { IMainLayoutContentBlockProps } from '@/layouts/MainLayout/MainLayoutContentBlock/MainLayoutContentBlock.types';

import styles from './MainLayoutContentBlock.module.scss';

const MainLayoutContentBlock = (props: IMainLayoutContentBlockProps) => {
  const { children } = props;

  return <main className={styles.contentBlock}>{children}</main>;
};

export default MainLayoutContentBlock;
