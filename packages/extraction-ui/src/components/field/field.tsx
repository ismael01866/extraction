import React, { ElementType } from 'react';

import './field.css';

import { Element } from '../element';
import {
  FieldErrorProps,
  FieldHelperProps,
  FieldLabelProps,
  FieldProps,
  FieldRequiredIndicatorProps,
  FieldSuccessProps,
} from './field.types';

import * as Label from '@radix-ui/react-label';

export const FieldRoot = <T extends ElementType = 'div'>(props: FieldProps<T>) => {
  const { as = 'div', children, ...rest } = props;

  return (
    <Element as={as as ElementType<any>} cssClassName="ex-field" {...rest}>
      {children}
    </Element>
  );
};

FieldRoot.displayName = 'Field';

export const FieldLabel = <T extends ElementType = 'label'>(props: FieldLabelProps<T>) => {
  const { as = 'label', asChild = false, children, ...rest } = props;

  return (
    <Label.Root asChild {...rest}>
      <Element as={as as ElementType<any>} asChild={asChild} cssClassName="ex-field-label">
        {children}
      </Element>
    </Label.Root>
  );
};

FieldLabel.displayName = 'Field.Label';

export const FieldRequiredIndicator = <T extends ElementType = 'span'>(
  props: FieldRequiredIndicatorProps<T>,
) => {
  const { as = 'span', children, ...rest } = props;

  return (
    <Element as={as as ElementType<any>} cssClassName="ex-field-required-indicator" {...rest}>
      {children ?? ' *'}
    </Element>
  );
};

FieldRequiredIndicator.displayName = 'Field.RequiredIndicator';

export const FieldHelper = <T extends ElementType = 'span'>(props: FieldHelperProps<T>) => {
  const { as = 'span', children, ...rest } = props;

  return (
    <Element as={as as ElementType<any>} cssClassName="ex-field-helper" {...rest}>
      {children}
    </Element>
  );
};

FieldHelper.displayName = 'Field.Helper';

export const FieldError = <T extends ElementType = 'span'>(props: FieldErrorProps<T>) => {
  const { as = 'span', children, ...rest } = props;

  return (
    <Element as={as as ElementType<any>} cssClassName="ex-field-error" {...rest}>
      {children}
    </Element>
  );
};

FieldError.displayName = 'Field.Error';

export const FieldSuccess = <T extends ElementType = 'span'>(props: FieldSuccessProps<T>) => {
  const { as = 'span', children, ...rest } = props;

  return (
    <Element as={as as ElementType<any>} cssClassName="ex-field-success" {...rest}>
      {children}
    </Element>
  );
};

FieldSuccess.displayName = 'Field.Success';
