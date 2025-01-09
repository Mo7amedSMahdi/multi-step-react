import { StateCreator } from 'zustand';

type PlanType = 'arcade' | 'advanced' | 'pro';
type BillingCycle = 'monthly' | 'yearly';

type PlanInfo = {
  planType: PlanType;
  billingCycle: BillingCycle;
};

type PlanSlice = {
  planInfo: PlanInfo;
  setPlanInfo: (plan: Partial<PlanInfo>) => void;
};

const initialState: PlanInfo = {
  planType: 'arcade',
  billingCycle: 'monthly',
};

const createPlanSlice: StateCreator<PlanSlice> = (set) => ({
  planInfo: initialState,
  setPlanInfo: (data) => set((state) => ({ planInfo: { ...state.planInfo, ...data } })),
});

export default createPlanSlice;
export type { PlanInfo, PlanSlice, PlanType, BillingCycle };
