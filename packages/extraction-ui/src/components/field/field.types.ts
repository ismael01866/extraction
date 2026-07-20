import { ComponentProps, ElementType } from 'react';

import { ElementProps } from '../element';

import * as Label from '@radix-ui/react-label';

export type FieldProps<T extends ElementType> = ElementProps<T>;
export type FieldHelperProps<T extends ElementType> = ElementProps<T>;
export type FieldErrorProps<T extends ElementType> = ElementProps<T>;
export type FieldSuccessProps<T extends ElementType> = ElementProps<T>;
export type FieldRequiredIndicatorProps<T extends ElementType> = ElementProps<T>;

export type FieldLabelProps<T extends ElementType> = ElementProps<T> &
  Omit<ComponentProps<typeof Label.Root>, 'as' | 'asChild' | 'className' | 'children'>;
