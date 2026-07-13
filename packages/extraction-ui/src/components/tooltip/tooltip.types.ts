import { ComponentProps, ElementType } from 'react';

import { Tooltip } from 'radix-ui';

import { ElementProps } from '../element';

export type TooltipProps = ComponentProps<typeof Tooltip.Root>;
export type TooltipArrowProps = ComponentProps<typeof Tooltip.Arrow>;
export type TooltipProviderProps = ComponentProps<typeof Tooltip.Provider>;

export type TooltipTriggerProps<T extends ElementType> = ElementProps<T> &
  Omit<
    ComponentProps<typeof Tooltip.Trigger>,
    'as' | 'asChild' | 'className' | 'children'
  >;

export type TooltipPortalProps = ComponentProps<typeof Tooltip.Portal>;

export type TooltipContentProps<T extends ElementType> = ElementProps<T> &
  Omit<
    ComponentProps<typeof Tooltip.Content>,
    'as' | 'asChild' | 'className' | 'children'
  >;
