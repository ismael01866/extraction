import { ComponentProps, ElementType } from 'react';

import { RadioGroup } from 'radix-ui';

import { ElementProps } from '../element';

export type RadioGroupRootProps<T extends ElementType> = ElementProps<T> &
  Omit<
    ComponentProps<typeof RadioGroup.Root>,
    'as' | 'asChild' | 'className' | 'children'
  >;
