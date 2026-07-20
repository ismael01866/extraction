import React, { ElementType } from 'react';

import './tooltip.css';

import { cn } from '../../utils';
import { Element } from '../element';
import {
  TooltipArrowProps,
  TooltipContentProps,
  TooltipPortalProps,
  TooltipProps,
  TooltipProviderProps,
  TooltipTriggerProps,
} from './tooltip.types';

import * as Tooltip from '@radix-ui/react-tooltip';

export const TooltipProvider = (props: TooltipProviderProps) => {
  const { children, ...rest } = props;

  return <Tooltip.Provider {...rest}>{children}</Tooltip.Provider>;
};

TooltipProvider.displayName = 'Tooltip.Provider';

export const TooltipRoot = (props: TooltipProps) => {
  const { children, ...rest } = props;

  return <Tooltip.Root {...rest}>{children}</Tooltip.Root>;
};

TooltipRoot.displayName = 'Tooltip';

export const TooltipTrigger = <T extends ElementType = 'div'>(props: TooltipTriggerProps<T>) => {
  const { as = 'div', asChild = false, children, ...rest } = props;

  return (
    <Tooltip.Trigger asChild {...rest}>
      <Element as={as as ElementType<any>} asChild={asChild} cssClassName="ex-tooltip-trigger">
        {children}
      </Element>
    </Tooltip.Trigger>
  );
};

TooltipTrigger.displayName = 'Tooltip.Trigger';

export const TooltipPortal = (props: TooltipPortalProps) => {
  const { children, ...rest } = props;

  return <Tooltip.Portal {...rest}>{children}</Tooltip.Portal>;
};

TooltipPortal.displayName = 'Tooltip.Portal';

export const TooltipContent = <T extends ElementType = 'div'>(props: TooltipContentProps<T>) => {
  const { as = 'div', asChild = false, children, ...rest } = props;

  return (
    <Tooltip.Content asChild {...rest}>
      <Element as={as as ElementType<any>} asChild={asChild} cssClassName="ex-tooltip-content">
        {children}
      </Element>
    </Tooltip.Content>
  );
};

TooltipContent.displayName = 'Tooltip.Content';

export const TooltipArrow = (props: TooltipArrowProps) => {
  const { children, className, ...rest } = props;

  const classes = cn('ex-tooltip-arrow', className);

  return (
    <Tooltip.Arrow className={classes} {...rest}>
      {children}
    </Tooltip.Arrow>
  );
};

TooltipArrow.displayName = 'Tooltip.Arrow';
