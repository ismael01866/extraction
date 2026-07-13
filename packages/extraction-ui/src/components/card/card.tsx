import React, { ElementType } from 'react';

import { Element } from '../element';
import {
  CardContentProps,
  CardDescriptionProps,
  CardProps,
  CardSectionProps,
  CardTitleProps,
} from './card.types';

export const CardRoot = <T extends ElementType = 'div'>(props: CardProps<T>) => {
  const { as = 'div', children, ...rest } = props;

  return (
    <Element as={as as ElementType<any>} cssClassName="ex-card" {...rest}>
      {children}
    </Element>
  );
};

CardRoot.displayName = 'Card';

export const CardContent = <T extends ElementType = 'div'>(props: CardContentProps<T>) => {
  const { as = 'div', children, ...rest } = props;

  return (
    <Element as={as as ElementType<any>} cssClassName="ex-card-content" {...rest}>
      {children}
    </Element>
  );
};

CardContent.displayName = 'Card.Content';

export const CardSection = <T extends ElementType = 'div'>(props: CardSectionProps<T>) => {
  const { as = 'div', children, ...rest } = props;

  return (
    <Element as={as as ElementType<any>} cssClassName="ex-card-section" {...rest}>
      {children}
    </Element>
  );
};

CardSection.displayName = 'Card.Section';

export const CardTitle = <T extends ElementType = 'h2'>(props: CardTitleProps<T>) => {
  const { as = 'h2', children, ...rest } = props;

  return (
    <Element as={as as ElementType<any>} cssClassName="ex-card-title" {...rest}>
      {children}
    </Element>
  );
};

CardTitle.displayName = 'Card.Title';

export const CardDescription = <T extends ElementType = 'p'>(props: CardDescriptionProps<T>) => {
  const { as = 'p', children, ...rest } = props;

  return (
    <Element as={as as ElementType<any>} cssClassName="ex-card-description" {...rest}>
      {children}
    </Element>
  );
};

CardDescription.displayName = 'Card.Description';
