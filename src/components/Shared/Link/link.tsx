import { Link as RouterLink, LinkProps } from 'react-router-dom';

import { cn } from '@/utils';

export const Link = function ({ className, children, ...props }: LinkProps) {
  return (
    <RouterLink className={cn('text-slate-600 hover:text-slate-900', className)} {...props}>
      {children}
    </RouterLink>
  );
};
