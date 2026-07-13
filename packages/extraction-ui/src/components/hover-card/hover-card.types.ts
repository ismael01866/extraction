import { ComponentProps, ElementType } from 'react';

import { HoverCard } from 'radix-ui';

import { ElementProps } from '../element';

export type HoverCardProps = ComponentProps<typeof HoverCard.Root>;
export type HoverCardArrowProps = ComponentProps<typeof HoverCard.Arrow>;
export type HoverCardPortalProps = ComponentProps<typeof HoverCard.Portal>;

export type HoverCardTriggerProps<T extends ElementType> = ElementProps<T> &
  Omit<
    ComponentProps<typeof HoverCard.Trigger>,
    'as' | 'asChild' | 'className' | 'children'
  >;

export type HoverCardContentProps<T extends ElementType> = ElementProps<T> &
  Omit<
    ComponentProps<typeof HoverCard.Content>,
    'as' | 'asChild' | 'className' | 'children'
  >;

export type HoverCardSectionProps<T extends ElementType> = ElementProps<T>;
export type HoverCardTitleProps<T extends ElementType> = ElementProps<T>;
export type HoverCardDescriptionProps<T extends ElementType> = ElementProps<T>;
