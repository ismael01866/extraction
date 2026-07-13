import React, { ElementType } from 'react';

import { Element } from '../element';
import { GroupProps } from './group.types';

export const Group = <T extends ElementType = 'div'>(props: GroupProps<T>) => {
  const { as = 'div', children, orientation = 'horizontal', ...rest } = props;

  return (
    <Element
      as={as as ElementType<any>}
      cssClassName={`ex-group `}
      data-orientation={orientation}
      {...rest}
    >
      {children}
    </Element>
  );
};

Group.displayName = 'Group';
