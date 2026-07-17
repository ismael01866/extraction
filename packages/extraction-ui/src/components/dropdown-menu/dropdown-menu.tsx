import React, { ElementType } from 'react';

import './dropdown-menu.css';

import { cn } from '../../utils';
import { Element } from '../element';
import {
  DropdownMenuArrowProps,
  DropdownMenuCheckboxItemProps,
  DropdownMenuCommandProps,
  DropdownMenuContentProps,
  DropdownMenuIndicatorProps,
  DropdownMenuItemProps,
  DropdownMenuLabelProps,
  DropdownMenuPortalProps,
  DropdownMenuProps,
  DropdownMenuRadioGroupProps,
  DropdownMenuRadioItemProps,
  DropdownMenuSectionProps,
  DropdownMenuSeparatorProps,
  DropdownMenuSubContentProps,
  DropdownMenuSubProps,
  DropdownMenuSubTriggerProps,
  DropdownMenuTriggerProps,
} from './dropdown-menu.types';

import * as DropdownMenu from '@radix-ui/react-dropdown-menu';

export const DropdownMenuRoot = (props: DropdownMenuProps) => {
  const { children, ...rest } = props;

  return <DropdownMenu.Root {...rest}>{children}</DropdownMenu.Root>;
};

DropdownMenuRoot.displayName = 'DropdownMenu';

export const DropdownMenuTrigger = <T extends ElementType = 'div'>(
  props: DropdownMenuTriggerProps<T>,
) => {
  const { as = 'div', asChild = false, children, ...rest } = props;

  return (
    <DropdownMenu.Trigger asChild {...rest}>
      <Element
        as={as as ElementType<any>}
        asChild={asChild}
        cssClassName="ex-dropdown-menu-trigger"
      >
        {children}
      </Element>
    </DropdownMenu.Trigger>
  );
};

DropdownMenuTrigger.displayName = 'DropdownMenu.Trigger';

export const DropdownMenuPortal = (props: DropdownMenuPortalProps) => {
  const { children, ...rest } = props;

  return <DropdownMenu.Portal {...rest}>{children}</DropdownMenu.Portal>;
};

DropdownMenuPortal.displayName = 'DropdownMenu.Portal';

export const DropdownMenuContent = <T extends ElementType = 'div'>(
  props: DropdownMenuContentProps<T>,
) => {
  const { as = 'div', asChild = false, children, ...rest } = props;

  return (
    <DropdownMenu.Content asChild {...rest}>
      <Element
        as={as as ElementType<any>}
        asChild={asChild}
        cssClassName="ex-dropdown-menu-content"
      >
        {children}
      </Element>
    </DropdownMenu.Content>
  );
};

DropdownMenuContent.displayName = 'DropdownMenu.Content';

export const DropdownMenuSection = <T extends ElementType = 'div'>(
  props: DropdownMenuSectionProps<T>,
) => {
  const { as = 'div', children, ...rest } = props;

  return (
    <Element as={as as ElementType<any>} cssClassName="ex-dropdown-menu-section" {...rest}>
      {children}
    </Element>
  );
};

DropdownMenuSection.displayName = 'DropdownMenu.Section';

export const DropdownMenuArrow = (props: DropdownMenuArrowProps) => {
  const { children, className, ...rest } = props;

  const classes = cn('ex-dropdown-menu-arrow', className);

  return (
    <DropdownMenu.Arrow className={classes} {...rest}>
      {children}
    </DropdownMenu.Arrow>
  );
};

DropdownMenuArrow.displayName = 'DropdownMenu.Arrow';

export const DropdownMenuItem = <T extends ElementType = 'div'>(
  props: DropdownMenuItemProps<T>,
) => {
  const { as = 'div', asChild = false, children, ...rest } = props;

  return (
    <DropdownMenu.Item asChild {...rest}>
      <Element as={as as ElementType<any>} asChild={asChild} cssClassName="ex-dropdown-menu-item">
        {children}
      </Element>
    </DropdownMenu.Item>
  );
};

DropdownMenuItem.displayName = 'DropdownMenu.Item';

export const DropdownMenuIndicator = <T extends ElementType = 'div'>(
  props: DropdownMenuIndicatorProps<T>,
) => {
  const { as = 'div', asChild = false, children, forceMount = true, ...rest } = props;

  return (
    <DropdownMenu.ItemIndicator forceMount={forceMount} asChild {...rest}>
      <Element
        as={as as ElementType<any>}
        asChild={asChild}
        cssClassName="ex-dropdown-menu-item-indicator"
      >
        {children}
      </Element>
    </DropdownMenu.ItemIndicator>
  );
};

DropdownMenuIndicator.displayName = 'DropdownMenu.Indicator';

export const DropdownMenuLabel = <T extends ElementType = 'div'>(
  props: DropdownMenuLabelProps<T>,
) => {
  const { as = 'div', asChild = false, children, ...rest } = props;

  return (
    <DropdownMenu.Label asChild {...rest}>
      <Element as={as as ElementType<any>} asChild={asChild} cssClassName="ex-dropdown-menu-label">
        {children}
      </Element>
    </DropdownMenu.Label>
  );
};

DropdownMenuLabel.displayName = 'DropdownMenu.Label';

export const DropdownMenuCommand = <T extends ElementType = 'div'>(
  props: DropdownMenuCommandProps<T>,
) => {
  const { as = 'kbd', children, ...rest } = props;

  return (
    <Element as={as as ElementType<any>} cssClassName="ex-dropdown-menu-command" {...rest}>
      {children}
    </Element>
  );
};

DropdownMenuCommand.displayName = 'DropdownMenu.Command';

export const DropdownMenuSeparator = <T extends ElementType = 'div'>(
  props: DropdownMenuSeparatorProps<T>,
) => {
  const { as = 'div', asChild = false, children, ...rest } = props;

  return (
    <DropdownMenu.Separator asChild {...rest}>
      <Element
        as={as as ElementType<any>}
        asChild={asChild}
        cssClassName="ex-dropdown-menu-separator"
      >
        {children}
      </Element>
    </DropdownMenu.Separator>
  );
};

DropdownMenuSeparator.displayName = 'DropdownMenu.Separator';

export const DropdownMenuRadioGroup = <T extends ElementType = 'div'>(
  props: DropdownMenuRadioGroupProps<T>,
) => {
  const { as = 'div', asChild = false, children, ...rest } = props;

  return (
    <DropdownMenu.RadioGroup asChild {...rest}>
      <Element
        as={as as ElementType<any>}
        asChild={asChild}
        cssClassName="ex-dropdown-menu-radio-group"
      >
        {children}
      </Element>
    </DropdownMenu.RadioGroup>
  );
};

DropdownMenuRadioGroup.displayName = 'DropdownMenu.RadioGroup';

export const DropdownMenuRadioItem = <T extends ElementType = 'div'>(
  props: DropdownMenuRadioItemProps<T>,
) => {
  const { as = 'div', asChild = false, children, ...rest } = props;

  return (
    <DropdownMenu.RadioItem asChild {...rest}>
      <Element
        as={as as ElementType<any>}
        asChild={asChild}
        cssClassName="ex-dropdown-menu-radio-item"
      >
        {children}
      </Element>
    </DropdownMenu.RadioItem>
  );
};

DropdownMenuRadioItem.displayName = 'DropdownMenu.RadioItem';

export const DropdownMenuCheckboxItem = <T extends ElementType = 'div'>(
  props: DropdownMenuCheckboxItemProps<T>,
) => {
  const { as = 'div', asChild = false, children, ...rest } = props;

  return (
    <DropdownMenu.CheckboxItem asChild {...rest}>
      <Element
        as={as as ElementType<any>}
        asChild={asChild}
        cssClassName="ex-dropdown-menu-checkbox-item"
      >
        {children}
      </Element>
    </DropdownMenu.CheckboxItem>
  );
};

DropdownMenuCheckboxItem.displayName = 'DropdownMenu.CheckboxItem';

export const DropdownMenuSub = <T extends ElementType = 'div'>(props: DropdownMenuSubProps<T>) => {
  const { as = 'div', asChild = false, children, ...rest } = props;

  return (
    <DropdownMenu.Sub asChild {...rest}>
      <Element as={as as ElementType<any>} asChild={asChild} cssClassName="ex-dropdown-menu-sub">
        {children}
      </Element>
    </DropdownMenu.Sub>
  );
};

DropdownMenuSub.displayName = 'DropdownMenu.Sub';

export const DropdownMenuSubTrigger = <T extends ElementType = 'div'>(
  props: DropdownMenuSubTriggerProps<T>,
) => {
  const { as = 'div', asChild = false, children, ...rest } = props;

  return (
    <DropdownMenu.SubTrigger asChild {...rest}>
      <Element
        as={as as ElementType<any>}
        asChild={asChild}
        cssClassName="ex-dropdown-menu-sub-trigger"
      >
        {children}
      </Element>
    </DropdownMenu.SubTrigger>
  );
};

DropdownMenuSubTrigger.displayName = 'DropdownMenu.SubTrigger';

export const DropdownMenuSubContent = <T extends ElementType = 'div'>(
  props: DropdownMenuSubContentProps<T>,
) => {
  const { as = 'div', asChild = false, children, alignOffset = -8, ...rest } = props;

  return (
    <DropdownMenu.SubContent asChild alignOffset={alignOffset} {...rest}>
      <Element
        as={as as ElementType<any>}
        asChild={asChild}
        cssClassName="ex-dropdown-menu-sub-content"
      >
        {children}
      </Element>
    </DropdownMenu.SubContent>
  );
};

DropdownMenuSubContent.displayName = 'DropdownMenu.SubContent';
