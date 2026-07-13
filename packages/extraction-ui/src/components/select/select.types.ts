import { ComponentProps, ElementType } from 'react';

import { Select } from 'radix-ui';

import { ElementProps } from '../element';

export type SelectProps = ComponentProps<typeof Select.Root>;
export type SelectArrowProps = ComponentProps<typeof Select.Arrow>;
export type SelectPortalProps = ComponentProps<typeof Select.Portal>;
export type SelectValueProps = ComponentProps<typeof Select.Value>;
export type SelectTriggerProps<T extends ElementType> = ElementProps<T> &
  Omit<
    ComponentProps<typeof Select.Trigger>,
    'as' | 'asChild' | 'className' | 'children'
  >;

export type SelectIconProps<T extends ElementType> = ElementProps<T> &
  Omit<ComponentProps<typeof Select.Icon>, 'as' | 'asChild' | 'className' | 'children'>;

export type SelectContentProps<T extends ElementType> = ElementProps<T> &
  Omit<
    ComponentProps<typeof Select.Content>,
    'as' | 'asChild' | 'className' | 'children'
  >;

export type SelectSectionProps<T extends ElementType> = ElementProps<T>;

export type SelectViewportProps<T extends ElementType> = ElementProps<T> &
  Omit<
    ComponentProps<typeof Select.Viewport>,
    'as' | 'asChild' | 'className' | 'children'
  >;

export type SelectGroupProps<T extends ElementType> = ElementProps<T> &
  Omit<
    ComponentProps<typeof Select.Group>,
    'as' | 'asChild' | 'className' | 'children'
  >;

export type SelectItemProps<T extends ElementType> = ElementProps<T> &
  Omit<ComponentProps<typeof Select.Item>, 'as' | 'asChild' | 'className' | 'children'>;

export type SelectItemTextProps<T extends ElementType> = ElementProps<T> &
  Omit<
    ComponentProps<typeof Select.ItemText>,
    'as' | 'asChild' | 'className' | 'children'
  >;

export type SelectItemIndicatorProps<T extends ElementType> = ElementProps<T> &
  Omit<
    ComponentProps<typeof Select.ItemIndicator>,
    'as' | 'asChild' | 'className' | 'children'
  >;

export type SelectLabelProps<T extends ElementType> = ElementProps<T> &
  Omit<
    ComponentProps<typeof Select.Label>,
    'as' | 'asChild' | 'className' | 'children'
  >;

export type SelectSeparatorProps<T extends ElementType> = ElementProps<T> &
  Omit<
    ComponentProps<typeof Select.Separator>,
    'as' | 'asChild' | 'className' | 'children'
  >;

export type SelectScrollUpButtonProps<T extends ElementType> = ElementProps<T> &
  Omit<
    ComponentProps<typeof Select.ScrollUpButton>,
    'as' | 'asChild' | 'className' | 'children'
  >;

export type SelectScrollDownButtonProps<T extends ElementType> = ElementProps<T> &
  Omit<
    ComponentProps<typeof Select.ScrollDownButton>,
    'as' | 'asChild' | 'className' | 'children'
  >;
