import {
  AccordionContent,
  AccordionDescription,
  AccordionHeader,
  AccordionIcon,
  AccordionItem,
  AccordionRoot,
  AccordionSection,
  AccordionTitle,
  AccordionTrigger,
} from './accordion';

export type {
  AccordionContentProps,
  AccordionDescriptionProps,
  AccordionHeaderProps,
  AccordionIconProps,
  AccordionItemProps,
  AccordionProps,
  AccordionSectionProps,
  AccordionTitleProps,
  AccordionTriggerProps,
} from './accordion.types';

export const Accordion = Object.assign(AccordionRoot, {
  Item: AccordionItem,
  Icon: AccordionIcon,
  Content: AccordionContent,
  Header: AccordionHeader,
  Section: AccordionSection,
  Trigger: AccordionTrigger,
  Title: AccordionTitle,
  Description: AccordionDescription,
});
