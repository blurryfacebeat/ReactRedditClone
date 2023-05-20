import { Provider } from 'react-redux';

import { store } from '@/store/store';
import { AppRoutes } from '@/routes/routes';
import { UserContextProvider, TokenContextProvider } from '@/context';

export const App = () => {
  return (
    <Provider store={store}>
      <TokenContextProvider>
        <UserContextProvider>
          <AppRoutes />
        </UserContextProvider>
      </TokenContextProvider>
    </Provider>
  );
};
