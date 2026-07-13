import React, { ElementType } from 'react';

import { AlertDialog } from 'radix-ui';

import { Element } from '../element';
import {
  AlertDialogActionProps,
  AlertDialogCancelProps,
  AlertDialogContentProps,
  AlertDialogDescriptionProps,
  AlertDialogOverlayProps,
  AlertDialogPortalProps,
  AlertDialogProps,
  AlertDialogSectionProps,
  AlertDialogTitleProps,
  AlertDialogTriggerProps,
} from './alert-dialog.types';

export const AlertDialogRoot = (props: AlertDialogProps) => {
  const { children, ...rest } = props;

  return <AlertDialog.Root {...rest}>{children}</AlertDialog.Root>;
};

AlertDialogRoot.displayName = 'AlertDialog';

export const AlertDialogTrigger = <T extends ElementType = 'div'>(
  props: AlertDialogTriggerProps<T>,
) => {
  const { as = 'div', asChild = false, children, ...rest } = props;

  return (
    <AlertDialog.Trigger asChild {...rest}>
      <Element as={as as ElementType<any>} asChild={asChild} cssClassName="ex-alert-dialog-trigger">
        {children}
      </Element>
    </AlertDialog.Trigger>
  );
};

AlertDialogTrigger.displayName = 'AlertDialog.Trigger';

export const AlertDialogPortal = (props: AlertDialogPortalProps) => {
  const { children, ...rest } = props;

  return <AlertDialog.Portal {...rest}>{children}</AlertDialog.Portal>;
};

AlertDialogPortal.displayName = 'AlertDialog.Portal';

export const AlertDialogOverlay = <T extends ElementType = 'div'>(
  props: AlertDialogOverlayProps<T>,
) => {
  const { as = 'div', asChild = false, children, ...rest } = props;

  return (
    <AlertDialog.Overlay asChild {...rest}>
      <Element as={as as ElementType<any>} asChild={asChild} cssClassName="ex-alert-dialog-overlay">
        {children}
      </Element>
    </AlertDialog.Overlay>
  );
};

AlertDialogOverlay.displayName = 'AlertDialog.Overlay';

export const AlertDialogContent = <T extends ElementType = 'div'>(
  props: AlertDialogContentProps<T>,
) => {
  const { as = 'div', asChild = false, children, ...rest } = props;

  return (
    <AlertDialog.Content asChild {...rest}>
      <Element as={as as ElementType<any>} asChild={asChild} cssClassName="ex-alert-dialog-content">
        {children}
      </Element>
    </AlertDialog.Content>
  );
};

AlertDialogContent.displayName = 'AlertDialog.Content';

export const AlertDialogSection = <T extends ElementType = 'div'>(
  props: AlertDialogSectionProps<T>,
) => {
  const { as = 'div', children, ...rest } = props;

  return (
    <Element as={as as ElementType<any>} cssClassName="ex-alert-dialog-section" {...rest}>
      {children}
    </Element>
  );
};

AlertDialogSection.displayName = 'AlertDialog.Section';

export const AlertDialogCancel = <T extends ElementType = 'div'>(
  props: AlertDialogCancelProps<T>,
) => {
  const { as = 'div', asChild = false, children, ...rest } = props;

  return (
    <AlertDialog.Cancel asChild {...rest}>
      <Element as={as as ElementType<any>} asChild={asChild} cssClassName="ex-alert-dialog-cancel">
        {children}
      </Element>
    </AlertDialog.Cancel>
  );
};

AlertDialogCancel.displayName = 'AlertDialog.Cancel';

export const AlertDialogAction = <T extends ElementType = 'div'>(
  props: AlertDialogActionProps<T>,
) => {
  const { as = 'div', asChild = false, children, ...rest } = props;

  return (
    <AlertDialog.Action asChild {...rest}>
      <Element as={as as ElementType<any>} asChild={asChild} cssClassName="ex-alert-dialog-action">
        {children}
      </Element>
    </AlertDialog.Action>
  );
};

AlertDialogAction.displayName = 'AlertDialog.Action';

export const AlertDialogTitle = <T extends ElementType = 'h2'>(props: AlertDialogTitleProps<T>) => {
  const { as = 'h2', asChild = false, children, ...rest } = props;

  return (
    <AlertDialog.Title asChild {...rest}>
      <Element as={as as ElementType<any>} asChild={asChild} cssClassName="ex-alert-dialog-title">
        {children}
      </Element>
    </AlertDialog.Title>
  );
};

AlertDialogTitle.displayName = 'AlertDialog.Title';

export const AlertDialogDescription = <T extends ElementType = 'p'>(
  props: AlertDialogDescriptionProps<T>,
) => {
  const { as = 'p', asChild = false, children, ...rest } = props;

  return (
    <AlertDialog.Description asChild {...rest}>
      <Element
        as={as as ElementType<any>}
        asChild={asChild}
        cssClassName="ex-alert-dialog-description"
      >
        {children}
      </Element>
    </AlertDialog.Description>
  );
};

AlertDialogDescription.displayName = 'AlertDialog.Description';
