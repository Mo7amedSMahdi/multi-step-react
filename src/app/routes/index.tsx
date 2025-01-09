import { QueryClient } from '@tanstack/react-query';
import { createBrowserRouter } from 'react-router-dom';
import { StepGuard } from '@/components/guards/StepGuard';
import { MultiStepForm } from '@/features/landing';

export const createRouter = (queryClient: QueryClient) =>
  createBrowserRouter([
    {
      path: '/',
      element: (
        <StepGuard>
          <MultiStepForm />
        </StepGuard>
      ),
      children: [
        {
          index: true,
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
        {
          path: 'summary',
          lazy: async () => {
            const { SummaryStep } = await import('@/features/landing/steps/Summary');
            return { Component: SummaryStep };
          },
        },
        {
          path: 'thank-you',
          lazy: async () => {
            const { ThankYouStep } = await import('@/features/landing/steps/ThankYou');
            return { Component: ThankYouStep };
          },
        },
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
