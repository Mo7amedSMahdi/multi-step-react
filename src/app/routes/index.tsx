import { QueryClient } from '@tanstack/react-query';
import { createBrowserRouter } from 'react-router-dom';

/* eslint-disable */
export const createRouter = (queryClient: QueryClient) =>
  createBrowserRouter([
    {
      path: '/',
      lazy: async () => {
        const { LandingPage } = await import('@/features/landing');
        return { Component: LandingPage };
      },
    },
    {
      path: '*',
      lazy: async () => {
        const { NotFoundRoute } = await import('@/components/Errors');
        return { Component: NotFoundRoute };
      },
    },
  ]);
