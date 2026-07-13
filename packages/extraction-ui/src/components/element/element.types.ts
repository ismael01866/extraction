import { ComponentProps, ElementType, ReactNode } from 'react';

export type ElementProps<T extends ElementType> = {
  as?: T;
  asChild?: boolean;
  children?: ReactNode;
  className?: string;
  cssClassName?: string;
} & Omit<ComponentProps<T>, 'as' | 'asChild' | 'className' | 'children' | 'cssClassName'>;
