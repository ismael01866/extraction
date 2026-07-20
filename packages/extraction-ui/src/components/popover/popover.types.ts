import { ComponentProps, ElementType } from 'react';

import { ElementProps } from '../element';

import * as Popover from '@radix-ui/react-popover';

export type PopoverProps = ComponentProps<typeof Popover.Root>;
export type PopoverArrowProps = ComponentProps<typeof Popover.Arrow>;
export type PopoverPortalProps = ComponentProps<typeof Popover.Portal>;
export type PopoverAnchorProps = ComponentProps<typeof Popover.Anchor>;

export type PopoverTriggerProps<T extends ElementType> = ElementProps<T> &
  Omit<ComponentProps<typeof Popover.Trigger>, 'as' | 'asChild' | 'className' | 'children'>;

export type PopoverContentProps<T extends ElementType> = ElementProps<T> &
  Omit<ComponentProps<typeof Popover.Content>, 'as' | 'asChild' | 'className' | 'children'>;

export type PopoverSectionProps<T extends ElementType> = ElementProps<T>;
export type PopoverTitleProps<T extends ElementType> = ElementProps<T>;
export type PopoverDescriptionProps<T extends ElementType> = ElementProps<T>;

export type PopoverCloseProps<T extends ElementType> = ElementProps<T> &
  Omit<ComponentProps<typeof Popover.Close>, 'as' | 'asChild' | 'className' | 'children'>;
