import { StateCreator } from 'zustand';

export type Plan = {
  id: 'arcade' | 'advanced' | 'pro';
  name: string;
  monthlyPrice: number;
  yearlyPrice: number;
};

type PlansListSlice = {
  plans: Plan[];
};

const initialPlans: Plan[] = [
  {
    id: 'arcade',
    name: 'Arcade',
    monthlyPrice: 9,
    yearlyPrice: 90,
  },
  {
    id: 'advanced',
    name: 'Advanced',
    monthlyPrice: 12,
    yearlyPrice: 120,
  },
  {
    id: 'pro',
    name: 'Pro',
    monthlyPrice: 15,
    yearlyPrice: 150,
  },
];

const createPlansListSlice: StateCreator<PlansListSlice> = () => ({
  plans: initialPlans,
});

export default createPlansListSlice;
export type { PlansListSlice };
