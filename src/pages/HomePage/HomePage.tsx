import React from 'react';

import { CardsList } from '@/components/CardsList';
import { WithMainLayout } from '@/layouts/MainLayout/MainLayout';

const HomePage = () => {
  return (
    <section>
      <CardsList />
    </section>
  );
};

export default WithMainLayout(HomePage);
