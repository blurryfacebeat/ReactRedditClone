import { AppRoutes } from '@/routes/routes';
import { UserContextProvider, TokenContextProvider } from '@/context';

export const App = () => {
  return (
    <TokenContextProvider>
      <UserContextProvider>
        <AppRoutes />
      </UserContextProvider>
    </TokenContextProvider>
  );
};
