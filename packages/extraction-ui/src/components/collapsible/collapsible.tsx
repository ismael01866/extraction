import React, { ElementType } from 'react';

import './collapsible.css';

import { Element } from '../element';
import {
  CollapsibleContentProps,
  CollapsibleProps,
  CollapsibleTriggerProps,
} from './collapsible.types';

import * as Collapsible from '@radix-ui/react-collapsible';

export const CollapsibleRoot = <T extends ElementType = 'div'>(props: CollapsibleProps<T>) => {
  const { as = 'div', asChild = false, children, ...rest } = props;

  return (
    <Collapsible.Root asChild {...rest}>
      <Element as={as as ElementType<any>} asChild={asChild} cssClassName="ex-collapsible">
        {children}
      </Element>
    </Collapsible.Root>
  );
};

CollapsibleRoot.displayName = 'Collapsible';

export const CollapsibleTrigger = <T extends ElementType = 'div'>(
  props: CollapsibleTriggerProps<T>,
) => {
  const { as = 'div', asChild = false, children, ...rest } = props;

  return (
    <Collapsible.Trigger asChild {...rest}>
      <Element as={as as ElementType<any>} asChild={asChild} cssClassName="ex-collapsible-trigger">
        {children}
      </Element>
    </Collapsible.Trigger>
  );
};

CollapsibleTrigger.displayName = 'Collapsible.Trigger';

export const CollapsibleContent = <T extends ElementType = 'div'>(
  props: CollapsibleContentProps<T>,
) => {
  const { as = 'div', asChild = false, children, ...rest } = props;

  return (
    <Collapsible.Content asChild {...rest}>
      <Element as={as as ElementType<any>} asChild={asChild} cssClassName="ex-collapsible-content">
        {children}
      </Element>
    </Collapsible.Content>
  );
};

CollapsibleContent.displayName = 'Collapsible.Content';
