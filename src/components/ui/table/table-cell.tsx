import React from 'react';
import { cn } from '@/lib/utils';

export type TableCellProps = React.TdHTMLAttributes<HTMLTableCellElement>;

export const TableCell = React.forwardRef<HTMLTableCellElement,
TableCellProps>(
  ({ className, ...props }, ref) => (
    <td
      ref={ref}
      className={cn('p-4 align-middle [&:has([role=checkbox])]:pr-0',
className)}
      {...props}
    />
  )
);
TableCell.displayName = "TableCell";
