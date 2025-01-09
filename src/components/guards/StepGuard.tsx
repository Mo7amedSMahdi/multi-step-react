import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useStore } from '@/stores/useStore';
import { personalInfoSchema } from '@/features/landing/schemas/personalInfo.schema';

export const StepGuard = ({ children }: { children: React.ReactNode }) => {
  const navigate = useNavigate();
  const { personalInfo, planInfo } = useStore();

  useEffect(() => {
    const currentPath = window.location.pathname;

    // Check for /select-plan access
    if (currentPath === '/select-plan') {
      const result = personalInfoSchema.safeParse(personalInfo);
      if (!result.success) {
        navigate('/');
      }
    }

    // Check for /add-ons access
    if (currentPath === '/add-ons') {
      const result = personalInfoSchema.safeParse(personalInfo);
      if (!result.success || !planInfo.planType) {
        navigate('/');
      }
    }

    // Check for /summary access
    if (currentPath === '/summary') {
      const result = personalInfoSchema.safeParse(personalInfo);
      if (!result.success || !planInfo.planType) {
        navigate('/');
      }
    }

    // Check for /thank-you access
    if (currentPath === '/thank-you') {
      const result = personalInfoSchema.safeParse(personalInfo);
      if (!result.success || !planInfo.planType) {
        navigate('/');
      }
    }
  }, [navigate, personalInfo, planInfo]);

  return <>{children}</>;
};
