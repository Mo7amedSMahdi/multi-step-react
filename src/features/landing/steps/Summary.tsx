import React from 'react';
import { Card } from '@/components/ui/card';
import { useStore } from '@/stores/useStore';
import { useNavigate } from 'react-router-dom';

export const SummaryStep = () => {
  const { plans, planInfo, addOns, personalInfo } = useStore();
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
        <div className='space-y-6'>
          {/* Personal Information Section */}
          <div>
            <h3 className='font-medium text-gray-900 mb-4'>Personal Information</h3>
            <div className='grid grid-cols-2 gap-4 text-sm'>
              <div>
                <p className='text-gray-500'>Full Name</p>
                <p className='font-medium'>{`${personalInfo.firstName} ${personalInfo.lastName}`}</p>
              </div>
              <div>
                <p className='text-gray-500'>Email</p>
                <p className='font-medium'>{personalInfo.email}</p>
              </div>
              <div>
                <p className='text-gray-500'>Phone</p>
                <p className='font-medium'>{personalInfo.phone}</p>
              </div>
              <div>
                <p className='text-gray-500'>Date of Birth</p>
                <p className='font-medium'>{personalInfo.dob}</p>
              </div>
              {personalInfo.address && (
                <div className='col-span-2'>
                  <p className='text-gray-500'>Address</p>
                  <p className='font-medium'>{personalInfo.address}</p>
                </div>
              )}
            </div>
          </div>

          <div className='border-t pt-6'>
            <h3 className='font-medium text-gray-900 mb-4'>Selected Plan & Add-ons</h3>
            {/* Plan Selection Section */}
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

            {/* Add-ons Section */}
            {selectedAddOns.length > 0 && (
              <div className='space-y-2 mt-4'>
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

          {/* Total Section */}
          <div className='flex justify-between items-center pt-6 border-t'>
            <p className='text-gray-500'>Total (per {planInfo.billingCycle === 'monthly' ? 'month' : 'year'})</p>
            <p className='text-xl font-bold text-primary'>
              ${total}/{planInfo.billingCycle === 'monthly' ? 'mo' : 'yr'}
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
};
