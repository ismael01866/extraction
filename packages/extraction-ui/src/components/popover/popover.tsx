import React, { ElementType } from 'react';

import { Popover } from 'radix-ui';

import { cn } from '../../utils';
import { CloseButton } from '../close-button';
import { Element } from '../element';
import {
  PopoverAnchorProps,
  PopoverArrowProps,
  PopoverCloseProps,
  PopoverContentProps,
  PopoverDescriptionProps,
  PopoverPortalProps,
  PopoverProps,
  PopoverSectionProps,
  PopoverTitleProps,
  PopoverTriggerProps,
} from './popover.types';

export const PopoverRoot = (props: PopoverProps) => {
  const { children, ...rest } = props;

  return <Popover.Root {...rest}>{children}</Popover.Root>;
};

PopoverRoot.displayName = 'Popover';

export const PopoverTrigger = <T extends ElementType = 'div'>(props: PopoverTriggerProps<T>) => {
  const { as = 'div', asChild = false, children, ...rest } = props;

  return (
    <Popover.Trigger asChild {...rest}>
      <Element as={as as ElementType<any>} asChild={asChild} cssClassName="ex-popover-trigger">
        {children}
      </Element>
    </Popover.Trigger>
  );
};

PopoverTrigger.displayName = 'Popover.Trigger';

export const PopoverAnchor = (props: PopoverAnchorProps) => {
  const { children, ...rest } = props;

  return <Popover.Anchor {...rest}>{children}</Popover.Anchor>;
};

PopoverAnchor.displayName = 'Popover.Anchor';

export const PopoverPortal = (props: PopoverPortalProps) => {
  const { children, ...rest } = props;

  return <Popover.Portal {...rest}>{children}</Popover.Portal>;
};

PopoverPortal.displayName = 'Popover.Portal';

export const PopoverContent = <T extends ElementType = 'div'>(props: PopoverContentProps<T>) => {
  const { as = 'div', asChild = false, children, ...rest } = props;

  return (
    <Popover.Content asChild {...rest}>
      <Element as={as as ElementType<any>} asChild={asChild} cssClassName="ex-popover-content">
        {children}
      </Element>
    </Popover.Content>
  );
};

PopoverContent.displayName = 'Popover.Content';

export const PopoverSection = <T extends ElementType = 'div'>(props: PopoverSectionProps<T>) => {
  const { as = 'div', children, ...rest } = props;

  return (
    <Element as={as as ElementType<any>} cssClassName="ex-popover-section" {...rest}>
      {children}
    </Element>
  );
};

PopoverSection.displayName = 'Popover.Section';

export const PopoverArrow = (props: PopoverArrowProps) => {
  const { children, className, ...rest } = props;

  const classes = cn('ex-popover-arrow', className);

  return (
    <Popover.Arrow className={classes} {...rest}>
      {children}
    </Popover.Arrow>
  );
};

PopoverArrow.displayName = 'Popover.Arrow';

export const PopoverTitle = <T extends ElementType = 'h2'>(props: PopoverTitleProps<T>) => {
  const { as = 'h2', children, ...rest } = props;

  return (
    <Element as={as as ElementType<any>} cssClassName="ex-popover-title" {...rest}>
      {children}
    </Element>
  );
};

PopoverTitle.displayName = 'Popover.Title';

export const PopoverDescription = <T extends ElementType = 'p'>(
  props: PopoverDescriptionProps<T>,
) => {
  const { as = 'p', children, ...rest } = props;

  return (
    <Element as={as as ElementType<any>} cssClassName="ex-popover-description" {...rest}>
      {children}
    </Element>
  );
};

PopoverDescription.displayName = 'Popover.Description';

export const PopoverClose = <T extends ElementType = 'div'>(props: PopoverCloseProps<T>) => {
  const { as = 'div', asChild = false, children, ...rest } = props;

  return (
    <Popover.Close asChild {...rest}>
      {children ? (
        <Element as={as as ElementType<any>} asChild={asChild} cssClassName="ex-popover-close">
          {children}
        </Element>
      ) : (
        <CloseButton cssClassName={'ex-popover-close ex-popover-close-native'} />
      )}
    </Popover.Close>
  );
};

PopoverClose.displayName = 'Popover.Close';
