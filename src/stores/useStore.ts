import { create } from 'zustand';
import { PersonalInfoSlice } from './slices/createPersonalInfoSlice';
import { createPersonalInfoSlice } from './slices';

export const useStore = create<PersonalInfoSlice>((...a) => ({
  ...createPersonalInfoSlice(...a),
}));
