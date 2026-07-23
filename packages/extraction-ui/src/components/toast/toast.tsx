import React, { ElementType } from 'react';

import './toast.css';

import { CloseButton } from '../close-button';
import { Element } from '../element';
import {
  ToastActionProps,
  ToastCloseProps,
  ToastContentProps,
  ToastDescriptionProps,
  ToastIndicatorProps,
  ToastProps,
  ToastProviderProps,
  ToastTitleProps,
  ToastViewportProps,
} from './toast.types';

import * as Toast from '@radix-ui/react-toast';

const SWIPE_DIRECTION_MAP: Map<
  ToastProviderProps['placement'],
  ToastProviderProps['swipeDirection']
> = new Map([
  ['top-start', 'left'],
  ['top', 'up'],
  ['top-end', 'right'],
  ['bottom-start', 'left'],
  ['bottom', 'down'],
  ['bottom-end', 'right'],
]);

export const ToastProvider = (props: ToastProviderProps) => {
  const { children, placement = 'bottom-end', swipeDirection, ...rest } = props;

  const mappedSwipeDirection = SWIPE_DIRECTION_MAP.get(placement);
  const resolvedSwipeDirection = swipeDirection ?? mappedSwipeDirection;

  const parseChildren = (node: React.ReactNode): React.ReactNode =>
    React.Children.map(node, (child) => {
      if (
        !React.isValidElement<{
          placement?: ToastProviderProps['placement'];
          children?: React.ReactNode;
        }>(child)
      ) {
        return child;
      }

      if (child.type === ToastRoot) {
        return React.cloneElement(child, {
          placement: child.props.placement ?? placement,
        });
      }

      const childChildren = child.props.children;

      if (!childChildren) {
        return child;
      }

      return React.cloneElement(child, undefined, parseChildren(childChildren));
    });

  const resolvedChildren = parseChildren(children);

  return (
    <Toast.Provider swipeDirection={resolvedSwipeDirection} {...rest}>
      {resolvedChildren}
    </Toast.Provider>
  );
};

ToastProvider.displayName = 'Toast.Provider';

export const ToastRoot = <T extends ElementType = 'div'>(props: ToastProps<T>) => {
  const { as = 'div', asChild = false, children, placement, ...rest } = props;

  return (
    <Toast.Root asChild {...rest}>
      <Element
        as={as as ElementType<any>}
        asChild={asChild}
        cssClassName="ex-toast"
        data-placement={placement}
      >
        {children}
      </Element>
    </Toast.Root>
  );
};
ToastRoot.displayName = 'Toast';

export const ToastViewport = <T extends ElementType = 'div'>(props: ToastViewportProps<T>) => {
  const { as = 'div', asChild = false, children, ...rest } = props;

  return (
    <Toast.Viewport asChild {...rest}>
      <Element as={as as ElementType<any>} asChild={asChild} cssClassName="ex-toast-viewport">
        {children}
      </Element>
    </Toast.Viewport>
  );
};

ToastViewport.displayName = 'Toast.Viewport';

export const ToastContent = <T extends ElementType = 'div'>(props: ToastContentProps<T>) => {
  const { as = 'div', children, ...rest } = props;

  return (
    <Element as={as as ElementType<any>} cssClassName="ex-toast-content" {...rest}>
      {children}
    </Element>
  );
};

ToastContent.displayName = 'Toast.Content';

export const ToastIndicator = <T extends ElementType = 'div'>(props: ToastIndicatorProps<T>) => {
  const { as = 'div', children, ...rest } = props;

  return (
    <Element as={as as ElementType<any>} cssClassName="ex-toast-indicator" {...rest}>
      {children ?? (
        <svg className="ex-toast-indicator-icon" viewBox="0 0 20 20">
          <circle cx="10" cy="10" r="7.5" />
          <line x1="10" y1="9" x2="10" y2="14" />
          <circle cx="10" cy="6.5" r="0.75" fill="currentColor" stroke="none" />
        </svg>
      )}
    </Element>
  );
};

ToastIndicator.displayName = 'Toast.Indicator';

export const ToastTitle = <T extends ElementType = 'h4'>(props: ToastTitleProps<T>) => {
  const { as = 'h4', asChild = false, children, ...rest } = props;

  return (
    <Toast.Title asChild {...rest}>
      <Element as={as as ElementType<any>} asChild={asChild} cssClassName="ex-toast-title">
        {children}
      </Element>
    </Toast.Title>
  );
};

ToastTitle.displayName = 'Toast.Title';

export const ToastDescription = <T extends ElementType = 'p'>(props: ToastDescriptionProps<T>) => {
  const { as = 'p', asChild = false, children, ...rest } = props;

  return (
    <Toast.Description asChild {...rest}>
      <Element as={as as ElementType<any>} asChild={asChild} cssClassName="ex-toast-description">
        {children}
      </Element>
    </Toast.Description>
  );
};

ToastDescription.displayName = 'Toast.Description';

export const ToastAction = <T extends ElementType = 'div'>(props: ToastActionProps<T>) => {
  const { as = 'div', asChild = false, children, ...rest } = props;

  return (
    <Toast.Action asChild {...rest}>
      <Element as={as as ElementType<any>} asChild={asChild} cssClassName="ex-toast-action">
        {children}
      </Element>
    </Toast.Action>
  );
};

ToastAction.displayName = 'Toast.Action';

export const ToastClose = <T extends ElementType = 'div'>(props: ToastCloseProps<T>) => {
  const { as = 'div', asChild = false, children, ...rest } = props;

  return (
    <Toast.Close asChild {...rest}>
      {children ? (
        <Element as={as as ElementType<any>} asChild={asChild} cssClassName="ex-toast-close">
          {children}
        </Element>
      ) : (
        <CloseButton cssClassName={'ex-toast-close ex-toast-close-native'} />
      )}
    </Toast.Close>
  );
};

ToastClose.displayName = 'Toast.Close';
