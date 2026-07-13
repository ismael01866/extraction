import {
  BreadcrumbsCurrentLink,
  BreadcrumbsItem,
  BreadcrumbsLink,
  BreadcrumbsList,
  BreadcrumbsRoot,
  BreadcrumbsSeparator,
} from './breadcrumbs';

export type {
  BreadcrumbsCurrentLinkProps,
  BreadcrumbsItemProps,
  BreadcrumbsLinkProps,
  BreadcrumbsListProps,
  BreadcrumbsProps,
  BreadcrumbsSeparatorProps,
} from './breadcrumbs.types';

export const Breadcrumbs = Object.assign(BreadcrumbsRoot, {
  CurrentLink: BreadcrumbsCurrentLink,
  Item: BreadcrumbsItem,
  Link: BreadcrumbsLink,
  List: BreadcrumbsList,
  Separator: BreadcrumbsSeparator,
});
