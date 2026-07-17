import React, { ElementType } from 'react';

import './stack.css';

import { Element } from '../element';
import { StackProps } from './stack.types';

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

export const Stack = <T extends ElementType = 'div'>(props: StackProps<T>) => {
  const { as = 'div', children, separator, ...rest } = props;

  return (
    <Element as={as as ElementType<any>} cssClassName="ex-stack" {...rest}>
      {withSeparators(children, separator)}
    </Element>
  );
};

Stack.displayName = 'Stack';

export const HStack = <T extends ElementType = 'div'>(props: StackProps<T>) => {
  const { as = 'div', children, separator, ...rest } = props;

  return (
    <Element as={as as ElementType<any>} cssClassName="ex-hstack" {...rest}>
      {withSeparators(children, separator)}
    </Element>
  );
};

HStack.displayName = 'HStack';

export const VStack = <T extends ElementType = 'div'>(props: StackProps<T>) => {
  const { as = 'div', children, separator, ...rest } = props;

  return (
    <Element as={as as ElementType<any>} cssClassName="ex-vstack" {...rest}>
      {withSeparators(children, separator)}
    </Element>
  );
};

VStack.displayName = 'VStack';
