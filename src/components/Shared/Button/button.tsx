import * as React from 'react';
import { Link } from 'react-router-dom';
import { Button as ShadButton } from '@/components/ui/button';
import { Text } from '@/components/Shared/Text';
import { cn } from '@/utils';
import { Spinner } from '@/components/Shared/Spinner';

type ButtonProps = {
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  children?: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  disabled?: boolean;
  variant?: 'secondary' | 'ghost' | 'link' | 'destructive' | 'default' | 'outline' | null | undefined;
  size?: 'default' | 'sm' | 'lg' | 'icon' | null | undefined;
  shape?: 'rounded' | 'pill' | 'rectangular' | 'rounded-rectangular';
  withIcon?: boolean;
  icon?: React.ReactNode;
  iconClassName?: string;
  iconButton?: boolean;
  href?: string;
  loading?: boolean;
};

export const Button: React.FC<ButtonProps> = function ({
  type = 'button',
  className,
  children,
  onClick,
  disabled = false,
  variant,
  size,
  shape = 'rounded',
  withIcon = false,
  icon,
  iconClassName,
  iconButton = false,
  href = '#',
  loading = false,
}) {
  const buttonStyles = cn(
    'rounded-lg',
    {
      'rounded-full': shape === 'pill',
      'rounded-md': shape === 'rounded-rectangular',
      'rounded-none': shape === 'rectangular',
      'text-primary-900 w-fit p-0 m-0': variant === 'link',
    },
    className,
  );

  const iconStyles = cn('mr-2 h4 w-4', iconClassName);
  if (loading) {
    return (
      <ShadButton
        type={type}
        onClick={onClick}
        disabled={loading}
        variant={variant}
        size={size}
        className={buttonStyles}
      >
        <Spinner />
      </ShadButton>
    );
  }
  if (withIcon) {
    return (
      <ShadButton
        type={type}
        onClick={onClick}
        disabled={disabled}
        variant={variant}
        size={size}
        className={buttonStyles}
      >
        {icon}
        {' '}
        <Text as="label">{children}</Text>
      </ShadButton>
    );
  }

  if (iconButton) {
    return (
      <ShadButton
        type={type}
        onClick={onClick}
        disabled={disabled}
        variant="outline"
        size="icon"
        className={buttonStyles}
      >
        <div className={iconStyles}>{icon}</div>
      </ShadButton>
    );
  }

  if (variant === 'link') {
    return (
      <ShadButton
        type={type}
        onClick={onClick}
        disabled={disabled}
        variant={variant}
        size={size}
        className={buttonStyles}
        asChild
      >
        <Link to={href}>
          <Text as="label">{children}</Text>
        </Link>
      </ShadButton>
    );
  }

  return (
    <ShadButton
      type={type}
      onClick={onClick}
      disabled={disabled}
      variant={variant}
      size={size}
      className={buttonStyles}
    >
      <Text as="label">{children}</Text>
    </ShadButton>
  );
};
