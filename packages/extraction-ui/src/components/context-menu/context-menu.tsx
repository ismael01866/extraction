import React, { ElementType } from 'react';

import { ContextMenu } from 'radix-ui';

import { Element } from '../element';
import {
  ContextMenuCheckboxItemProps,
  ContextMenuCommandProps,
  ContextMenuContentProps,
  ContextMenuIndicatorProps,
  ContextMenuItemProps,
  ContextMenuLabelProps,
  ContextMenuPortalProps,
  ContextMenuProps,
  ContextMenuRadioGroupProps,
  ContextMenuRadioItemProps,
  ContextMenuSectionProps,
  ContextMenuSeparatorProps,
  ContextMenuSubContentProps,
  ContextMenuSubProps,
  ContextMenuSubTriggerProps,
  ContextMenuTriggerProps,
} from './context-menu.types';

export const ContextMenuRoot = (props: ContextMenuProps) => {
  const { children, ...rest } = props;

  return <ContextMenu.Root {...rest}>{children}</ContextMenu.Root>;
};

ContextMenuRoot.displayName = 'ContextMenu';

export const ContextMenuTrigger = <T extends ElementType = 'div'>(
  props: ContextMenuTriggerProps<T>,
) => {
  const { as = 'div', asChild = false, children, ...rest } = props;

  return (
    <ContextMenu.Trigger asChild {...rest}>
      <Element as={as as ElementType<any>} asChild={asChild} cssClassName="ex-context-menu-trigger">
        {children}
      </Element>
    </ContextMenu.Trigger>
  );
};

ContextMenuTrigger.displayName = 'ContextMenu.Trigger';

export const ContextMenuPortal = (props: ContextMenuPortalProps) => {
  const { children, ...rest } = props;

  return <ContextMenu.Portal {...rest}>{children}</ContextMenu.Portal>;
};

ContextMenuPortal.displayName = 'ContextMenu.Portal';

export const ContextMenuContent = <T extends ElementType = 'div'>(
  props: ContextMenuContentProps<T>,
) => {
  const { as = 'div', asChild = false, children, ...rest } = props;

  return (
    <ContextMenu.Content asChild {...rest}>
      <Element as={as as ElementType<any>} asChild={asChild} cssClassName="ex-context-menu-content">
        {children}
      </Element>
    </ContextMenu.Content>
  );
};

ContextMenuContent.displayName = 'ContextMenu.Content';

export const ContextMenuSection = <T extends ElementType = 'div'>(
  props: ContextMenuSectionProps<T>,
) => {
  const { as = 'div', children, ...rest } = props;

  return (
    <Element as={as as ElementType<any>} cssClassName="ex-context-menu-section" {...rest}>
      {children}
    </Element>
  );
};

ContextMenuSection.displayName = 'ContextMenu.Section';

export const ContextMenuItem = <T extends ElementType = 'div'>(props: ContextMenuItemProps<T>) => {
  const { as = 'div', asChild = false, children, ...rest } = props;

  return (
    <ContextMenu.Item asChild {...rest}>
      <Element as={as as ElementType<any>} asChild={asChild} cssClassName="ex-context-menu-item">
        {children}
      </Element>
    </ContextMenu.Item>
  );
};

ContextMenuItem.displayName = 'ContextMenu.Item';

export const ContextMenuIndicator = <T extends ElementType = 'div'>(
  props: ContextMenuIndicatorProps<T>,
) => {
  const { as = 'div', asChild = false, children, forceMount = true, ...rest } = props;

  return (
    <ContextMenu.ItemIndicator forceMount={forceMount} asChild {...rest}>
      <Element
        as={as as ElementType<any>}
        asChild={asChild}
        cssClassName="ex-context-menu-item-indicator"
      >
        {children}
      </Element>
    </ContextMenu.ItemIndicator>
  );
};

ContextMenuIndicator.displayName = 'ContextMenu.Indicator';

export const ContextMenuLabel = <T extends ElementType = 'div'>(
  props: ContextMenuLabelProps<T>,
) => {
  const { as = 'div', asChild = false, children, ...rest } = props;

  return (
    <ContextMenu.Label asChild {...rest}>
      <Element as={as as ElementType<any>} asChild={asChild} cssClassName="ex-context-menu-label">
        {children}
      </Element>
    </ContextMenu.Label>
  );
};

ContextMenuLabel.displayName = 'ContextMenu.Label';

export const ContextMenuCommand = <T extends ElementType = 'div'>(
  props: ContextMenuCommandProps<T>,
) => {
  const { as = 'kbd', children, ...rest } = props;

  return (
    <Element as={as as ElementType<any>} cssClassName="ex-context-menu-command" {...rest}>
      {children}
    </Element>
  );
};

ContextMenuCommand.displayName = 'ContextMenu.Command';

export const ContextMenuSeparator = <T extends ElementType = 'div'>(
  props: ContextMenuSeparatorProps<T>,
) => {
  const { as = 'div', asChild = false, children, ...rest } = props;

  return (
    <ContextMenu.Separator asChild {...rest}>
      <Element
        as={as as ElementType<any>}
        asChild={asChild}
        cssClassName="ex-context-menu-separator"
      >
        {children}
      </Element>
    </ContextMenu.Separator>
  );
};

ContextMenuSeparator.displayName = 'ContextMenu.Separator';

export const ContextMenuRadioGroup = <T extends ElementType = 'div'>(
  props: ContextMenuRadioGroupProps<T>,
) => {
  const { as = 'div', asChild = false, children, ...rest } = props;

  return (
    <ContextMenu.RadioGroup asChild {...rest}>
      <Element
        as={as as ElementType<any>}
        asChild={asChild}
        cssClassName="ex-context-menu-radio-group"
      >
        {children}
      </Element>
    </ContextMenu.RadioGroup>
  );
};

ContextMenuRadioGroup.displayName = 'ContextMenu.RadioGroup';

export const ContextMenuRadioItem = <T extends ElementType = 'div'>(
  props: ContextMenuRadioItemProps<T>,
) => {
  const { as = 'div', asChild = false, children, ...rest } = props;

  return (
    <ContextMenu.RadioItem asChild {...rest}>
      <Element
        as={as as ElementType<any>}
        asChild={asChild}
        cssClassName="ex-context-menu-radio-item"
      >
        {children}
      </Element>
    </ContextMenu.RadioItem>
  );
};

ContextMenuRadioItem.displayName = 'ContextMenu.RadioItem';

export const ContextMenuCheckboxItem = <T extends ElementType = 'div'>(
  props: ContextMenuCheckboxItemProps<T>,
) => {
  const { as = 'div', asChild = false, children, ...rest } = props;

  return (
    <ContextMenu.CheckboxItem asChild {...rest}>
      <Element
        as={as as ElementType<any>}
        asChild={asChild}
        cssClassName="ex-context-menu-checkbox-item"
      >
        {children}
      </Element>
    </ContextMenu.CheckboxItem>
  );
};

ContextMenuCheckboxItem.displayName = 'ContextMenu.CheckboxItem';

export const ContextMenuSub = <T extends ElementType = 'div'>(props: ContextMenuSubProps<T>) => {
  const { as = 'div', asChild = false, children, ...rest } = props;

  return (
    <ContextMenu.Sub asChild {...rest}>
      <Element as={as as ElementType<any>} asChild={asChild} cssClassName="ex-context-menu-sub">
        {children}
      </Element>
    </ContextMenu.Sub>
  );
};

ContextMenuSub.displayName = 'ContextMenu.Sub';

export const ContextMenuSubTrigger = <T extends ElementType = 'div'>(
  props: ContextMenuSubTriggerProps<T>,
) => {
  const { as = 'div', asChild = false, children, ...rest } = props;

  return (
    <ContextMenu.SubTrigger asChild {...rest}>
      <Element
        as={as as ElementType<any>}
        asChild={asChild}
        cssClassName="ex-context-menu-sub-trigger"
      >
        {children}
      </Element>
    </ContextMenu.SubTrigger>
  );
};

ContextMenuSubTrigger.displayName = 'ContextMenu.SubTrigger';

export const ContextMenuSubContent = <T extends ElementType = 'div'>(
  props: ContextMenuSubContentProps<T>,
) => {
  const { as = 'div', asChild = false, children, alignOffset = -8, ...rest } = props;

  return (
    <ContextMenu.SubContent asChild alignOffset={alignOffset} {...rest}>
      <Element
        as={as as ElementType<any>}
        asChild={asChild}
        cssClassName="ex-context-menu-sub-content"
      >
        {children}
      </Element>
    </ContextMenu.SubContent>
  );
};

ContextMenuSubContent.displayName = 'ContextMenu.SubContent';
