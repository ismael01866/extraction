import { ComponentProps, ElementType } from 'react';

import { ElementProps } from '../element';

import * as HoverCard from '@radix-ui/react-hover-card';

export type HoverCardProps = ComponentProps<typeof HoverCard.Root>;
export type HoverCardArrowProps = ComponentProps<typeof HoverCard.Arrow>;
export type HoverCardPortalProps = ComponentProps<typeof HoverCard.Portal>;

export type HoverCardTriggerProps<T extends ElementType> = ElementProps<T> &
  Omit<ComponentProps<typeof HoverCard.Trigger>, 'as' | 'asChild' | 'className' | 'children'>;

export type HoverCardContentProps<T extends ElementType> = ElementProps<T> &
  Omit<ComponentProps<typeof HoverCard.Content>, 'as' | 'asChild' | 'className' | 'children'>;

export type HoverCardSectionProps<T extends ElementType> = ElementProps<T>;
export type HoverCardTitleProps<T extends ElementType> = ElementProps<T>;
export type HoverCardDescriptionProps<T extends ElementType> = ElementProps<T>;
