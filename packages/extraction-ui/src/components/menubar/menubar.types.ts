import { ComponentProps, ElementType } from 'react';

import { ElementProps } from '../element';

import * as Menubar from '@radix-ui/react-menubar';

export type MenubarMenuProps = ComponentProps<typeof Menubar.Menu>;
export type MenubarArrowProps = ComponentProps<typeof Menubar.Arrow>;
export type MenubarPortalProps = ComponentProps<typeof Menubar.Portal>;

export type MenubarProps<T extends ElementType> = ElementProps<T> &
  Omit<ComponentProps<typeof Menubar.Root>, 'as' | 'asChild' | 'className' | 'children'>;

export type MenubarTriggerProps<T extends ElementType> = ElementProps<T> &
  Omit<ComponentProps<typeof Menubar.Trigger>, 'as' | 'asChild' | 'className' | 'children'>;

export type MenubarContentProps<T extends ElementType> = ElementProps<T> &
  Omit<ComponentProps<typeof Menubar.Content>, 'as' | 'asChild' | 'className' | 'children'>;

export type MenubarSectionProps<T extends ElementType> = ElementProps<T>;

export type MenubarItemProps<T extends ElementType> = ElementProps<T> &
  Omit<ComponentProps<typeof Menubar.Item>, 'as' | 'asChild' | 'className' | 'children'>;

export type MenubarIndicatorProps<T extends ElementType> = ElementProps<T> &
  Omit<ComponentProps<typeof Menubar.ItemIndicator>, 'as' | 'asChild' | 'className' | 'children'>;

export type MenubarLabelProps<T extends ElementType> = ElementProps<T> &
  Omit<ComponentProps<typeof Menubar.Label>, 'as' | 'asChild' | 'className' | 'children'>;

export type MenubarCommandProps<T extends ElementType> = ElementProps<T>;

export type MenubarSeparatorProps<T extends ElementType> = ElementProps<T> &
  Omit<ComponentProps<typeof Menubar.Separator>, 'as' | 'asChild' | 'className' | 'children'>;

export type MenubarRadioGroupProps<T extends ElementType> = ElementProps<T> &
  Omit<ComponentProps<typeof Menubar.RadioGroup>, 'as' | 'asChild' | 'className' | 'children'>;

export type MenubarRadioItemProps<T extends ElementType> = ElementProps<T> &
  Omit<ComponentProps<typeof Menubar.RadioItem>, 'as' | 'asChild' | 'className' | 'children'>;

export type MenubarCheckboxItemProps<T extends ElementType> = ElementProps<T> &
  Omit<ComponentProps<typeof Menubar.CheckboxItem>, 'as' | 'asChild' | 'className' | 'children'>;

export type MenubarSubProps<T extends ElementType> = ElementProps<T> &
  Omit<ComponentProps<typeof Menubar.Sub>, 'as' | 'asChild' | 'className' | 'children'>;

export type MenubarSubTriggerProps<T extends ElementType> = ElementProps<T> &
  Omit<ComponentProps<typeof Menubar.SubTrigger>, 'as' | 'asChild' | 'className' | 'children'>;

export type MenubarSubContentProps<T extends ElementType> = ElementProps<T> &
  Omit<ComponentProps<typeof Menubar.SubContent>, 'as' | 'asChild' | 'className' | 'children'>;
