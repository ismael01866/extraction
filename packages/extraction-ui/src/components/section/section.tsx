import React, { ElementType } from 'react';

import './section.css';

import { Element } from '../element';
import { SectionProps } from './section.types';

export const Section = <T extends ElementType = 'section'>(props: SectionProps<T>) => {
  const { as = 'section', children, ...rest } = props;

  return (
    <Element as={as as ElementType<any>} cssClassName="ex-section" {...rest}>
      {children}
    </Element>
  );
};

Section.displayName = 'Section';
