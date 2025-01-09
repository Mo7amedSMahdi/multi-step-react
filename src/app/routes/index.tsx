import { QueryClient } from '@tanstack/react-query';
import { createBrowserRouter } from 'react-router-dom';

export const createRouter = (queryClient: QueryClient) =>
  createBrowserRouter([
    {
      path: '/',
      lazy: async () => {
        const { MultiStepForm } = await import('@/features/landing');
        return { Component: MultiStepForm };
      },
      children: [
        {
          path: '',
          lazy: async () => {
            const { PersonalInfoStep } = await import('@/features/landing/steps/PersonalInfo');
            return { Component: PersonalInfoStep };
          },
        },
        {
          path: 'select-plan',
          lazy: async () => {
            const { SelectPlanStep } = await import('@/features/landing/steps/SelectPlan');
            return { Component: SelectPlanStep };
          },
        },
        {
          path: 'add-ons',
          lazy: async () => {
            const { AddOnsStep } = await import('@/features/landing/steps/AddOns');
            return { Component: AddOnsStep };
          },
        },
        // {
        //   path: 'summary',
        //   lazy: async () => {
        //     const { SummaryStep } = await import('@/features/landing/steps/Summary');
        //     return { Component: SummaryStep };
        //   },
        // },
      ],
    },
    {
      path: '*',
      lazy: async () => {
        const { NotFoundRoute } = await import('@/components/Errors');
        return { Component: NotFoundRoute };
      },
    },
  ]);
