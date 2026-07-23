import React, { ElementType } from 'react';

import './avatar-group.css';

import { Element } from '../element';
import { AvatarGroupProps } from './avatar-group.types';

export const AvatarGroup = <T extends ElementType = 'div'>(props: AvatarGroupProps<T>) => {
  const { as = 'div', children, orientation = 'horizontal', ...rest } = props;

  return (
    <Element
      as={as as ElementType<any>}
      cssClassName={`ex-avatar-group `}
      data-orientation={orientation}
      {...rest}
    >
      {children}
    </Element>
  );
};

AvatarGroup.displayName = 'AvatarGroup';
