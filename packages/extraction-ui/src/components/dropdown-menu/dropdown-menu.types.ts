import { ComponentProps, ElementType } from 'react';

import { ElementProps } from '../element';

import * as DropdownMenu from '@radix-ui/react-dropdown-menu';

export type DropdownMenuProps = ComponentProps<typeof DropdownMenu.Root>;
export type DropdownMenuArrowProps = ComponentProps<typeof DropdownMenu.Arrow>;
export type DropdownMenuPortalProps = ComponentProps<typeof DropdownMenu.Portal>;

export type DropdownMenuTriggerProps<T extends ElementType> = ElementProps<T> &
  Omit<ComponentProps<typeof DropdownMenu.Trigger>, 'as' | 'asChild' | 'className' | 'children'>;

export type DropdownMenuContentProps<T extends ElementType> = ElementProps<T> &
  Omit<ComponentProps<typeof DropdownMenu.Content>, 'as' | 'asChild' | 'className' | 'children'>;

export type DropdownMenuSectionProps<T extends ElementType> = ElementProps<T>;

export type DropdownMenuItemProps<T extends ElementType> = ElementProps<T> &
  Omit<ComponentProps<typeof DropdownMenu.Item>, 'as' | 'asChild' | 'className' | 'children'>;

export type DropdownMenuIndicatorProps<T extends ElementType> = ElementProps<T> &
  Omit<
    ComponentProps<typeof DropdownMenu.ItemIndicator>,
    'as' | 'asChild' | 'className' | 'children'
  >;

export type DropdownMenuLabelProps<T extends ElementType> = ElementProps<T> &
  Omit<ComponentProps<typeof DropdownMenu.Label>, 'as' | 'asChild' | 'className' | 'children'>;

export type DropdownMenuCommandProps<T extends ElementType> = ElementProps<T>;

export type DropdownMenuSeparatorProps<T extends ElementType> = ElementProps<T> &
  Omit<ComponentProps<typeof DropdownMenu.Separator>, 'as' | 'asChild' | 'className' | 'children'>;

export type DropdownMenuRadioGroupProps<T extends ElementType> = ElementProps<T> &
  Omit<ComponentProps<typeof DropdownMenu.RadioGroup>, 'as' | 'asChild' | 'className' | 'children'>;

export type DropdownMenuRadioItemProps<T extends ElementType> = ElementProps<T> &
  Omit<ComponentProps<typeof DropdownMenu.RadioItem>, 'as' | 'asChild' | 'className' | 'children'>;

export type DropdownMenuCheckboxItemProps<T extends ElementType> = ElementProps<T> &
  Omit<
    ComponentProps<typeof DropdownMenu.CheckboxItem>,
    'as' | 'asChild' | 'className' | 'children'
  >;

export type DropdownMenuSubProps<T extends ElementType> = ElementProps<T> &
  Omit<ComponentProps<typeof DropdownMenu.Sub>, 'as' | 'asChild' | 'className' | 'children'>;

export type DropdownMenuSubTriggerProps<T extends ElementType> = ElementProps<T> &
  Omit<ComponentProps<typeof DropdownMenu.SubTrigger>, 'as' | 'asChild' | 'className' | 'children'>;

export type DropdownMenuSubContentProps<T extends ElementType> = ElementProps<T> &
  Omit<ComponentProps<typeof DropdownMenu.SubContent>, 'as' | 'asChild' | 'className' | 'children'>;
