import {
  TooltipArrow,
  TooltipContent,
  TooltipPortal,
  TooltipProvider,
  TooltipRoot,
  TooltipTrigger,
} from './tooltip';

export type {
  TooltipProps,
  TooltipContentProps,
  TooltipPortalProps,
  TooltipTriggerProps,
  TooltipArrowProps,
  TooltipProviderProps,
} from './tooltip.types';

export const Tooltip = Object.assign(TooltipRoot, {
  Provider: TooltipProvider,
  Trigger: TooltipTrigger,
  Portal: TooltipPortal,
  Content: TooltipContent,
  Arrow: TooltipArrow,
});
