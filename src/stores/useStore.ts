import { create } from 'zustand';
import { PersonalInfoSlice } from './slices/createPersonalInfoSlice';
import { PlanSlice } from './slices/createPlanSlice';
import { AddOnsSlice } from './slices/createAddOnSlice';
import { ToggleSubcriptionPlanSlice } from './slices/createToggleSubscriptionPlan';
import {
  createPersonalInfoSlice,
  createPlanSlice,
  createAddOnSlice,
  createToggleSubscriptionPlan,
  createStepSlice,
  createSubmitFormSlice,
} from './slices';
import { StepSlice } from './slices/createStepSlice';
import { SubmitFormSlice } from './slices/createSubmitFormSlice';

export const useStore = create<
  PersonalInfoSlice & PlanSlice & AddOnsSlice & ToggleSubcriptionPlanSlice & StepSlice & SubmitFormSlice
>()((...a) => ({
  ...createPersonalInfoSlice(...a),
  ...createPlanSlice(...a),
  ...createAddOnSlice(...a),
  ...createToggleSubscriptionPlan(...a),
  ...createStepSlice(...a),
  ...createSubmitFormSlice(...a),
  ...createAddOnSlice(...a),
}));
