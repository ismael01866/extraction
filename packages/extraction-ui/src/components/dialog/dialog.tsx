import React, { ElementType } from 'react';

import { Dialog } from 'radix-ui';

import { CloseButton } from '../close-button';
import { Element } from '../element';
import {
  DialogCloseProps,
  DialogContentProps,
  DialogDescriptionProps,
  DialogOverlayProps,
  DialogPortalProps,
  DialogProps,
  DialogSectionProps,
  DialogTitleProps,
  DialogTriggerProps,
} from './dialog.types';

export const DialogRoot = (props: DialogProps) => {
  const { children, ...rest } = props;

  return <Dialog.Root {...rest}>{children}</Dialog.Root>;
};

DialogRoot.displayName = 'Dialog';

export const DialogTrigger = <T extends ElementType = 'div'>(props: DialogTriggerProps<T>) => {
  const { as = 'div', asChild = false, children, ...rest } = props;

  return (
    <Dialog.Trigger asChild {...rest}>
      <Element as={as as ElementType<any>} asChild={asChild} cssClassName="ex-dialog-trigger">
        {children}
      </Element>
    </Dialog.Trigger>
  );
};

DialogTrigger.displayName = 'Dialog.Trigger';

export const DialogPortal = (props: DialogPortalProps) => {
  const { children, ...rest } = props;

  return <Dialog.Portal {...rest}>{children}</Dialog.Portal>;
};

DialogPortal.displayName = 'Dialog.Portal';

export const DialogOverlay = <T extends ElementType = 'div'>(props: DialogOverlayProps<T>) => {
  const { as = 'div', asChild = false, children, ...rest } = props;

  return (
    <Dialog.Overlay asChild {...rest}>
      <Element as={as as ElementType<any>} asChild={asChild} cssClassName="ex-dialog-overlay">
        {children}
      </Element>
    </Dialog.Overlay>
  );
};

DialogOverlay.displayName = 'Dialog.Overlay';

export const DialogContent = <T extends ElementType = 'div'>(props: DialogContentProps<T>) => {
  const { as = 'div', asChild = false, children, ...rest } = props;

  return (
    <Dialog.Content asChild {...rest}>
      <Element as={as as ElementType<any>} asChild={asChild} cssClassName="ex-dialog-content">
        {children}
      </Element>
    </Dialog.Content>
  );
};

DialogContent.displayName = 'Dialog.Content';

export const DialogSection = <T extends ElementType = 'div'>(props: DialogSectionProps<T>) => {
  const { as = 'div', children, ...rest } = props;

  return (
    <Element as={as as ElementType<any>} cssClassName="ex-dialog-section" {...rest}>
      {children}
    </Element>
  );
};

DialogSection.displayName = 'Dialog.Section';

export const DialogTitle = <T extends ElementType = 'h2'>(props: DialogTitleProps<T>) => {
  const { as = 'h2', asChild = false, children, ...rest } = props;

  return (
    <Dialog.Title asChild {...rest}>
      <Element as={as as ElementType<any>} asChild={asChild} cssClassName="ex-dialog-title">
        {children}
      </Element>
    </Dialog.Title>
  );
};

DialogTitle.displayName = 'Dialog.Title';

export const DialogDescription = <T extends ElementType = 'p'>(
  props: DialogDescriptionProps<T>,
) => {
  const { as = 'p', asChild = false, children, ...rest } = props;

  return (
    <Dialog.Description asChild {...rest}>
      <Element as={as as ElementType<any>} asChild={asChild} cssClassName="ex-dialog-description">
        {children}
      </Element>
    </Dialog.Description>
  );
};

DialogDescription.displayName = 'Dialog.Description';

export const DialogClose = <T extends ElementType = 'div'>(props: DialogCloseProps<T>) => {
  const { as = 'div', asChild = false, children, ...rest } = props;

  return (
    <Dialog.Close asChild {...rest}>
      {children ? (
        <Element as={as as ElementType<any>} asChild={asChild} cssClassName="ex-dialog-close">
          {children}
        </Element>
      ) : (
        <CloseButton cssClassName={'ex-dialog-close ex-dialog-close-native'} />
      )}
    </Dialog.Close>
  );
};

DialogClose.displayName = 'Dialog.Close';
