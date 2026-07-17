import { ComponentProps, ElementType } from 'react';

import { ElementProps } from '../element';

import * as RadioGroup from '@radix-ui/react-radio-group';

export type RadioGroupRootProps<T extends ElementType> = ElementProps<T> &
  Omit<ComponentProps<typeof RadioGroup.Root>, 'as' | 'asChild' | 'className' | 'children'>;
