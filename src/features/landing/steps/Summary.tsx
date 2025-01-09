import React from 'react';
import { Card } from '@/components/ui/card';
import { useStore } from '@/stores/useStore';
import { useNavigate } from 'react-router-dom';

export const SummaryStep = () => {
  const { plans, planInfo, addOns } = useStore();
  const navigate = useNavigate();

  const selectedPlan = plans.find((p) => p.id === planInfo.planType);
  const selectedAddOns = addOns.filter((addon) => addon.selected);

  const planPrice = planInfo.billingCycle === 'monthly' ? selectedPlan?.monthlyPrice : selectedPlan?.yearlyPrice;

  const addOnsTotal = selectedAddOns.reduce(
    (total, addon) => total + (planInfo.billingCycle === 'monthly' ? addon.monthlyPrice : addon.yearlyPrice),
    0
  );

  const total = (planPrice || 0) + addOnsTotal;

  return (
    <div className='space-y-6'>
      <div>
        <h2 className='text-2xl font-bold text-gray-900'>Finishing up</h2>
        <p className='text-gray-500'>Double-check everything looks OK before confirming.</p>
      </div>

      <Card className='p-6 bg-gray-50'>
        <div className='space-y-4'>
          <div className='flex justify-between items-center pb-4 border-b'>
            <div>
              <h3 className='font-medium text-primary'>
                {selectedPlan?.name} ({planInfo.billingCycle})
              </h3>
              <button
                className='text-sm text-gray-500 underline hover:text-primary'
                onClick={() => navigate('/select-plan')}
              >
                Change
              </button>
            </div>
            <p className='font-medium'>
              ${planPrice}/{planInfo.billingCycle === 'monthly' ? 'mo' : 'yr'}
            </p>
          </div>

          {selectedAddOns.length > 0 && (
            <div className='space-y-2'>
              {selectedAddOns.map((addon) => (
                <div key={addon.id} className='flex justify-between items-center text-gray-500'>
                  <p>{addon.name}</p>
                  <p>
                    +${planInfo.billingCycle === 'monthly' ? addon.monthlyPrice : addon.yearlyPrice}/
                    {planInfo.billingCycle === 'monthly' ? 'mo' : 'yr'}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className='flex justify-between items-center mt-6 pt-6 border-t'>
          <p className='text-gray-500'>Total (per {planInfo.billingCycle === 'monthly' ? 'month' : 'year'})</p>
          <p className='text-xl font-bold text-primary'>
            ${total}/{planInfo.billingCycle === 'monthly' ? 'mo' : 'yr'}
          </p>
        </div>
      </Card>
    </div>
  );
};
