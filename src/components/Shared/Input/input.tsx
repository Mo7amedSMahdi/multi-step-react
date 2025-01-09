import React from 'react';
import { Input as ShadInput } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Text } from '@/components/Shared/Text';

import { cn } from '@/utils';

type Props = {
  id?: string;
  name?: string;
  label: string;
  className?: string;
  containerClassName?: string;
  labelClassName?: string;
  textClassName?: string;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  iconClassName?: string;
  type?: 'text' | 'password' | 'email' | 'tel' | 'url' | 'number';
  defaultValue?: string | number;
  value?: string | number;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
  placeholder?: string;
  disabled?: boolean;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  required?: boolean;
  hasError?: boolean;
  errorText?: string;
  showPassword?: boolean;
};

export const Input = React.forwardRef<HTMLInputElement, Props>(
  (
    {
      disabled = false,
      className,
      labelClassName,
      containerClassName,
      textClassName,
      startIcon,
      endIcon,
      iconClassName,
      label,
      placeholder,
      type,
      defaultValue,
      value,
      onChange,
      onBlur,
      onFocus,
      onKeyDown,
      required,
      hasError,
      errorText,
      showPassword = false,
      id,
      name,
      ...rest
    },
    ref,
  ) => {
    const labelStyles = cn('block text-gray-700 text-sm font-bold mb-1', labelClassName);
    const containerStyles = cn('flex flex-col items-start space-y-1', containerClassName);
    const inputStyles = cn(
      'w-full h-12 px-4 py-2.5 text-sm border border-marble-400 rounded-md',
      {
        'bg-marble-50': !hasError,
        'bg-red-50': hasError,
        'border-red-500': hasError,
        'pl-10': startIcon,
      },
      className,
    );
    const iconStyles = cn(
      'absolute top-0 w-12 h-full flex items-center justify-center text-gray-400',
      {
        'right-0': endIcon,
        'left-0': startIcon,
      },
      iconClassName,
    );
    return (
      <div className={containerStyles}>
        {label && (
          <Label htmlFor={id || name} className={labelStyles}>
            <Text as="label">{label}</Text>
          </Label>
        )}
        <div className="relative w-full mb-2 p-0 flex justify-between items-center">
          {startIcon && <div className={iconStyles}>{startIcon}</div>}
          <ShadInput
            {...rest}
            id={id}
            name={name}
            className={inputStyles}
            placeholder={placeholder}
            type={type === 'password' && showPassword ? 'text' : type}
            defaultValue={defaultValue}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            onFocus={onFocus}
            onKeyDown={onKeyDown}
            disabled={disabled}
            required={required}
            ref={ref}
          />
          {endIcon && <div className={iconStyles}>{endIcon}</div>}
        </div>
        {hasError && <p className={cn('text-red-500 text-xs italic mt-2', textClassName)}>{errorText}</p>}
      </div>
    );
  },
);
