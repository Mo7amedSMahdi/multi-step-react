import React from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { Card, CardContent, CardFooter } from '@/components/ui/card';

export const MultiStepForm = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const steps = [
    { title: 'Your Info', path: '/' },
    { title: 'Select Plan', path: '/select-plan' },
    { title: 'Add-ons', path: '/add-ons' },
    { title: 'Summary', path: '/summary' },
  ];

  const currentStepIndex = steps.findIndex((step) => step.path === location.pathname) || 0;

  const handleNext = async () => {
    if (currentStepIndex < steps.length - 1) {
      // Get the form element
      const form = document.querySelector('form');
      if (form) {
        // Trigger form validation
        const event = new Event('submit', { cancelable: true, bubbles: true });
        const isValid = await form.dispatchEvent(event);

        if (isValid) {
          navigate(steps[currentStepIndex + 1].path);
        }
      }
    }
  };

  const handleBack = () => {
    if (currentStepIndex > 0) {
      navigate(steps[currentStepIndex - 1].path);
    }
  };

  return (
    <div className='min-h-screen bg-slate-100 flex items-center justify-center p-4'>
      <Card className='w-full max-w-3xl bg-white'>
        <CardContent className='p-6'>
          <div className='flex gap-4 mb-6'>
            {steps.map((step, index) => (
              <div
                key={step.path}
                className={`flex items-center gap-2 ${index === currentStepIndex ? 'text-primary' : 'text-gray-500'}`}
              >
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center border ${
                    index === currentStepIndex ? 'border-primary bg-primary text-white' : 'border-gray-300'
                  }`}
                >
                  {index + 1}
                </div>
                <span className='hidden md:inline'>{step.title}</span>
              </div>
            ))}
          </div>

          <Outlet />
        </CardContent>

        <CardFooter className='flex justify-between p-6'>
          {currentStepIndex > 0 && (
            <button onClick={handleBack} className='px-4 py-2 text-gray-500 hover:text-gray-700'>
              Go Back
            </button>
          )}
          <button
            onClick={handleNext}
            className='px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 ml-auto'
          >
            {currentStepIndex === steps.length - 1 ? 'Confirm' : 'Next Step'}
          </button>
        </CardFooter>
      </Card>
    </div>
  );
};
