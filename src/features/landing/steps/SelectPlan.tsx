import React from 'react';
import { Card } from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';
import { useStore } from '@/stores/useStore';
import { IconArcade, IconAdvanced, IconPro } from '@/components/icons';

const plans = [
  {
    id: 'arcade',
    name: 'Arcade',
    icon: IconArcade,
    monthlyPrice: 9,
    yearlyPrice: 90,
  },
  {
    id: 'advanced',
    name: 'Advanced',
    icon: IconAdvanced,
    monthlyPrice: 12,
    yearlyPrice: 120,
  },
  {
    id: 'pro',
    name: 'Pro',
    icon: IconPro,
    monthlyPrice: 15,
    yearlyPrice: 150,
  },
] as const;

export const SelectPlanStep = () => {
  const { planInfo, setPlanInfo } = useStore();

  return (
    <div className='space-y-6'>
      <div>
        <h2 className='text-2xl font-bold text-gray-900'>Select your plan</h2>
        <p className='text-gray-500'>You have the option of monthly or yearly billing.</p>
      </div>

      <div className='grid grid-cols-3 gap-4'>
        {plans.map((plan) => (
          <Card
            key={plan.id}
            className={`p-4 cursor-pointer transition-all duration-300 hover:shadow-lg border-2 ${
              planInfo.planType === plan.id
                ? 'border-primary bg-gradient-to-br from-primary/10 via-primary/5 to-primary/10 shadow-md ring-2 ring-primary/20 ring-offset-2'
                : 'border-gray-200 hover:border-primary/50 bg-white/50 hover:bg-white/70'
            } backdrop-blur-md backdrop-saturate-150`}
            onClick={() => setPlanInfo({ planType: plan.id })}
          >
            <div className='space-y-4'>
              <plan.icon className={`w-10 h-10 ${planInfo.planType === plan.id ? 'text-primary' : 'text-gray-500'}`} />
              <div>
                <h3 className={`font-medium ${planInfo.planType === plan.id ? 'text-primary' : 'text-gray-900'}`}>
                  {plan.name}
                </h3>
                <p className='text-sm text-gray-500'>
                  ${planInfo.billingCycle === 'monthly' ? `${plan.monthlyPrice}/mo` : `${plan.yearlyPrice}/yr`}
                </p>
                {planInfo.billingCycle === 'yearly' && (
                  <p className='text-xs text-primary mt-1 font-medium'>2 months free</p>
                )}
              </div>
            </div>
          </Card>
        ))}
      </div>
      <div className='flex items-center justify-center space-x-4 bg-slate-50 p-4 rounded-lg'>
        <span className={planInfo.billingCycle === 'monthly' ? 'font-medium' : ''}>Monthly</span>
        <Switch
          checked={planInfo.billingCycle === 'yearly'}
          onCheckedChange={(checked) => setPlanInfo({ billingCycle: checked ? 'yearly' : 'monthly' })}
        />
        <span className={planInfo.billingCycle === 'yearly' ? 'font-medium' : ''}>Yearly</span>
      </div>
    </div>
  );
};
