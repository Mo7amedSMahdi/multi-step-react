import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Input } from '@/components/ui/input';
import { useStore } from '@/stores/useStore';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { personalInfoSchema } from '../schemas/personalInfo.schema';
import type { PersonalInfo } from '@/stores/slices/createPersonalInfoSlice';

export const PersonalInfoStep = () => {
  const { personalInfo, setPersonalInfo } = useStore();

  const form = useForm<PersonalInfo>({
    resolver: zodResolver(personalInfoSchema),
    defaultValues: personalInfo,
    mode: 'onChange',
  });

  // Update store when form is submitted
  const onSubmit = (data: PersonalInfo) => {
    setPersonalInfo(data);
  };

  // Watch form changes and update store
  useEffect(() => {
    const subscription = form.watch((value) => {
      if (value) {
        setPersonalInfo(value as PersonalInfo);
      }
    });
    return () => subscription.unsubscribe();
  }, [form.watch, setPersonalInfo]);

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-6'>
        <div>
          <h2 className='text-2xl font-bold text-gray-900'>Personal Info</h2>
          <p className='text-gray-500'>Please provide your personal information.</p>
        </div>

        <div className='space-y-4'>
          <div className='grid grid-cols-2 gap-4'>
            <FormField
              control={form.control}
              name='firstName'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>First Name</FormLabel>
                  <FormControl>
                    <Input placeholder='e.g. John' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name='lastName'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Last Name</FormLabel>
                  <FormControl>
                    <Input placeholder='e.g. Doe' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name='email'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input type='email' placeholder='e.g. johndoe@example.com' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name='phone'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone Number</FormLabel>
                <FormControl>
                  <Input type='tel' placeholder='e.g. +1 234 567 890' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name='address'
            render={({ field }) => (
              <FormItem>
                <FormLabel className='flex items-center gap-2'>
                  Address
                  <span className='text-sm text-muted-foreground'>(Optional)</span>
                </FormLabel>
                <FormControl>
                  <Input placeholder='e.g. 123 Main St' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name='dob'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Date of Birth</FormLabel>
                <FormControl>
                  <Input type='date' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
      </form>
    </Form>
  );
};
