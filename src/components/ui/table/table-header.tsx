import React from 'react';
import { cn } from '@/lib/utils';

export type TableHeaderProps =
React.HTMLAttributes<HTMLTableSectionElement>;

export const TableHeader = React.forwardRef<HTMLTableSectionElement,
TableHeaderProps>(
  ({ className, ...props }, ref) => (
    <thead ref={ref} className={cn('[&_tr]:border-b', className)}
{...props} />
  )
);
TableHeader.displayName = "TableHeader";
