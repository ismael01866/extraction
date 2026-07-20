import { ComponentProps, ElementType } from 'react';

import { ElementProps } from '../element';

import * as Tooltip from '@radix-ui/react-tooltip';

export type TooltipProps = ComponentProps<typeof Tooltip.Root>;
export type TooltipArrowProps = ComponentProps<typeof Tooltip.Arrow>;
export type TooltipProviderProps = ComponentProps<typeof Tooltip.Provider>;

export type TooltipTriggerProps<T extends ElementType> = ElementProps<T> &
  Omit<ComponentProps<typeof Tooltip.Trigger>, 'as' | 'asChild' | 'className' | 'children'>;

export type TooltipPortalProps = ComponentProps<typeof Tooltip.Portal>;

export type TooltipContentProps<T extends ElementType> = ElementProps<T> &
  Omit<ComponentProps<typeof Tooltip.Content>, 'as' | 'asChild' | 'className' | 'children'>;
