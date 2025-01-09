import { StateCreator } from 'zustand';

type PersonalInfo = {
  firstName: string;
  lastName: string;
  address: string;
  dob: string;
  email: string;
  phone: string;
};

type PersonalInfoSlice = {
  personalInfo: PersonalInfo;
  setPersonalInfo: (personalInfo: PersonalInfo) => void;
};

const initialState = {
  firstName: '',
  lastName: '',
  address: '',
  dob: '',
  email: '',
  phone: '',
};

const createPersonalInfoSlice: StateCreator<PersonalInfoSlice> = (set) => ({
  personalInfo: initialState,
  setPersonalInfo: (data) => set((state) => ({ personalInfo: { ...state.personalInfo, ...data } })),
});

export default createPersonalInfoSlice;
export type { PersonalInfo, PersonalInfoSlice };
