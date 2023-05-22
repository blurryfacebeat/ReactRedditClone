import { useEffect } from 'react';
import { Provider as StoreProvider } from 'react-redux';

import { useAuth } from '@/hooks';
import { AppRoutes } from '@/routes/routes';
import { store } from '@/store/store';
import { getProfile } from '@/store/auth/actions/profileActions';

import { BaseLoader } from '@/components/Loaders';

export const App = () => {
  const [isLoading] = useAuth();

  useEffect(() => {
    if (!isLoading) store.dispatch(getProfile());
  }, [isLoading]);

  return (
    <>
      {isLoading ? (
        <BaseLoader />
      ) : (
        <StoreProvider store={store}>
          <AppRoutes />
        </StoreProvider>
      )}
    </>
  );
};
