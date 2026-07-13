import { ComponentProps, ElementType } from 'react';

import { ScrollArea } from 'radix-ui';

import { ElementProps } from '../element';

export type ScrollAreaProps<T extends ElementType> = ElementProps<T> &
  Omit<
    ComponentProps<typeof ScrollArea.Root>,
    'as' | 'asChild' | 'className' | 'children'
  >;

export type ScrollAreaViewportProps = ComponentProps<typeof ScrollArea.Viewport>;

export type ScrollAreaScrollbarProps<T extends ElementType> = ElementProps<T> &
  Omit<
    ComponentProps<typeof ScrollArea.Scrollbar>,
    'as' | 'asChild' | 'className' | 'children'
  >;

export type ScrollAreaThumbProps<T extends ElementType> = ElementProps<T> &
  Omit<
    ComponentProps<typeof ScrollArea.Thumb>,
    'as' | 'asChild' | 'className' | 'children'
  >;

export type ScrollAreaCornerProps<T extends ElementType> = ElementProps<T> &
  Omit<
    ComponentProps<typeof ScrollArea.Corner>,
    'as' | 'asChild' | 'className' | 'children'
  >;

export type ScrollAreaContentProps<T extends ElementType> = ElementProps<T>;
