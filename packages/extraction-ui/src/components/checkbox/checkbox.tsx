import React, { ElementType } from 'react';

import { Checkbox } from 'radix-ui';

import { Element } from '../element';
import {
  CheckboxControlProps,
  CheckboxIndicatorProps,
  CheckboxLabelProps,
  CheckboxRootProps,
} from './checkbox.types';

export const CheckboxRoot = <T extends ElementType = 'div'>(props: CheckboxRootProps<T>) => {
  const { as = 'div', children, ...rest } = props;

  return (
    <Element as={as as ElementType<any>} cssClassName="ex-checkbox" {...rest}>
      {children}
    </Element>
  );
};

CheckboxRoot.displayName = 'Checkbox';

export const CheckboxControl = <T extends ElementType = 'button'>(
  props: CheckboxControlProps<T>,
) => {
  const { as = 'button', asChild = false, children, ...rest } = props;

  return (
    <Checkbox.Root asChild {...rest}>
      <Element as={as as ElementType<any>} asChild={asChild} cssClassName="ex-checkbox-control">
        {children}
      </Element>
    </Checkbox.Root>
  );
};

CheckboxControl.displayName = 'Checkbox.Control';

export const CheckboxIndicator = <T extends ElementType = 'div'>(
  props: CheckboxIndicatorProps<T>,
) => {
  const { as = 'div', asChild = false, children, ...rest } = props;

  return (
    <Checkbox.Indicator asChild {...rest}>
      <Element as={as as ElementType<any>} asChild={asChild} cssClassName="ex-checkbox-indicator">
        {children ?? (
          <svg className="ex-checkbox-check" viewBox="0 0 24 24">
            <path d="M5 13l4 4L19 7" />
          </svg>
        )}
      </Element>
    </Checkbox.Indicator>
  );
};

CheckboxIndicator.displayName = 'Checkbox.Indicator';

export const CheckboxLabel = <T extends ElementType = 'label'>(props: CheckboxLabelProps<T>) => {
  const { as = 'label', children, ...rest } = props;

  return (
    <Element as={as as ElementType<any>} cssClassName="ex-checkbox-label" {...rest}>
      {children}
    </Element>
  );
};

CheckboxLabel.displayName = 'Checkbox.Label';
