import React, { ElementType } from 'react';

import './callout.css';

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
        <svg className="ex-callout-indicator-svg" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="10"></circle>
          <path d="M12 16v-4"></path>
          <path d="M12 8h.01"></path>
        </svg>
      )}
    </Element>
  );
};

CalloutIndicator.displayName = 'Callout.Indicator';

export const CalloutTitle = <T extends ElementType = 'div'>(props: CalloutTitleProps<T>) => {
  const { as = 'div', children, ...rest } = props;

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
