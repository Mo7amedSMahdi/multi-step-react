import React, { useEffect, useState } from 'react';
import { CheckCircledIcon } from '@radix-ui/react-icons';
import { useNavigate } from 'react-router-dom';

export const ThankYouStep = () => {
  const navigate = useNavigate();
  const [countdown, setCountdown] = useState(15);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => prev - 1);
    }, 1000);

    if (countdown === 0) {
      window.location.reload();
    }

    return () => clearInterval(timer);
  }, [countdown, navigate]);

  return (
    <div className='flex flex-col items-center justify-center text-center space-y-6 py-12'>
      <div className='rounded-full bg-primary/10 p-3'>
        <CheckCircledIcon className='w-12 h-12 text-primary animate-pulse' />
      </div>

      <div className='space-y-2'>
        <h2 className='text-2xl font-bold text-gray-900'>Thank you!</h2>
        <p className='text-gray-500 max-w-md'>
          Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support,
          please feel free to email us at support@multi-step.com.
        </p>
        <p className='text-primary font-medium mt-4'>Redirecting in {countdown} seconds...</p>
      </div>
    </div>
  );
};
