import React, { ElementType } from 'react';

import './flex.css';

import { Element } from '../element';
import { FlexProps } from './flex.types';

const withSeparators = (children: React.ReactNode, separator?: React.ReactNode) => {
  const childArray = React.Children.toArray(children);

  if (!separator || childArray.length < 2) {
    return children;
  }

  return childArray.flatMap((child, index) => {
    if (index === childArray.length - 1) {
      return [child];
    }

    const separatorNode = React.isValidElement(separator)
      ? React.cloneElement(separator, { key: `separator-${index}` })
      : React.createElement(React.Fragment, { key: `separator-${index}` }, separator);

    return [child, separatorNode];
  });
};

export const Flex = <T extends ElementType = 'div'>(props: FlexProps<T>) => {
  const { as = 'div', children, separator, ...rest } = props;

  return (
    <Element as={as as ElementType<any>} cssClassName="ex-flex" {...rest}>
      {withSeparators(children, separator)}
    </Element>
  );
};

Flex.displayName = 'Flex';
