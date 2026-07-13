import React, { ElementType } from 'react';

import { NavigationMenu } from 'radix-ui';
import { cn } from 'utils';

import { Element } from '../element';
import {
  NavigationMenuContentProps,
  NavigationMenuIndicatorProps,
  NavigationMenuItemProps,
  NavigationMenuLinkProps,
  NavigationMenuListProps,
  NavigationMenuProps,
  NavigationMenuSectionProps,
  NavigationMenuSubProps,
  NavigationMenuTriggerProps,
  NavigationMenuViewportAnchorProps,
  NavigationMenuViewportProps,
} from './navigation-menu.types';

export const NavigationMenuRoot = <T extends ElementType = 'nav'>(
  props: NavigationMenuProps<T>,
) => {
  const { as = 'nav', asChild = false, children, ...rest } = props;

  return (
    <NavigationMenu.Root asChild {...rest}>
      <Element as={as as ElementType<any>} asChild={asChild} cssClassName="ex-navigation-menu">
        {children}
      </Element>
    </NavigationMenu.Root>
  );
};

NavigationMenuRoot.displayName = 'NavigationMenu';

export const NavigationMenuList = <T extends ElementType = 'div'>(
  props: NavigationMenuListProps<T>,
) => {
  const { as = 'div', asChild = false, children, ...rest } = props;

  return (
    <NavigationMenu.List asChild {...rest}>
      <Element as={as as ElementType<any>} asChild={asChild} cssClassName="ex-navigation-menu-list">
        {children}
      </Element>
    </NavigationMenu.List>
  );
};

NavigationMenuList.displayName = 'NavigationMenu.List';

export const NavigationMenuItem = <T extends ElementType = 'div'>(
  props: NavigationMenuItemProps<T>,
) => {
  const { as = 'div', asChild = false, children, ...rest } = props;

  return (
    <NavigationMenu.Item asChild {...rest}>
      <Element as={as as ElementType<any>} asChild={asChild} cssClassName="ex-navigation-menu-item">
        {children}
      </Element>
    </NavigationMenu.Item>
  );
};

NavigationMenuItem.displayName = 'NavigationMenu.Item';

export const NavigationMenuTrigger = <T extends ElementType = 'button'>(
  props: NavigationMenuTriggerProps<T>,
) => {
  const { as = 'button', asChild = false, children, ...rest } = props;

  return (
    <NavigationMenu.Trigger asChild {...rest}>
      <Element
        as={as as ElementType<any>}
        asChild={asChild}
        cssClassName="ex-navigation-menu-trigger"
      >
        {children}
      </Element>
    </NavigationMenu.Trigger>
  );
};

NavigationMenuTrigger.displayName = 'NavigationMenu.Trigger';

export const NavigationMenuLink = <T extends ElementType = 'a'>(
  props: NavigationMenuLinkProps<T>,
) => {
  const { as = 'a', asChild = false, children, ...rest } = props;

  return (
    <NavigationMenu.Link asChild {...rest}>
      <Element as={as as ElementType<any>} asChild={asChild} cssClassName="ex-navigation-menu-link">
        {children}
      </Element>
    </NavigationMenu.Link>
  );
};

NavigationMenuLink.displayName = 'NavigationMenu.Link';

export const NavigationMenuContent = <T extends ElementType = 'div'>(
  props: NavigationMenuContentProps<T>,
) => {
  const { as = 'div', asChild = false, children, ...rest } = props;

  return (
    <NavigationMenu.Content asChild {...rest}>
      <Element
        as={as as ElementType<any>}
        asChild={asChild}
        cssClassName="ex-navigation-menu-content"
      >
        {children}
      </Element>
    </NavigationMenu.Content>
  );
};

NavigationMenuContent.displayName = 'NavigationMenu.Content';

export const NavigationMenuSection = <T extends ElementType = 'div'>(
  props: NavigationMenuSectionProps<T>,
) => {
  const { as = 'div', children, ...rest } = props;

  return (
    <Element as={as as ElementType<any>} cssClassName="ex-navigation-menu-section" {...rest}>
      {children}
    </Element>
  );
};

NavigationMenuSection.displayName = 'NavigationMenu.Section';

export const NavigationMenuIndicator = <T extends ElementType = 'div'>(
  props: NavigationMenuIndicatorProps<T>,
) => {
  const { as = 'div', asChild = false, children, ...rest } = props;

  return (
    <NavigationMenu.Indicator asChild {...rest}>
      <Element
        as={as as ElementType<any>}
        asChild={asChild}
        cssClassName="ex-navigation-menu-indicator"
      >
        {children ?? (
          <svg
            className="ex-navigation-menu-indicator-icon"
            viewBox="0 0 30 10"
            preserveAspectRatio="none"
          >
            <polygon points="0,0 30,0 15,10"></polygon>
            <line x1="0" y1="0" x2="30" y2="0" />
          </svg>
        )}
      </Element>
    </NavigationMenu.Indicator>
  );
};

NavigationMenuIndicator.displayName = 'NavigationMenu.Indicator';

export const NavigationMenuViewportAnchor = <T extends ElementType = 'div'>(
  props: NavigationMenuViewportAnchorProps<T>,
) => {
  const { as = 'div', children, ...rest } = props;

  return (
    <Element
      as={as as ElementType<any>}
      cssClassName="ex-navigation-menu-viewport-anchor"
      {...rest}
    >
      {children}
    </Element>
  );
};

NavigationMenuViewportAnchor.displayName = 'NavigationMenu.ViewportAnchor';

export const NavigationMenuViewport = <T extends ElementType = 'div'>(
  props: NavigationMenuViewportProps<T>,
) => {
  const { children, className, ...rest } = props;

  const classNames = cn('ex-navigation-menu-viewport', className);

  return (
    <NavigationMenu.Viewport className={classNames} {...rest}>
      {children}
    </NavigationMenu.Viewport>
  );
};

NavigationMenuViewport.displayName = 'NavigationMenu.Viewport';

export const NavigationMenuSub = <T extends ElementType = 'div'>(
  props: NavigationMenuSubProps<T>,
) => {
  const { as = 'div', asChild = false, children, ...rest } = props;

  return (
    <NavigationMenu.Sub asChild {...rest}>
      <Element as={as as ElementType<any>} asChild={asChild} cssClassName="ex-navigation-menu-sub">
        {children}
      </Element>
    </NavigationMenu.Sub>
  );
};

NavigationMenuSub.displayName = 'NavigationMenu.Sub';
