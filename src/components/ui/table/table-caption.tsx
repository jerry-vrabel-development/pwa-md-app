import React from 'react';
import { cn } from '@/lib/utils';

export type TableCaptionProps =
React.HTMLAttributes<HTMLTableCaptionElement>;

export const TableCaption = React.forwardRef<HTMLTableCaptionElement,
TableCaptionProps>(
  ({ className, ...props }, ref) => (
    <caption
      ref={ref}
      className={cn('mt-4 text-sm text-gray-600 font-bold caption-top', className)}
      {...props}
    />
  )
);
TableCaption.displayName = "TableCaption";
