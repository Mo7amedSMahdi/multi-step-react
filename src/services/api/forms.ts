import { axiosPrivate } from './axios';
import { useStore } from '@/stores/useStore';

export const submitMultiStepForm = async () => {
  const store = useStore.getState();
  const formData = {
    personalInfo: store.personalInfo,
    plan: {
      type: store.planInfo.planType,
      billing: store.planInfo.billingCycle,
    },
    addOns: store.addOns.filter((addon) => addon.selected),
  };

  return axiosPrivate.post('/submit-form', formData);
};
