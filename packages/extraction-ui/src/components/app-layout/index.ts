import {
  AppLayoutAside,
  AppLayoutBody,
  AppLayoutFooter,
  AppLayoutHeader,
  AppLayoutMain,
  AppLayoutRoot,
  AppLayoutSection,
  AppLayoutSidenav,
} from './app-layout';

export type {
  AppLayoutAsideProps,
  AppLayoutBodyProps,
  AppLayoutFooterProps,
  AppLayoutHeaderProps,
  AppLayoutMainProps,
  AppLayoutProps,
  AppLayoutSectionProps,
  AppLayoutSidenavProps,
} from './app-layout.types';

export const AppLayout = Object.assign(AppLayoutRoot, {
  Aside: AppLayoutAside,
  Body: AppLayoutBody,
  Footer: AppLayoutFooter,
  Header: AppLayoutHeader,
  Main: AppLayoutMain,
  Sidenav: AppLayoutSidenav,
  Section: AppLayoutSection,
});
