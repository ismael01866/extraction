import React, { ElementType } from 'react';

import './app-layout.css';

import { Element } from '../element';
import {
  AppLayoutAsideProps,
  AppLayoutBodyProps,
  AppLayoutFooterProps,
  AppLayoutHeaderProps,
  AppLayoutMainProps,
  AppLayoutProps,
  AppLayoutSectionProps,
  AppLayoutSidenavProps,
} from './app-layout.types';

export const AppLayoutRoot = <T extends ElementType = 'div'>(props: AppLayoutProps<T>) => {
  const { as = 'div', children, ...rest } = props;

  return (
    <Element as={as as ElementType<any>} cssClassName="ex-app-layout" {...rest}>
      {children}
    </Element>
  );
};

AppLayoutRoot.displayName = 'AppLayout';

export const AppLayoutHeader = <T extends ElementType = 'header'>(
  props: AppLayoutHeaderProps<T>,
) => {
  const { as = 'header', children, ...rest } = props;

  return (
    <Element as={as as ElementType<any>} cssClassName="ex-app-layout-header" {...rest}>
      {children}
    </Element>
  );
};

AppLayoutHeader.displayName = 'AppLayout.Header';

export const AppLayoutBody = <T extends ElementType = 'div'>(props: AppLayoutBodyProps<T>) => {
  const { as = 'div', children, ...rest } = props;

  return (
    <Element as={as as ElementType<any>} cssClassName="ex-app-layout-body" {...rest}>
      {children}
    </Element>
  );
};

AppLayoutBody.displayName = 'AppLayout.Body';

export const AppLayoutSidenav = <T extends ElementType = 'nav'>(
  props: AppLayoutSidenavProps<T>,
) => {
  const { as = 'nav', children, ...rest } = props;

  return (
    <Element as={as as ElementType<any>} cssClassName="ex-app-layout-sidenav" {...rest}>
      {children}
    </Element>
  );
};

AppLayoutSidenav.displayName = 'AppLayout.Sidenav';

export const AppLayoutMain = <T extends ElementType = 'main'>(props: AppLayoutMainProps<T>) => {
  const { as = 'main', children, ...rest } = props;

  return (
    <Element as={as as ElementType<any>} cssClassName="ex-app-layout-main" {...rest}>
      {children}
    </Element>
  );
};

AppLayoutMain.displayName = 'AppLayout.Main';

export const AppLayoutAside = <T extends ElementType = 'aside'>(props: AppLayoutAsideProps<T>) => {
  const { as = 'aside', children, ...rest } = props;

  return (
    <Element as={as as ElementType<any>} cssClassName="ex-app-layout-aside" {...rest}>
      {children}
    </Element>
  );
};

AppLayoutAside.displayName = 'AppLayout.Aside';

export const AppLayoutFooter = <T extends ElementType = 'footer'>(
  props: AppLayoutFooterProps<T>,
) => {
  const { as = 'footer', children, ...rest } = props;

  return (
    <Element as={as as ElementType<any>} cssClassName="ex-app-layout-footer" {...rest}>
      {children}
    </Element>
  );
};

AppLayoutFooter.displayName = 'AppLayout.Footer';

export const AppLayoutSection = <T extends ElementType = 'section'>(
  props: AppLayoutSectionProps<T>,
) => {
  const { as = 'section', children, ...rest } = props;

  return (
    <Element as={as as ElementType<any>} cssClassName="ex-app-layout-section" {...rest}>
      {children}
    </Element>
  );
};

AppLayoutSection.displayName = 'AppLayout.Section';
