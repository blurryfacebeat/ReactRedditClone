import { FunctionComponent } from 'react';

import { IMainLayoutProps } from 'src/layouts/MainLayout/MainLayout.types';

import { MainLayoutHeader } from '@/layouts/MainLayout/MainLayoutHeader';
import { MainLayoutContentBlock } from '@/layouts/MainLayout/MainLayoutContentBlock';

import styles from './MainLayout.module.scss';

const MainLayout = (props: IMainLayoutProps) => {
  const { children } = props;

  return (
    <div className={styles.layout}>
      <MainLayoutHeader />
      <MainLayoutContentBlock>{children}</MainLayoutContentBlock>
    </div>
  );
};

export const WithMainLayout = <T extends Record<string, unknown>>(Component: FunctionComponent<T>) => {
  return (props: T) => {
    return (
      <MainLayout>
        <Component {...props} />
      </MainLayout>
    );
  };
};
