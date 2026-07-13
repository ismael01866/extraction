import {
  HoverCardArrow,
  HoverCardContent,
  HoverCardDescription,
  HoverCardPortal,
  HoverCardRoot,
  HoverCardSection,
  HoverCardTitle,
  HoverCardTrigger,
} from './hover-card';

export type {
  HoverCardProps,
  HoverCardContentProps,
  HoverCardDescriptionProps,
  HoverCardPortalProps,
  HoverCardTitleProps,
  HoverCardTriggerProps,
  HoverCardArrowProps,
  HoverCardSectionProps,
} from './hover-card.types';

export const HoverCard = Object.assign(HoverCardRoot, {
  Arrow: HoverCardArrow,
  Content: HoverCardContent,
  Description: HoverCardDescription,
  Portal: HoverCardPortal,
  Section: HoverCardSection,
  Title: HoverCardTitle,
  Trigger: HoverCardTrigger,
});
