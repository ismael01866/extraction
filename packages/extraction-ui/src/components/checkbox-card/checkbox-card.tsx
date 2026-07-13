import React, { ElementType } from 'react';

import { Checkbox } from 'radix-ui';

import { Element } from '../element';
import {
  CheckboxCardContentProps,
  CheckboxCardDescriptionProps,
  CheckboxCardIndicatorProps,
  CheckboxCardLabelProps,
  CheckboxCardRootProps,
} from './checkbox-card.types';

export const CheckboxCardRoot = <T extends ElementType = 'button'>(
  props: CheckboxCardRootProps<T>,
) => {
  const { as = 'button', asChild = false, children, ...rest } = props;

  return (
    <Checkbox.Root asChild {...rest}>
      <Element as={as as ElementType<any>} asChild={asChild} cssClassName="ex-checkbox-card">
        {children}
      </Element>
    </Checkbox.Root>
  );
};

CheckboxCardRoot.displayName = 'CheckboxCard';

export const CheckboxCardIndicator = <T extends ElementType = 'div'>(
  props: CheckboxCardIndicatorProps<T>,
) => {
  const { as = 'div', asChild = false, children, forceMount = true, ...rest } = props;

  return (
    <Checkbox.Indicator forceMount={forceMount} asChild {...rest}>
      <Element
        as={as as ElementType<any>}
        asChild={asChild}
        cssClassName="ex-checkbox-card-indicator"
      >
        {children ?? (
          <svg className="ex-checkbox-card-check" viewBox="0 0 24 24">
            <path d="M5 13l4 4L19 7" />
          </svg>
        )}
      </Element>
    </Checkbox.Indicator>
  );
};

CheckboxCardIndicator.displayName = 'CheckboxCard.Indicator';

export const CheckboxCardContent = <T extends ElementType = 'div'>(
  props: CheckboxCardContentProps<T>,
) => {
  const { as = 'div', children, ...rest } = props;

  return (
    <Element as={as as ElementType<any>} cssClassName="ex-checkbox-card-content" {...rest}>
      {children}
    </Element>
  );
};

CheckboxCardContent.displayName = 'CheckboxCard.Content';

export const CheckboxCardLabel = <T extends ElementType = 'label'>(
  props: CheckboxCardLabelProps<T>,
) => {
  const { as = 'label', children, ...rest } = props;

  return (
    <Element as={as as ElementType<any>} cssClassName="ex-checkbox-card-label" {...rest}>
      {children}
    </Element>
  );
};

CheckboxCardLabel.displayName = 'CheckboxCard.Label';

export const CheckboxCardDescription = <T extends ElementType = 'p'>(
  props: CheckboxCardDescriptionProps<T>,
) => {
  const { as = 'p', children, ...rest } = props;

  return (
    <Element as={as as ElementType<any>} cssClassName="ex-checkbox-card-description" {...rest}>
      {children}
    </Element>
  );
};

CheckboxCardDescription.displayName = 'CheckboxCard.Description';
