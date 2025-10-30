import React from 'react';
import { cn } from '@/lib/utils';

export interface TableRowProps extends
React.HTMLAttributes<HTMLTableRowElement> {}

export const TableRow = React.forwardRef<HTMLTableRowElement,
TableRowProps>(
  ({ className, ...props }, ref) => (
    <tr
      ref={ref}
      className={cn(
        'border-b transition-colors hover:bg-slate-50data-[state=selected]:bg-slate-100',
        className
      )}
      {...props}
    />
  )
);
TableRow.displayName = "TableRow";
