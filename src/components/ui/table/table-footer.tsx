import React from 'react';
import { cn } from '@/lib/utils';

export type TableFooterProps =
React.HTMLAttributes<HTMLTableSectionElement>;

export const TableFooter = React.forwardRef<HTMLTableSectionElement,
TableFooterProps>(
  ({ className, ...props }, ref) => (
    <tfoot
      ref={ref}
      className={cn('border-t bg-gray-50/50 font-medium[&>tr]:last:border-b-0', className)}
      {...props}
    />
  )
);
TableFooter.displayName = "TableFooter";
