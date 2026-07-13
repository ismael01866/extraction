import React, { ElementType } from 'react';

import { RadioGroup } from 'radix-ui';

import { Element } from '../element';
import {
  RadioCardContentProps,
  RadioCardDescriptionProps,
  RadioCardIndicatorProps,
  RadioCardLabelProps,
  RadioCardRootProps,
} from './radio-card.types';

export const RadioCardRoot = <T extends ElementType = 'button'>(props: RadioCardRootProps<T>) => {
  const { as = 'button', asChild = false, children, ...rest } = props;

  return (
    <RadioGroup.Item asChild {...rest}>
      <Element as={as as ElementType<any>} asChild={asChild} cssClassName="ex-radio-card">
        {children}
      </Element>
    </RadioGroup.Item>
  );
};

RadioCardRoot.displayName = 'RadioCard';

export const RadioCardIndicator = <T extends ElementType = 'div'>(
  props: RadioCardIndicatorProps<T>,
) => {
  const { as = 'div', asChild = false, children, forceMount = true, ...rest } = props;

  return (
    <RadioGroup.Indicator forceMount={forceMount} asChild {...rest}>
      <Element as={as as ElementType<any>} asChild={asChild} cssClassName="ex-radio-card-indicator">
        {children ?? (
          <svg className="ex-radio-card-check" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="8" fill="currentColor" />
          </svg>
        )}
      </Element>
    </RadioGroup.Indicator>
  );
};

RadioCardIndicator.displayName = 'RadioCard.Indicator';

export const RadioCardContent = <T extends ElementType = 'div'>(
  props: RadioCardContentProps<T>,
) => {
  const { as = 'div', children, ...rest } = props;

  return (
    <Element as={as as ElementType<any>} cssClassName="ex-radio-card-content" {...rest}>
      {children}
    </Element>
  );
};

RadioCardContent.displayName = 'RadioCard.Content';

export const RadioCardLabel = <T extends ElementType = 'label'>(props: RadioCardLabelProps<T>) => {
  const { as = 'label', children, ...rest } = props;

  return (
    <Element as={as as ElementType<any>} cssClassName="ex-radio-card-label" {...rest}>
      {children}
    </Element>
  );
};

RadioCardLabel.displayName = 'RadioCard.Label';

export const RadioCardDescription = <T extends ElementType = 'p'>(
  props: RadioCardDescriptionProps<T>,
) => {
  const { as = 'p', children, ...rest } = props;

  return (
    <Element as={as as ElementType<any>} cssClassName="ex-radio-card-description" {...rest}>
      {children}
    </Element>
  );
};

RadioCardDescription.displayName = 'RadioCard.Description';
