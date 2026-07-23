import React, { ElementType } from 'react';

import './empty-state.css';

import { Element } from '../element';
import {
  EmptyStateContentProps,
  EmptyStateDescriptionProps,
  EmptyStateIndicatorProps,
  EmptyStateProps,
  EmptyStateSectionProps,
  EmptyStateTitleProps,
} from './empty-state.types';

export const EmptyStateRoot = <T extends ElementType = 'div'>(props: EmptyStateProps<T>) => {
  const { as = 'div', children, ...rest } = props;

  return (
    <Element as={as as ElementType<any>} cssClassName="ex-empty-state" {...rest}>
      {children}
    </Element>
  );
};

EmptyStateRoot.displayName = 'EmptyState';

export const EmptyStateContent = <T extends ElementType = 'div'>(
  props: EmptyStateContentProps<T>,
) => {
  const { as = 'div', children, ...rest } = props;

  return (
    <Element as={as as ElementType<any>} cssClassName="ex-empty-state-content" {...rest}>
      {children}
    </Element>
  );
};

EmptyStateContent.displayName = 'EmptyState.Content';

export const EmptyStateSection = <T extends ElementType = 'div'>(
  props: EmptyStateSectionProps<T>,
) => {
  const { as = 'div', children, ...rest } = props;

  return (
    <Element as={as as ElementType<any>} cssClassName="ex-empty-state-section" {...rest}>
      {children}
    </Element>
  );
};

EmptyStateSection.displayName = 'EmptyState.Section';

export const EmptyStateTitle = <T extends ElementType = 'h4'>(props: EmptyStateTitleProps<T>) => {
  const { as = 'h4', children, ...rest } = props;

  return (
    <Element as={as as ElementType<any>} cssClassName="ex-empty-state-title" {...rest}>
      {children}
    </Element>
  );
};

EmptyStateTitle.displayName = 'EmptyState.Title';

export const EmptyStateDescription = <T extends ElementType = 'p'>(
  props: EmptyStateDescriptionProps<T>,
) => {
  const { as = 'p', children, ...rest } = props;

  return (
    <Element as={as as ElementType<any>} cssClassName="ex-empty-state-description" {...rest}>
      {children}
    </Element>
  );
};

EmptyStateDescription.displayName = 'EmptyState.Description';

export const EmptyStateIndicator = <T extends ElementType = 'div'>(
  props: EmptyStateIndicatorProps<T>,
) => {
  const { as = 'div', children, ...rest } = props;

  return (
    <Element as={as as ElementType<any>} cssClassName="ex-empty-state-indicator" {...rest}>
      {children}
    </Element>
  );
};

EmptyStateIndicator.displayName = 'EmptyState.Indicator';
