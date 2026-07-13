import { ComponentProps, ElementType } from 'react';

import { Avatar } from 'radix-ui';

import { ElementProps } from '../element';

export type AvatarProps<T extends ElementType> = ElementProps<T> &
  Omit<
    ComponentProps<typeof Avatar.Root>,
    'as' | 'asChild' | 'className' | 'children'
  >;

export type AvatarImageProps<T extends ElementType> = ElementProps<T> &
  Omit<
    ComponentProps<typeof Avatar.Image>,
    'as' | 'asChild' | 'className' | 'children'
  >;

export type AvatarFallbackProps<T extends ElementType> = ElementProps<T> &
  Omit<
    ComponentProps<typeof Avatar.Fallback>,
    'as' | 'asChild' | 'className' | 'children'
  >;
