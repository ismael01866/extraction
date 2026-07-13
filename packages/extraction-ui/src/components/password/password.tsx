import React, { ElementType } from 'react';

import { unstable_PasswordToggleField as Password } from 'radix-ui';

import { Element } from '../element';
import {
  PasswordIconProps,
  PasswordInputProps,
  PasswordProps,
  PasswordToggleProps,
} from './password.types';

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
    <svg className="ex-password-toggle-icon" viewBox="0 0 20 20">
      <path d="M3 9.8Q10 13.2 17 9.8" />
      <path d="M6.2 11.5 5.4 12.9" />
      <path d="M10 12.1v1.8" />
      <path d="m13.8 11.5.8 1.4" />
    </svg>
  );

  const visibleIcon = (
    <svg className="ex-password-toggle-icon" viewBox="0 0 20 20">
      <path d="M1.5 10C3.4 6.8 6.4 5 10 5s6.6 1.8 8.5 5c-1.9 3.2-4.9 5-8.5 5s-6.6-1.8-8.5-5Z" />
      <circle cx="10" cy="10" r="2.25" />
    </svg>
  );

  const normalizeIcon = (content: React.ReactNode) => {
    if (React.isValidElement(content)) return content;

    return (
      <Element as={as as ElementType<any>} asChild={asChild} cssClassName="ex-password-icon">
        {content}
      </Element>
    );
  };

  const hiddenElement = normalizeIcon(hidden ?? children ?? hiddenIcon);
  const visibleElement = normalizeIcon(visible ?? children ?? visibleIcon);

  return <Password.Icon asChild {...rest} visible={visibleElement} hidden={hiddenElement} />;
};

PasswordIcon.displayName = 'Password.Icon';
