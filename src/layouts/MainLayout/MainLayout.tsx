import React, { FunctionComponent } from 'react';

import { IMainLayoutProps } from 'src/layouts/MainLayout/MainLayout.types';

import styles from './MainLayout.module.scss';

const MainLayout = (props: IMainLayoutProps) => {
  const { children } = props;

  return (
    <div className={styles.layout}>
      <header>header</header>
      <main>{children}</main>
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
