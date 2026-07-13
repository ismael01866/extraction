import {
  EmptyStateContent,
  EmptyStateDescription,
  EmptyStateIndicator,
  EmptyStateRoot,
  EmptyStateSection,
  EmptyStateTitle,
} from './empty-state';

export type {
  EmptyStateContentProps,
  EmptyStateProps,
  EmptyStateSectionProps,
  EmptyStateDescriptionProps,
  EmptyStateTitleProps,
  EmptyStateIndicatorProps,
} from './empty-state.types';

export const EmptyState = Object.assign(EmptyStateRoot, {
  Content: EmptyStateContent,
  Section: EmptyStateSection,
  Title: EmptyStateTitle,
  Description: EmptyStateDescription,
  Indicator: EmptyStateIndicator,
});
