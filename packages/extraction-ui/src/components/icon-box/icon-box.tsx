import React, { ElementType } from 'react';

import { Element } from '../element';
import { IconBoxProps } from './icon-box.types';

export const IconBox = <T extends ElementType = 'div'>(props: IconBoxProps<T>) => {
  const { as = 'div', children, ...rest } = props;

  return (
    <Element as={as as ElementType<any>} cssClassName="ex-icon-box" {...rest}>
      {children}
    </Element>
  );
};

IconBox.displayName = 'IconBox';
