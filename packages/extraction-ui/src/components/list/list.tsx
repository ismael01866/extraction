import React, { ElementType } from 'react';

import { Element } from '../element';
import { Icon } from '../icon';
import { ListIndicatorProps, ListItemProps, ListProps } from './list.types';

export const ListRoot = <T extends ElementType = 'ul'>(props: ListProps<T>) => {
  const { as = 'ul', children, ...rest } = props;

  return (
    <Element as={as as ElementType<any>} cssClassName="ex-list" {...rest}>
      {children}
    </Element>
  );
};

ListRoot.displayName = 'List';

export const ListItem = <T extends ElementType = 'li'>(props: ListItemProps<T>) => {
  const { as = 'li', children, ...rest } = props;

  return (
    <Element as={as as ElementType<any>} cssClassName="ex-list-item" {...rest}>
      {children}
    </Element>
  );
};

ListItem.displayName = 'List.Item';

export const ListIndicator = <T extends ElementType = 'div'>(props: ListIndicatorProps<T>) => {
  const { as = 'div', children, ...rest } = props;

  return (
    <Icon as={as as ElementType<any>} cssClassName="ex-list-indicator" {...rest}>
      {children}
    </Icon>
  );
};

ListIndicator.displayName = 'List.Indicator';
