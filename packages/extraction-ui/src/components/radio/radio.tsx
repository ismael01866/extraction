import React, { ElementType } from 'react';

import './radio.css';

import { Element } from '../element';
import {
  RadioControlProps,
  RadioIndicatorProps,
  RadioItemProps,
  RadioLabelProps,
} from './radio.types';

import * as RadioGroup from '@radix-ui/react-radio-group';

export const RadioItem = <T extends ElementType = 'div'>(props: RadioItemProps<T>) => {
  const { as = 'div', children, ...rest } = props;

  return (
    <Element as={as as ElementType<any>} cssClassName="ex-radio" {...rest}>
      {children}
    </Element>
  );
};

RadioItem.displayName = 'Radio';

export const RadioControl = <T extends ElementType = 'button'>(props: RadioControlProps<T>) => {
  const { as = 'button', asChild = false, children, ...rest } = props;

  return (
    <RadioGroup.Item asChild {...rest}>
      <Element as={as as ElementType<any>} asChild={asChild} cssClassName="ex-radio-control">
        {children}
      </Element>
    </RadioGroup.Item>
  );
};

RadioControl.displayName = 'Radio.Control';

export const RadioIndicator = <T extends ElementType = 'div'>(props: RadioIndicatorProps<T>) => {
  const { as = 'div', asChild = false, children, ...rest } = props;

  return (
    <RadioGroup.Indicator asChild {...rest}>
      <Element as={as as ElementType<any>} asChild={asChild} cssClassName="ex-radio-indicator">
        {children ?? (
          <svg className="ex-radio-check" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="8" fill="currentColor" />
          </svg>
        )}
      </Element>
    </RadioGroup.Indicator>
  );
};

RadioIndicator.displayName = 'Radio.Indicator';

export const RadioLabel = <T extends ElementType = 'label'>(props: RadioLabelProps<T>) => {
  const { as = 'label', children, ...rest } = props;

  return (
    <Element as={as as ElementType<any>} cssClassName="ex-radio-label" {...rest}>
      {children}
    </Element>
  );
};

RadioLabel.displayName = 'Radio.Label';
