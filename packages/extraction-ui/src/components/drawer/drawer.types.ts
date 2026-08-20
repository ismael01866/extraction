import { ComponentProps, ElementType } from 'react';

import { ElementProps, MergeElementProps } from '../element';

import * as Dialog from '@radix-ui/react-dialog';

export type DrawerPlacement = 'start' | 'end' | 'top' | 'bottom';

export type DrawerProps = ComponentProps<typeof Dialog.Root>;

export type DrawerTriggerProps<T extends ElementType> = MergeElementProps<
  ElementProps<T>,
  Omit<ComponentProps<typeof Dialog.Trigger>, 'as' | 'asChild' | 'className' | 'children'>
>;

export type DrawerPortalProps = ComponentProps<typeof Dialog.Portal>;

export type DrawerOverlayProps<T extends ElementType> = MergeElementProps<
  ElementProps<T>,
  Omit<ComponentProps<typeof Dialog.Overlay>, 'as' | 'asChild' | 'className' | 'children'>
>;

export type DrawerContentProps<T extends ElementType> = MergeElementProps<
  ElementProps<T>,
  Omit<ComponentProps<typeof Dialog.Content>, 'as' | 'asChild' | 'className' | 'children'> & {
    placement?: DrawerPlacement;
  }
>;

export type DrawerSectionProps<T extends ElementType> = ElementProps<T>;

export type DrawerTitleProps<T extends ElementType> = MergeElementProps<
  ElementProps<T>,
  Omit<ComponentProps<typeof Dialog.Title>, 'as' | 'asChild' | 'className' | 'children'>
>;

export type DrawerDescriptionProps<T extends ElementType> = MergeElementProps<
  ElementProps<T>,
  Omit<ComponentProps<typeof Dialog.Description>, 'as' | 'asChild' | 'className' | 'children'>
>;

export type DrawerCloseProps<T extends ElementType> = MergeElementProps<
  ElementProps<T>,
  Omit<ComponentProps<typeof Dialog.Close>, 'as' | 'asChild' | 'className' | 'children'>
>;
