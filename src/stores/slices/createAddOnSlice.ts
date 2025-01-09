import { StateCreator } from 'zustand';

type AddOn = {
  id: string;
  name: string;
  description: string;
  monthlyPrice: number;
  yearlyPrice: number;
  selected: boolean;
};

type AddOnsSlice = {
  addOns: AddOn[];
  toggleAddOn: (id: string) => void;
};

const initialAddOns: AddOn[] = [
  {
    id: 'online-service',
    name: 'Online service',
    description: 'Access to multiplayer games',
    monthlyPrice: 1,
    yearlyPrice: 10,
    selected: false,
  },
  {
    id: 'larger-storage',
    name: 'Larger storage',
    description: 'Extra 1TB of cloud save',
    monthlyPrice: 2,
    yearlyPrice: 20,
    selected: false,
  },
  {
    id: 'customizable-profile',
    name: 'Customizable profile',
    description: 'Custom theme on your profile',
    monthlyPrice: 2,
    yearlyPrice: 20,
    selected: false,
  },
];

const createAddOnsSlice: StateCreator<AddOnsSlice> = (set) => ({
  addOns: initialAddOns,
  toggleAddOn: (id) =>
    set((state) => ({
      addOns: state.addOns.map((addon) => (addon.id === id ? { ...addon, selected: !addon.selected } : addon)),
    })),
});

export default createAddOnsSlice;
export type { AddOn, AddOnsSlice };
