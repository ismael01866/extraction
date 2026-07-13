import React, { ElementType } from 'react';

import { Accordion } from 'radix-ui';

import { Element } from '../element';
import {
  AccordionContentProps,
  AccordionHeaderProps,
  AccordionIconProps,
  AccordionItemProps,
  AccordionProps,
  AccordionSectionProps,
  AccordionTriggerProps,
} from './accordion.types';

export const AccordionRoot = <T extends ElementType = 'div'>(props: AccordionProps<T>) => {
  const { as = 'div', asChild = false, children, ...rest } = props;

  return (
    <Accordion.Root asChild {...rest}>
      <Element as={as as ElementType<any>} asChild={asChild} cssClassName="ex-accordion">
        {children}
      </Element>
    </Accordion.Root>
  );
};

AccordionRoot.displayName = 'Accordion';

export const AccordionItem = <T extends ElementType = 'div'>(props: AccordionItemProps<T>) => {
  const { as = 'div', asChild = false, children, value, ...rest } = props;

  return (
    <Accordion.Item value={value} asChild {...rest}>
      <Element as={as as ElementType<any>} asChild={asChild} cssClassName="ex-accordion-item">
        {children}
      </Element>
    </Accordion.Item>
  );
};

AccordionItem.displayName = 'Accordion.Item';

export const AccordionHeader = <T extends ElementType = 'div'>(props: AccordionHeaderProps<T>) => {
  const { as = 'div', asChild = false, children, ...rest } = props;

  return (
    <Accordion.Header asChild {...rest}>
      <Element as={as as ElementType<any>} asChild={asChild} cssClassName="ex-accordion-header">
        {children}
      </Element>
    </Accordion.Header>
  );
};

AccordionHeader.displayName = 'Accordion.Header';

export const AccordionTrigger = <T extends ElementType = 'button'>(
  props: AccordionTriggerProps<T>,
) => {
  const { as = 'button', asChild = false, children, ...rest } = props;

  return (
    <Accordion.Trigger asChild {...rest}>
      <Element as={as as ElementType<any>} asChild={asChild} cssClassName="ex-accordion-trigger">
        {children}
      </Element>
    </Accordion.Trigger>
  );
};

AccordionTrigger.displayName = 'Accordion.Trigger';

export const AccordionContent = <T extends ElementType = 'div'>(
  props: AccordionContentProps<T>,
) => {
  const { as = 'div', asChild = false, children, ...rest } = props;

  return (
    <Accordion.Content asChild {...rest}>
      <Element as={as as ElementType<any>} asChild={asChild} cssClassName="ex-accordion-content">
        {children}
      </Element>
    </Accordion.Content>
  );
};

AccordionContent.displayName = 'Accordion.Content';

export const AccordionSection = <T extends ElementType = 'div'>(
  props: AccordionSectionProps<T>,
) => {
  const { as = 'div', children, ...rest } = props;

  return (
    <Element as={as as ElementType<any>} cssClassName="ex-accordion-section" {...rest}>
      {children}
    </Element>
  );
};

AccordionSection.displayName = 'Accordion.Section';

export const AccordionIcon = <T extends ElementType = 'div'>(props: AccordionIconProps<T>) => {
  const { as = 'div', children, ...rest } = props;

  return (
    <Element as={as as ElementType<any>} cssClassName="ex-accordion-icon" {...rest}>
      {children ?? (
        <svg className="ex-accordion-caret" viewBox="0 0 20 20">
          <polyline points="6 10 10 14 14 10" />
        </svg>
      )}
    </Element>
  );
};

AccordionIcon.displayName = 'Accordion.Icon';
