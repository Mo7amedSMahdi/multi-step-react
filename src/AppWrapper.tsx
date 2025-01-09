import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { BrowserRouter } from 'react-router-dom';
import { useLazyRef } from '@/hooks/lazyRef';
import './index.css';

// const LazyApp = React.lazy(() => import('./App'));

const AppWrapper: React.FC = function () {
  const queryClient = useLazyRef(() => new QueryClient());

  return (
    <React.StrictMode>
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <React.Suspense fallback={<div>Loading...</div>}>{/* <LazyApp /> */}</React.Suspense>
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </BrowserRouter>
    </React.StrictMode>
  );
};

export default AppWrapper;
