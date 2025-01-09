import { useQueryClient } from '@tanstack/react-query';
import { useMemo } from 'react';
import { RouterProvider } from 'react-router-dom';

import { AppProvider } from './mainAppProvider';
import { createRouter } from '@/app/routes';

const AppRouter = function () {
  const queryClient = useQueryClient();
  const router = useMemo(() => createRouter(queryClient), [queryClient]);

  return <RouterProvider router={router} />;
};

const App = function () {
  return (
    <AppProvider>
      <AppRouter />
    </AppProvider>
  );
};

export default App;
