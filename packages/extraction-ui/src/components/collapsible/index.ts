import { CollapsibleContent, CollapsibleRoot, CollapsibleTrigger } from './collapsible';

export type {
  CollapsibleContentProps,
  CollapsibleProps,
  CollapsibleTriggerProps,
} from './collapsible.types';

export const Collapsible = Object.assign(CollapsibleRoot, {
  Trigger: CollapsibleTrigger,
  Content: CollapsibleContent,
});
