import { ComponentProps, ElementType } from 'react';

import { Dialog } from 'radix-ui';

import { ElementProps } from '../element';

export type DialogProps = ComponentProps<typeof Dialog.Root>;

export type DialogTriggerProps<T extends ElementType> = ElementProps<T> &
  Omit<ComponentProps<typeof Dialog.Trigger>, 'as' | 'asChild' | 'className' | 'children'>;

export type DialogPortalProps = ComponentProps<typeof Dialog.Portal>;

export type DialogOverlayProps<T extends ElementType> = ElementProps<T> &
  Omit<ComponentProps<typeof Dialog.Overlay>, 'as' | 'asChild' | 'className' | 'children'>;

export type DialogContentProps<T extends ElementType> = ElementProps<T> &
  Omit<ComponentProps<typeof Dialog.Content>, 'as' | 'asChild' | 'className' | 'children'>;

export type DialogSectionProps<T extends ElementType> = ElementProps<T>;

export type DialogTitleProps<T extends ElementType> = ElementProps<T> &
  Omit<ComponentProps<typeof Dialog.Title>, 'as' | 'asChild' | 'className' | 'children'>;

export type DialogDescriptionProps<T extends ElementType> = ElementProps<T> &
  Omit<ComponentProps<typeof Dialog.Description>, 'as' | 'asChild' | 'className' | 'children'>;

export type DialogCloseProps<T extends ElementType> = ElementProps<T> &
  Omit<ComponentProps<typeof Dialog.Close>, 'as' | 'asChild' | 'className' | 'children'>;
