import { ComponentProps, ElementType } from 'react';

import { NavigationMenu } from 'radix-ui';

import { ElementProps } from '../element';

export type NavigationMenuProps<T extends ElementType> = ElementProps<T> &
  Omit<
    ComponentProps<typeof NavigationMenu.Root>,
    'as' | 'asChild' | 'className' | 'children'
  >;
export type NavigationMenuListProps<T extends ElementType> = ElementProps<T> &
  Omit<
    ComponentProps<typeof NavigationMenu.List>,
    'as' | 'asChild' | 'className' | 'children'
  >;

export type NavigationMenuItemProps<T extends ElementType> = ElementProps<T> &
  Omit<
    ComponentProps<typeof NavigationMenu.Item>,
    'as' | 'asChild' | 'className' | 'children'
  >;

export type NavigationMenuTriggerProps<T extends ElementType> = ElementProps<T> &
  Omit<
    ComponentProps<typeof NavigationMenu.Trigger>,
    'as' | 'asChild' | 'className' | 'children'
  >;

export type NavigationMenuLinkProps<T extends ElementType> = ElementProps<T> &
  Omit<
    ComponentProps<typeof NavigationMenu.Link>,
    'as' | 'asChild' | 'className' | 'children'
  >;

export type NavigationMenuContentProps<T extends ElementType> = ElementProps<T> &
  Omit<
    ComponentProps<typeof NavigationMenu.Content>,
    'as' | 'asChild' | 'className' | 'children'
  >;

export type NavigationMenuSectionProps<T extends ElementType> = ElementProps<T>;

export type NavigationMenuIndicatorProps<T extends ElementType> = ElementProps<T> &
  Omit<
    ComponentProps<typeof NavigationMenu.Indicator>,
    'as' | 'asChild' | 'className' | 'children'
  >;

export type NavigationMenuViewportAnchorProps<T extends ElementType> = ElementProps<T>;

export type NavigationMenuViewportProps<T extends ElementType> = ElementProps<T> &
  Omit<
    ComponentProps<typeof NavigationMenu.Viewport>,
    'as' | 'asChild' | 'className' | 'children'
  >;

export type NavigationMenuSubProps<T extends ElementType> = ElementProps<T> &
  Omit<
    ComponentProps<typeof NavigationMenu.Sub>,
    'as' | 'asChild' | 'className' | 'children'
  >;
