import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { Outlet, useLocation } from 'react-router-dom';

import { DashboardLayout } from '@/components/Layout';
import { Spinner } from '@/components/Shared';

export const AppRoot = function () {
  const location = useLocation();
  return (
    <DashboardLayout>
      <Suspense
        fallback={(
          <div className="flex size-full items-center justify-center">
            <Spinner />
          </div>
        )}
      >
        <ErrorBoundary key={location.pathname} fallback={<div>Something went wrong!</div>}>
          <Outlet />
        </ErrorBoundary>
      </Suspense>
    </DashboardLayout>
  );
};
