import {
  AccordionContent,
  AccordionHeader,
  AccordionIcon,
  AccordionItem,
  AccordionRoot,
  AccordionSection,
  AccordionTrigger,
} from './accordion';

export type {
  AccordionContentProps,
  AccordionHeaderProps,
  AccordionIconProps,
  AccordionItemProps,
  AccordionProps,
  AccordionSectionProps,
  AccordionTriggerProps,
} from './accordion.types';

export const Accordion = Object.assign(AccordionRoot, {
  Item: AccordionItem,
  Icon: AccordionIcon,
  Content: AccordionContent,
  Header: AccordionHeader,
  Section: AccordionSection,
  Trigger: AccordionTrigger,
});
