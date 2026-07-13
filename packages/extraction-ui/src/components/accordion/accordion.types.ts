import { ComponentProps, ElementType } from 'react';

import { Accordion } from 'radix-ui';

import { ButtonProps } from '../button';
import { ElementProps } from '../element';

export type AccordionProps<T extends ElementType> = ElementProps<T> &
  Omit<ComponentProps<typeof Accordion.Root>, 'as' | 'asChild' | 'className' | 'children'>;

export type AccordionItemProps<T extends ElementType> = ElementProps<T> &
  Omit<ComponentProps<typeof Accordion.Item>, 'as' | 'asChild' | 'className' | 'children'> & {
    value: string;
  };

export type AccordionHeaderProps<T extends ElementType> = ElementProps<T> &
  Omit<ComponentProps<typeof Accordion.Header>, 'as' | 'asChild' | 'className' | 'children'>;

export type AccordionTriggerProps<T extends ElementType> = ButtonProps<T> &
  Omit<ComponentProps<typeof Accordion.Trigger>, 'as' | 'asChild' | 'className' | 'children'>;

export type AccordionContentProps<T extends ElementType> = ElementProps<T> &
  Omit<ComponentProps<typeof Accordion.Content>, 'as' | 'asChild' | 'className' | 'children'>;

export type AccordionSectionProps<T extends ElementType> = ElementProps<T>;
export type AccordionIconProps<T extends ElementType> = ElementProps<T>;
