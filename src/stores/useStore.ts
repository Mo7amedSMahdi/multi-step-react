import { create } from 'zustand';
import { PersonalInfoSlice } from './slices/createPersonalInfoSlice';
import { PlanSlice } from './slices/createPlanSlice';
import { AddOnsSlice } from './slices/createAddOnSlice';
import { createPersonalInfoSlice, createPlanSlice, createAddOnSlice } from './slices';
import createPlansListSlice, { PlansListSlice } from './slices/createPlansListSlice';

export const useStore = create<PersonalInfoSlice & PlanSlice & AddOnsSlice & AddOnsSlice & PlansListSlice>()(
  (...a) => ({
    ...createPersonalInfoSlice(...a),
    ...createPlanSlice(...a),
    ...createAddOnSlice(...a),
    ...createAddOnSlice(...a),
    ...createPlansListSlice(...a),
  })
);
