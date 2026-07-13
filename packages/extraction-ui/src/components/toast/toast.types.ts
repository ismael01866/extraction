import { ComponentProps, ElementType } from 'react';

import { Toast } from 'radix-ui';

import { ElementProps } from '../element';

export type ToastPlacement =
  | 'top-start'
  | 'top'
  | 'top-end'
  | 'bottom-start'
  | 'bottom'
  | 'bottom-end';

export type ToastProviderProps = ComponentProps<typeof Toast.Provider> & {
  placement?: ToastPlacement;
};

export type ToastProps<T extends ElementType> = ElementProps<T> &
  Omit<ComponentProps<typeof Toast.Root>, 'as' | 'asChild' | 'className' | 'children'>;

export type ToastViewportProps<T extends ElementType> = ElementProps<T> &
  Omit<ComponentProps<typeof Toast.Viewport>, 'as' | 'asChild' | 'className' | 'children'>;

export type ToastContentProps<T extends ElementType> = ElementProps<T>;

export type ToastIndicatorProps<T extends ElementType> = ElementProps<T>;

export type ToastTitleProps<T extends ElementType> = ElementProps<T> &
  Omit<ComponentProps<typeof Toast.Title>, 'as' | 'asChild' | 'className' | 'children'>;

export type ToastDescriptionProps<T extends ElementType> = ElementProps<T> &
  Omit<ComponentProps<typeof Toast.Description>, 'as' | 'asChild' | 'className' | 'children'>;

export type ToastActionProps<T extends ElementType> = ElementProps<T> &
  Omit<ComponentProps<typeof Toast.Action>, 'as' | 'asChild' | 'className' | 'children'>;

export type ToastCloseProps<T extends ElementType> = ElementProps<T> &
  Omit<ComponentProps<typeof Toast.Close>, 'as' | 'asChild' | 'className' | 'children'>;
