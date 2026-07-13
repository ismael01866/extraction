import {
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerOverlay,
  DrawerPortal,
  DrawerRoot,
  DrawerSection,
  DrawerTitle,
  DrawerTrigger,
} from './drawer';

export type {
  DrawerCloseProps,
  DrawerContentProps,
  DrawerDescriptionProps,
  DrawerOverlayProps,
  DrawerPortalProps,
  DrawerProps,
  DrawerSectionProps,
  DrawerTitleProps,
  DrawerTriggerProps,
} from './drawer.types';

export const Drawer = Object.assign(DrawerRoot, {
  Close: DrawerClose,
  Content: DrawerContent,
  Description: DrawerDescription,
  Overlay: DrawerOverlay,
  Portal: DrawerPortal,
  Section: DrawerSection,
  Title: DrawerTitle,
  Trigger: DrawerTrigger,
});
