import React from 'react';
import { Card } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { useStore } from '@/stores/useStore';

export const AddOnsStep = () => {
  const { addOns, toggleAddOn, planInfo } = useStore();

  return (
    <div className='space-y-6'>
      <div>
        <h2 className='text-2xl font-bold text-gray-900'>Pick add-ons</h2>
        <p className='text-gray-500'>Add-ons help enhance your gaming experience.</p>
      </div>

      <div className='space-y-4'>
        {addOns.map((addon) => (
          <Card
            key={addon.id}
            className={`p-4 cursor-pointer transition-all duration-300 hover:shadow-lg border ${
              addon.selected ? 'border-primary bg-primary/5 shadow-md' : 'border-gray-200 hover:border-primary/50'
            }`}
            onClick={() => toggleAddOn(addon.id)}
          >
            <div className='flex items-center space-x-4'>
              <Checkbox checked={addon.selected} onCheckedChange={() => toggleAddOn(addon.id)} />
              <div className='flex-1'>
                <h3 className='font-medium text-gray-900'>{addon.name}</h3>
                <p className='text-sm text-gray-500'>{addon.description}</p>
              </div>
              <p className='text-primary font-medium'>
                +${planInfo.billingCycle === 'monthly' ? `${addon.monthlyPrice}/mo` : `${addon.yearlyPrice}/yr`}
              </p>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};
