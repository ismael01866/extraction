import React, { ElementType } from 'react';

import { Dialog } from 'radix-ui';

import { CloseButton } from '../close-button';
import { Element } from '../element';
import {
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

export const DrawerRoot = (props: DrawerProps) => {
  const { children, ...rest } = props;

  return <Dialog.Root {...rest}>{children}</Dialog.Root>;
};

DrawerRoot.displayName = 'Drawer';

export const DrawerTrigger = <T extends ElementType = 'div'>(props: DrawerTriggerProps<T>) => {
  const { as = 'div', asChild = false, children, ...rest } = props;

  return (
    <Dialog.Trigger asChild {...rest}>
      <Element as={as as ElementType<any>} asChild={asChild} cssClassName="ex-drawer-trigger">
        {children}
      </Element>
    </Dialog.Trigger>
  );
};

DrawerTrigger.displayName = 'Drawer.Trigger';

export const DrawerPortal = (props: DrawerPortalProps) => {
  const { children, ...rest } = props;

  return <Dialog.Portal {...rest}>{children}</Dialog.Portal>;
};

DrawerPortal.displayName = 'Drawer.Portal';

export const DrawerOverlay = <T extends ElementType = 'div'>(props: DrawerOverlayProps<T>) => {
  const { as = 'div', asChild = false, children, ...rest } = props;

  return (
    <Dialog.Overlay asChild {...rest}>
      <Element as={as as ElementType<any>} asChild={asChild} cssClassName="ex-drawer-overlay">
        {children}
      </Element>
    </Dialog.Overlay>
  );
};

DrawerOverlay.displayName = 'Drawer.Overlay';

export const DrawerContent = <T extends ElementType = 'div'>(props: DrawerContentProps<T>) => {
  const { as = 'div', asChild = false, children, placement = 'end', ...rest } = props;

  return (
    <Dialog.Content asChild {...rest}>
      <Element
        as={as as ElementType<any>}
        asChild={asChild}
        cssClassName="ex-drawer-content"
        data-placement={placement}
      >
        {children}
      </Element>
    </Dialog.Content>
  );
};

DrawerContent.displayName = 'Drawer.Content';

export const DrawerSection = <T extends ElementType = 'div'>(props: DrawerSectionProps<T>) => {
  const { as = 'div', children, ...rest } = props;

  return (
    <Element as={as as ElementType<any>} cssClassName="ex-drawer-section" {...rest}>
      {children}
    </Element>
  );
};

DrawerSection.displayName = 'Drawer.Section';

export const DrawerTitle = <T extends ElementType = 'h2'>(props: DrawerTitleProps<T>) => {
  const { as = 'h2', asChild = false, children, ...rest } = props;

  return (
    <Dialog.Title asChild {...rest}>
      <Element as={as as ElementType<any>} asChild={asChild} cssClassName="ex-drawer-title">
        {children}
      </Element>
    </Dialog.Title>
  );
};

DrawerTitle.displayName = 'Drawer.Title';

export const DrawerDescription = <T extends ElementType = 'p'>(
  props: DrawerDescriptionProps<T>,
) => {
  const { as = 'p', asChild = false, children, ...rest } = props;

  return (
    <Dialog.Description asChild {...rest}>
      <Element as={as as ElementType<any>} asChild={asChild} cssClassName="ex-drawer-description">
        {children}
      </Element>
    </Dialog.Description>
  );
};

DrawerDescription.displayName = 'Drawer.Description';

export const DrawerClose = <T extends ElementType = 'div'>(props: DrawerCloseProps<T>) => {
  const { as = 'div', asChild = false, children, ...rest } = props;

  return (
    <Dialog.Close asChild {...rest}>
      {children ? (
        <Element as={as as ElementType<any>} asChild={asChild} cssClassName="ex-drawer-close">
          {children}
        </Element>
      ) : (
        <CloseButton cssClassName={'ex-drawer-close ex-drawer-close-native'} />
      )}
    </Dialog.Close>
  );
};

DrawerClose.displayName = 'Drawer.Close';
