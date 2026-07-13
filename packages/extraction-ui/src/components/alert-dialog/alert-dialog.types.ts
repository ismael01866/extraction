import { ComponentProps, ElementType } from 'react';

import { AlertDialog } from 'radix-ui';

import { ButtonProps } from '../button';
import { ElementProps } from '../element';

export type AlertDialogProps = ComponentProps<typeof AlertDialog.Root>;

export type AlertDialogTriggerProps<T extends ElementType> = ButtonProps<T> &
  Omit<
    ComponentProps<typeof AlertDialog.Trigger>,
    'as' | 'asChild' | 'className' | 'children'
  >;

export type AlertDialogPortalProps = ComponentProps<typeof AlertDialog.Portal>;

export type AlertDialogOverlayProps<T extends ElementType> = ElementProps<T> &
  Omit<
    ComponentProps<typeof AlertDialog.Overlay>,
    'as' | 'asChild' | 'className' | 'children'
  >;

export type AlertDialogContentProps<T extends ElementType> = ElementProps<T> &
  Omit<
    ComponentProps<typeof AlertDialog.Content>,
    'as' | 'asChild' | 'className' | 'children'
  >;

export type AlertDialogSectionProps<T extends ElementType> = ElementProps<T>;

export type AlertDialogCancelProps<T extends ElementType> = ElementProps<T> &
  Omit<
    ComponentProps<typeof AlertDialog.Cancel>,
    'as' | 'asChild' | 'className' | 'children'
  >;

export type AlertDialogActionProps<T extends ElementType> = ElementProps<T> &
  Omit<
    ComponentProps<typeof AlertDialog.Action>,
    'as' | 'asChild' | 'className' | 'children'
  >;

export type AlertDialogTitleProps<T extends ElementType> = ElementProps<T> &
  Omit<
    ComponentProps<typeof AlertDialog.Title>,
    'as' | 'asChild' | 'className' | 'children'
  >;

export type AlertDialogDescriptionProps<T extends ElementType> = ElementProps<T> &
  Omit<
    ComponentProps<typeof AlertDialog.Description>,
    'as' | 'asChild' | 'className' | 'children'
  >;
