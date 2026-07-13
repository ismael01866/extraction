import {
  PopoverAnchor,
  PopoverArrow,
  PopoverClose,
  PopoverContent,
  PopoverDescription,
  PopoverPortal,
  PopoverRoot,
  PopoverSection,
  PopoverTitle,
  PopoverTrigger,
} from './popover';

export type {
  PopoverAnchorProps,
  PopoverArrowProps,
  PopoverContentProps,
  PopoverDescriptionProps,
  PopoverPortalProps,
  PopoverProps,
  PopoverTitleProps,
  PopoverTriggerProps,
  PopoverCloseProps,
  PopoverSectionProps,
} from './popover.types';

export const Popover = Object.assign(PopoverRoot, {
  Anchor: PopoverAnchor,
  Arrow: PopoverArrow,
  Close: PopoverClose,
  Content: PopoverContent,
  Description: PopoverDescription,
  Portal: PopoverPortal,
  Section: PopoverSection,
  Title: PopoverTitle,
  Trigger: PopoverTrigger,
});
