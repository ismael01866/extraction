import React, { ElementType } from 'react';

import './breadcrumbs.css';

import { Element } from '../element';
import {
  BreadcrumbsCurrentLinkProps,
  BreadcrumbsItemProps,
  BreadcrumbsLinkProps,
  BreadcrumbsListProps,
  BreadcrumbsProps,
  BreadcrumbsSeparatorProps,
} from './breadcrumbs.types';

export const BreadcrumbsRoot = <T extends ElementType = 'nav'>(props: BreadcrumbsProps<T>) => {
  const { as = 'nav', children, ...rest } = props;

  return (
    <Element as={as as ElementType<any>} cssClassName="ex-breadcrumbs" {...rest}>
      {children}
    </Element>
  );
};

BreadcrumbsRoot.displayName = 'Breadcrumbs';

export const BreadcrumbsList = <T extends ElementType = 'div'>(props: BreadcrumbsListProps<T>) => {
  const { as = 'div', children, ...rest } = props;

  return (
    <Element as={as as ElementType<any>} cssClassName="ex-breadcrumbs-list" {...rest}>
      {children}
    </Element>
  );
};

BreadcrumbsList.displayName = 'Breadcrumbs.List';

export const BreadcrumbsItem = <T extends ElementType = 'div'>(props: BreadcrumbsItemProps<T>) => {
  const { as = 'div', children, ...rest } = props;

  return (
    <Element as={as as ElementType<any>} cssClassName="ex-breadcrumbs-item" {...rest}>
      {children}
    </Element>
  );
};

BreadcrumbsItem.displayName = 'Breadcrumbs.Item';

export const BreadcrumbsLink = <T extends ElementType = 'a'>(props: BreadcrumbsLinkProps<T>) => {
  const { as = 'a', children, ...rest } = props;

  return (
    <Element as={as as ElementType<any>} cssClassName="ex-breadcrumbs-link" {...rest}>
      {children}
    </Element>
  );
};

BreadcrumbsLink.displayName = 'Breadcrumbs.Link';

export const BreadcrumbsCurrentLink = <T extends ElementType = 'a'>(
  props: BreadcrumbsCurrentLinkProps<T>,
) => {
  const { as = 'a', children, ...rest } = props;

  return (
    <Element as={as as ElementType<any>} cssClassName="ex-breadcrumbs-current-link" {...rest}>
      {children}
    </Element>
  );
};

BreadcrumbsCurrentLink.displayName = 'Breadcrumbs.CurrentLink';

export const BreadcrumbsSeparator = <T extends ElementType = 'div'>(
  props: BreadcrumbsSeparatorProps<T>,
) => {
  const { as = 'div', children, ...rest } = props;

  return (
    <Element as={as as ElementType<any>} cssClassName="ex-breadcrumbs-separator" {...rest}>
      {children ?? (
        <svg className="ex-breadcrumbs-caret" viewBox="0 0 20 20">
          <polyline points="7 4.5 13 10 7 15.5" />
        </svg>
      )}
    </Element>
  );
};

BreadcrumbsSeparator.displayName = 'Breadcrumbs.Separator';
