import {
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuRoot,
  NavigationMenuSection,
  NavigationMenuSub,
  NavigationMenuTrigger,
  NavigationMenuViewport,
  NavigationMenuViewportAnchor,
} from './navigation-menu';

export type {
  NavigationMenuContentProps,
  NavigationMenuIndicatorProps,
  NavigationMenuLinkProps,
  NavigationMenuListProps,
  NavigationMenuItemProps,
  NavigationMenuProps,
  NavigationMenuSectionProps,
  NavigationMenuSubProps,
  NavigationMenuTriggerProps,
  NavigationMenuViewportProps,
  NavigationMenuViewportAnchorProps,
} from './navigation-menu.types';

export const NavigationMenu = Object.assign(NavigationMenuRoot, {
  Content: NavigationMenuContent,
  Link: NavigationMenuLink,
  List: NavigationMenuList,
  Item: NavigationMenuItem,
  Indicator: NavigationMenuIndicator,
  Section: NavigationMenuSection,
  Sub: NavigationMenuSub,
  Trigger: NavigationMenuTrigger,
  Viewport: NavigationMenuViewport,
  ViewportAnchor: NavigationMenuViewportAnchor,
});
