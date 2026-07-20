import React, { ElementType } from 'react';

import './native-select.css';

import { Element } from '../element';
import {
  NativeSelectFieldProps,
  NativeSelectIconProps,
  NativeSelectProps,
} from './native-select.types';

export const NativeSelectRoot = <T extends ElementType = 'div'>(props: NativeSelectProps<T>) => {
  const { as = 'div', children, ...rest } = props;

  return (
    <Element as={as as ElementType<any>} cssClassName="ex-native-select" {...rest}>
      {children}
    </Element>
  );
};

NativeSelectRoot.displayName = 'NativeSelect';

export const NativeSelectField = <T extends ElementType = 'select'>(
  props: NativeSelectFieldProps<T>,
) => {
  const { as = 'select', children, ...rest } = props;

  return (
    <Element as={as as ElementType<any>} cssClassName="ex-native-select-field" {...rest}>
      {children}
    </Element>
  );
};

NativeSelectField.displayName = 'NativeSelect.Field';

export const NativeSelectIcon = <T extends ElementType = 'div'>(
  props: NativeSelectIconProps<T>,
) => {
  const { as = 'div', children, ...rest } = props;

  return (
    <Element as={as as ElementType<any>} cssClassName="ex-native-select-icon" {...rest}>
      {children ?? (
        <svg className="ex-native-select-caret" viewBox="0 0 20 20">
          <polyline points="6 10 10 14 14 10" />
        </svg>
      )}
    </Element>
  );
};

NativeSelectIcon.displayName = 'NativeSelect.Icon';
