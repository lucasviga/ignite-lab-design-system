import { ReactNode } from 'react';
import { Slot } from '@radix-ui/react-slot';
import clsx from 'clsx';

export interface TextProps {
  size?: 'sm' | 'md' | 'lg';
  children: ReactNode;
  asChild?: boolean;
}

export function Text({ size = 'md', children, asChild }: TextProps) {
  const TagHtml = asChild ? Slot : 'span';

  return (
    <TagHtml className={clsx(
      'text-gray-100 font-sans', 
      {
        'text-xs': size === 'sm',
        'text-sm': size === 'md',
        'text-md': size === 'lg'
      }
    )}>
      {children}
    </TagHtml>
  )
}