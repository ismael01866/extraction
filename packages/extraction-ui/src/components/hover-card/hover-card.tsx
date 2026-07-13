import React, { ElementType } from 'react';

import { HoverCard } from 'radix-ui';
import { cn } from 'utils';

import { Element } from '../element';
import {
  HoverCardArrowProps,
  HoverCardContentProps,
  HoverCardDescriptionProps,
  HoverCardPortalProps,
  HoverCardProps,
  HoverCardSectionProps,
  HoverCardTitleProps,
  HoverCardTriggerProps,
} from './hover-card.types';

export const HoverCardRoot = (props: HoverCardProps) => {
  const { children, ...rest } = props;

  return <HoverCard.Root {...rest}>{children}</HoverCard.Root>;
};

HoverCardRoot.displayName = 'HoverCard';

export const HoverCardTrigger = <T extends ElementType = 'div'>(
  props: HoverCardTriggerProps<T>,
) => {
  const { as = 'div', asChild = false, children, ...rest } = props;

  return (
    <HoverCard.Trigger asChild {...rest}>
      <Element as={as as ElementType<any>} asChild={asChild} cssClassName="ex-hover-card-trigger">
        {children}
      </Element>
    </HoverCard.Trigger>
  );
};

HoverCardTrigger.displayName = 'HoverCard.Trigger';

export const HoverCardPortal = (props: HoverCardPortalProps) => {
  const { children, ...rest } = props;

  return <HoverCard.Portal {...rest}>{children}</HoverCard.Portal>;
};

HoverCardPortal.displayName = 'HoverCard.Portal';

export const HoverCardContent = <T extends ElementType = 'div'>(
  props: HoverCardContentProps<T>,
) => {
  const { as = 'div', asChild = false, children, ...rest } = props;

  return (
    <HoverCard.Content asChild {...rest}>
      <Element as={as as ElementType<any>} asChild={asChild} cssClassName="ex-hover-card-content">
        {children}
      </Element>
    </HoverCard.Content>
  );
};

HoverCardContent.displayName = 'HoverCard.Content';

export const HoverCardSection = <T extends ElementType = 'div'>(
  props: HoverCardSectionProps<T>,
) => {
  const { as = 'div', children, ...rest } = props;

  return (
    <Element as={as as ElementType<any>} cssClassName="ex-hover-card-section" {...rest}>
      {children}
    </Element>
  );
};

HoverCardSection.displayName = 'HoverCard.Section';

export const HoverCardArrow = (props: HoverCardArrowProps) => {
  const { children, className, ...rest } = props;

  const classes = cn('ex-hover-card-arrow', className);

  return (
    <HoverCard.Arrow className={classes} {...rest}>
      {children}
    </HoverCard.Arrow>
  );
};

HoverCardArrow.displayName = 'HoverCard.Arrow';

export const HoverCardTitle = <T extends ElementType = 'h2'>(props: HoverCardTitleProps<T>) => {
  const { as = 'h2', children, ...rest } = props;

  return (
    <Element as={as as ElementType<any>} cssClassName="ex-hover-card-title" {...rest}>
      {children}
    </Element>
  );
};

HoverCardTitle.displayName = 'HoverCard.Title';

export const HoverCardDescription = <T extends ElementType = 'p'>(
  props: HoverCardDescriptionProps<T>,
) => {
  const { as = 'p', children, ...rest } = props;

  return (
    <Element as={as as ElementType<any>} cssClassName="ex-hover-card-description" {...rest}>
      {children}
    </Element>
  );
};

HoverCardDescription.displayName = 'HoverCard.Description';
