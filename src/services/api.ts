import axios from 'axios';
import { useStore } from '@/stores/useStore';

export const submitForm = async () => {
  const store = useStore.getState();
  const formData = {
    personalInfo: store.personalInfo,
    plan: {
      type: store.planInfo.planType,
      billing: store.planInfo.billingCycle,
    },
    addOns: store.addOns.filter((addon) => addon.selected),
  };

  const response = await axios.post('/api/submit-form', formData);
  return response.data;
};
