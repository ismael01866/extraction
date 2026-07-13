import React, { ElementType } from 'react';

import { Element } from '../element';
import {
  CalloutContentProps,
  CalloutDescriptionProps,
  CalloutIndicatorProps,
  CalloutProps,
  CalloutTitleProps,
} from './callout.types';

export const CalloutRoot = <T extends ElementType = 'div'>(props: CalloutProps<T>) => {
  const { as = 'div', children, ...rest } = props;

  return (
    <Element as={as as ElementType<any>} cssClassName="ex-callout" {...rest}>
      {children}
    </Element>
  );
};

CalloutRoot.displayName = 'Callout';

export const CalloutContent = <T extends ElementType = 'div'>(props: CalloutContentProps<T>) => {
  const { as = 'div', children, ...rest } = props;

  return (
    <Element as={as as ElementType<any>} cssClassName="ex-callout-content" {...rest}>
      {children}
    </Element>
  );
};

CalloutContent.displayName = 'Callout.Content';

export const CalloutIndicator = <T extends ElementType = 'div'>(
  props: CalloutIndicatorProps<T>,
) => {
  const { as = 'div', children, ...rest } = props;

  return (
    <Element as={as as ElementType<any>} cssClassName="ex-callout-indicator" {...rest}>
      {children ?? (
        <svg className="ex-callout-indicator-icon" viewBox="0 0 20 20">
          <circle cx="10" cy="10" r="7.5" />
          <line x1="10" y1="9" x2="10" y2="14" />
          <circle cx="10" cy="6.5" r="0.75" fill="currentColor" stroke="none" />
        </svg>
      )}
    </Element>
  );
};

CalloutIndicator.displayName = 'Callout.Indicator';

export const CalloutTitle = <T extends ElementType = 'h3'>(props: CalloutTitleProps<T>) => {
  const { as = 'h3', children, ...rest } = props;

  return (
    <Element as={as as ElementType<any>} cssClassName="ex-callout-title" {...rest}>
      {children}
    </Element>
  );
};

CalloutTitle.displayName = 'Callout.Title';

export const CalloutDescription = <T extends ElementType = 'p'>(
  props: CalloutDescriptionProps<T>,
) => {
  const { as = 'p', children, ...rest } = props;

  return (
    <Element as={as as ElementType<any>} cssClassName="ex-callout-description" {...rest}>
      {children}
    </Element>
  );
};

CalloutDescription.displayName = 'Callout.Description';
