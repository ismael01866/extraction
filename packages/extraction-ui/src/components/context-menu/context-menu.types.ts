import { ComponentProps, ElementType } from 'react';

import { ElementProps } from '../element';

import * as ContextMenu from '@radix-ui/react-context-menu';

export type ContextMenuProps = ComponentProps<typeof ContextMenu.Root>;
export type ContextMenuPortalProps = ComponentProps<typeof ContextMenu.Portal>;

export type ContextMenuTriggerProps<T extends ElementType> = ElementProps<T> &
  Omit<ComponentProps<typeof ContextMenu.Trigger>, 'as' | 'asChild' | 'className' | 'children'>;

export type ContextMenuContentProps<T extends ElementType> = ElementProps<T> &
  Omit<ComponentProps<typeof ContextMenu.Content>, 'as' | 'asChild' | 'className' | 'children'>;

export type ContextMenuSectionProps<T extends ElementType> = ElementProps<T>;

export type ContextMenuItemProps<T extends ElementType> = ElementProps<T> &
  Omit<ComponentProps<typeof ContextMenu.Item>, 'as' | 'asChild' | 'className' | 'children'>;

export type ContextMenuIndicatorProps<T extends ElementType> = ElementProps<T> &
  Omit<
    ComponentProps<typeof ContextMenu.ItemIndicator>,
    'as' | 'asChild' | 'className' | 'children'
  >;

export type ContextMenuLabelProps<T extends ElementType> = ElementProps<T> &
  Omit<ComponentProps<typeof ContextMenu.Label>, 'as' | 'asChild' | 'className' | 'children'>;

export type ContextMenuCommandProps<T extends ElementType> = ElementProps<T>;

export type ContextMenuSeparatorProps<T extends ElementType> = ElementProps<T> &
  Omit<ComponentProps<typeof ContextMenu.Separator>, 'as' | 'asChild' | 'className' | 'children'>;

export type ContextMenuRadioGroupProps<T extends ElementType> = ElementProps<T> &
  Omit<ComponentProps<typeof ContextMenu.RadioGroup>, 'as' | 'asChild' | 'className' | 'children'>;

export type ContextMenuRadioItemProps<T extends ElementType> = ElementProps<T> &
  Omit<ComponentProps<typeof ContextMenu.RadioItem>, 'as' | 'asChild' | 'className' | 'children'>;

export type ContextMenuCheckboxItemProps<T extends ElementType> = ElementProps<T> &
  Omit<
    ComponentProps<typeof ContextMenu.CheckboxItem>,
    'as' | 'asChild' | 'className' | 'children'
  >;

export type ContextMenuSubProps<T extends ElementType> = ElementProps<T> &
  Omit<ComponentProps<typeof ContextMenu.Sub>, 'as' | 'asChild' | 'className' | 'children'>;

export type ContextMenuSubTriggerProps<T extends ElementType> = ElementProps<T> &
  Omit<ComponentProps<typeof ContextMenu.SubTrigger>, 'as' | 'asChild' | 'className' | 'children'>;

export type ContextMenuSubContentProps<T extends ElementType> = ElementProps<T> &
  Omit<ComponentProps<typeof ContextMenu.SubContent>, 'as' | 'asChild' | 'className' | 'children'>;
