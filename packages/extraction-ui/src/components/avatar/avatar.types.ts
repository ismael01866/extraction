import { ComponentProps, ElementType } from 'react';

import { ElementProps } from '../element';

import * as Avatar from '@radix-ui/react-avatar';

export type AvatarProps<T extends ElementType> = ElementProps<T> &
  Omit<ComponentProps<typeof Avatar.Root>, 'as' | 'asChild' | 'className' | 'children'>;

export type AvatarImageProps<T extends ElementType> = ElementProps<T> &
  Omit<ComponentProps<typeof Avatar.Image>, 'as' | 'asChild' | 'className' | 'children'>;

export type AvatarFallbackProps<T extends ElementType> = ElementProps<T> &
  Omit<ComponentProps<typeof Avatar.Fallback>, 'as' | 'asChild' | 'className' | 'children'>;
