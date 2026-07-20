import React, { ElementType } from 'react';

import './tabs.css';

import { Element } from '../element';
import { TabsContentProps, TabsListProps, TabsProps, TabsTriggerProps } from './tabs.types';

import * as Tabs from '@radix-ui/react-tabs';

export const TabsRoot = <T extends ElementType = 'div'>(props: TabsProps<T>) => {
  const { as = 'div', asChild = false, children, ...rest } = props;

  return (
    <Tabs.Root asChild {...rest}>
      <Element as={as as ElementType<any>} asChild={asChild} cssClassName="ex-tabs">
        {children}
      </Element>
    </Tabs.Root>
  );
};

TabsRoot.displayName = 'Tabs';

export const TabsList = <T extends ElementType = 'div'>(props: TabsListProps<T>) => {
  const { as = 'div', asChild = false, children, ...rest } = props;

  return (
    <Tabs.List asChild {...rest}>
      <Element as={as as ElementType<any>} asChild={asChild} cssClassName="ex-tabs-list">
        {children}
      </Element>
    </Tabs.List>
  );
};

TabsList.displayName = 'Tabs.List';

export const TabsTrigger = <T extends ElementType = 'button'>(props: TabsTriggerProps<T>) => {
  const { as = 'button', asChild = false, children, ...rest } = props;

  return (
    <Tabs.Trigger asChild {...rest}>
      <Element as={as as ElementType<any>} asChild={asChild} cssClassName="ex-tabs-trigger">
        {children}
      </Element>
    </Tabs.Trigger>
  );
};

TabsTrigger.displayName = 'Tabs.Trigger';

export const TabsContent = <T extends ElementType = 'div'>(props: TabsContentProps<T>) => {
  const { as = 'div', asChild = false, children, ...rest } = props;

  return (
    <Tabs.Content asChild {...rest}>
      <Element as={as as ElementType<any>} asChild={asChild} cssClassName="ex-tabs-content">
        {children}
      </Element>
    </Tabs.Content>
  );
};

TabsContent.displayName = 'Tabs.Content';
