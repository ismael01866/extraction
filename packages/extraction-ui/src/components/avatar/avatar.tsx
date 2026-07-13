import React, { ElementType } from 'react';

import { Avatar } from 'radix-ui';

import { Element } from '../element';
import { AvatarFallbackProps, AvatarImageProps, AvatarProps } from './avatar.types';

export const AvatarRoot = <T extends ElementType = 'div'>(props: AvatarProps<T>) => {
  const { as = 'div', asChild = false, children, ...rest } = props;

  return (
    <Avatar.Root asChild {...rest}>
      <Element as={as as ElementType<any>} asChild={asChild} cssClassName="ex-avatar">
        {children}
      </Element>
    </Avatar.Root>
  );
};

AvatarRoot.displayName = 'Avatar';

export const AvatarImage = <T extends ElementType = 'img'>(props: AvatarImageProps<T>) => {
  const { as = 'img', asChild = false, children, ...rest } = props;

  return (
    <Avatar.Image asChild {...rest}>
      <Element as={as as ElementType<any>} asChild={asChild} cssClassName="ex-avatar-image">
        {children}
      </Element>
    </Avatar.Image>
  );
};

AvatarImage.displayName = 'Avatar.Image';

export const AvatarFallback = <T extends ElementType = 'div'>(props: AvatarFallbackProps<T>) => {
  const { as = 'div', asChild = false, children, ...rest } = props;

  return (
    <Avatar.Fallback asChild {...rest}>
      <Element as={as as ElementType<any>} asChild={asChild} cssClassName="ex-avatar-fallback">
        {children}
      </Element>
    </Avatar.Fallback>
  );
};

AvatarFallback.displayName = 'Avatar.Fallback';
