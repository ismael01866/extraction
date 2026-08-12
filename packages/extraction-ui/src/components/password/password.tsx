import React, { ElementType } from 'react';

import './password.css';

import { Element } from '../element';
import {
  PasswordIconProps,
  PasswordInputProps,
  PasswordProps,
  PasswordToggleProps,
} from './password.types';

import * as Password from '@radix-ui/react-password-toggle-field';

export const PasswordRoot = (props: PasswordProps) => {
  const { asChild = false, children, ...rest } = props;

  return (
    <Password.Root>
      <Element asChild={asChild} cssClassName="ex-password" {...rest}>
        {children}
      </Element>
    </Password.Root>
  );
};

PasswordRoot.displayName = 'Password';

export const PasswordInput = <T extends ElementType = 'input'>(props: PasswordInputProps<T>) => {
  const { as = 'input', asChild = false, autoCapitalize = 'none', children, ...rest } = props;

  return (
    <Password.Input asChild {...rest}>
      <Element
        as={as as ElementType<any>}
        asChild={asChild}
        autoCapitalize={autoCapitalize}
        cssClassName="ex-password-input"
      >
        {children}
      </Element>
    </Password.Input>
  );
};

PasswordInput.displayName = 'Password.Input';

export const PasswordToggle = <T extends ElementType = 'button'>(props: PasswordToggleProps<T>) => {
  const { as = 'button', asChild = false, children, ...rest } = props;

  return (
    <Password.Toggle asChild {...rest}>
      <Element as={as as ElementType<any>} asChild={asChild} cssClassName="ex-password-toggle">
        {children}
      </Element>
    </Password.Toggle>
  );
};

PasswordToggle.displayName = 'Password.Toggle';

export const PasswordIcon = <T extends ElementType = 'span'>(props: PasswordIconProps<T>) => {
  const { as = 'span', asChild = false, children, visible, hidden, ...rest } = props;

  const hiddenIcon = (
    <svg className="ex-password-toggle-svg" viewBox="0 0 24 24">
      <path d="m15 18-.722-3.25"></path>
      <path d="M2 8a10.645 10.645 0 0 0 20 0"></path>
      <path d="m20 15-1.726-2.05"></path>
      <path d="m4 15 1.726-2.05"></path>
      <path d="m9 18 .722-3.25"></path>
    </svg>
  );

  const visibleIcon = (
    <svg className="ex-password-toggle-svg" viewBox="0 0 24 24">
      <path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path>
      <circle cx="12" cy="12" r="3"></circle>
    </svg>
  );

  const normalizeIcon = (content: React.ReactNode) => {
    if (React.isValidElement(content)) return content;

    return (
      <Element as={as as ElementType<any>} asChild={asChild} cssClassName="ex-password-toggle">
        {content}
      </Element>
    );
  };

  const hiddenElement = normalizeIcon(hidden ?? children ?? hiddenIcon);
  const visibleElement = normalizeIcon(visible ?? children ?? visibleIcon);

  return <Password.Icon asChild {...rest} visible={visibleElement} hidden={hiddenElement} />;
};

PasswordIcon.displayName = 'Password.Icon';
