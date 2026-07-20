import React, { ElementType } from 'react';

import './menubar.css';

import { cn } from '../../utils';
import { Element } from '../element';
import {
  MenubarArrowProps,
  MenubarCheckboxItemProps,
  MenubarCommandProps,
  MenubarContentProps,
  MenubarIndicatorProps,
  MenubarItemProps,
  MenubarLabelProps,
  MenubarMenuProps,
  MenubarPortalProps,
  MenubarProps,
  MenubarRadioGroupProps,
  MenubarRadioItemProps,
  MenubarSectionProps,
  MenubarSeparatorProps,
  MenubarSubContentProps,
  MenubarSubProps,
  MenubarSubTriggerProps,
  MenubarTriggerProps,
} from './menubar.types';

import * as Menubar from '@radix-ui/react-menubar';

export const MenubarRoot = <T extends ElementType = 'div'>(props: MenubarProps<T>) => {
  const { as = 'div', asChild = false, children, ...rest } = props;

  return (
    <Menubar.Root asChild {...rest}>
      <Element as={as as ElementType<any>} asChild={asChild} cssClassName="ex-menubar">
        {children}
      </Element>
    </Menubar.Root>
  );
};

MenubarRoot.displayName = 'Menubar';

export const MenubarMenu = (props: MenubarMenuProps) => {
  const { children, ...rest } = props;

  return <Menubar.Menu {...rest}>{children}</Menubar.Menu>;
};

MenubarMenu.displayName = 'Menubar.Menu';

export const MenubarTrigger = <T extends ElementType = 'button'>(props: MenubarTriggerProps<T>) => {
  const { as = 'button', asChild = false, children, ...rest } = props;

  return (
    <Menubar.Trigger asChild {...rest}>
      <Element as={as as ElementType<any>} asChild={asChild} cssClassName="ex-menubar-trigger">
        {children}
      </Element>
    </Menubar.Trigger>
  );
};

MenubarTrigger.displayName = 'Menubar.Trigger';

export const MenubarPortal = (props: MenubarPortalProps) => {
  const { children, ...rest } = props;

  return <Menubar.Portal {...rest}>{children}</Menubar.Portal>;
};

MenubarPortal.displayName = 'Menubar.Portal';

export const MenubarContent = <T extends ElementType = 'div'>(props: MenubarContentProps<T>) => {
  const {
    as = 'div',
    asChild = false,
    children,
    alignOffset = -8,
    sideOffset = 8,
    ...rest
  } = props;

  return (
    <Menubar.Content asChild alignOffset={alignOffset} sideOffset={sideOffset} {...rest}>
      <Element as={as as ElementType<any>} asChild={asChild} cssClassName="ex-menubar-content">
        {children}
      </Element>
    </Menubar.Content>
  );
};

MenubarContent.displayName = 'Menubar.Content';

export const MenubarSection = <T extends ElementType = 'div'>(props: MenubarSectionProps<T>) => {
  const { as = 'div', children, ...rest } = props;

  return (
    <Element as={as as ElementType<any>} cssClassName="ex-menubar-section" {...rest}>
      {children}
    </Element>
  );
};

MenubarSection.displayName = 'Menubar.Section';

export const MenubarArrow = (props: MenubarArrowProps) => {
  const { children, className, ...rest } = props;

  const classes = cn('ex-menubar-arrow', className);

  return (
    <Menubar.Arrow className={classes} {...rest}>
      {children}
    </Menubar.Arrow>
  );
};

MenubarArrow.displayName = 'Menubar.Arrow';

export const MenubarItem = <T extends ElementType = 'div'>(props: MenubarItemProps<T>) => {
  const { as = 'div', asChild = false, children, ...rest } = props;

  return (
    <Menubar.Item asChild {...rest}>
      <Element as={as as ElementType<any>} asChild={asChild} cssClassName="ex-menubar-item">
        {children}
      </Element>
    </Menubar.Item>
  );
};

MenubarItem.displayName = 'Menubar.Item';

export const MenubarIndicator = <T extends ElementType = 'div'>(
  props: MenubarIndicatorProps<T>,
) => {
  const { as = 'div', asChild = false, children, forceMount = true, ...rest } = props;

  return (
    <Menubar.ItemIndicator forceMount={forceMount} asChild {...rest}>
      <Element as={as as ElementType<any>} asChild={asChild} cssClassName="ex-menubar-indicator">
        {children}
      </Element>
    </Menubar.ItemIndicator>
  );
};

MenubarIndicator.displayName = 'Menubar.Indicator';

export const MenubarLabel = <T extends ElementType = 'div'>(props: MenubarLabelProps<T>) => {
  const { as = 'div', asChild = false, children, ...rest } = props;

  return (
    <Menubar.Label asChild {...rest}>
      <Element as={as as ElementType<any>} asChild={asChild} cssClassName="ex-menubar-label">
        {children}
      </Element>
    </Menubar.Label>
  );
};

MenubarLabel.displayName = 'Menubar.Label';

export const MenubarCommand = <T extends ElementType = 'div'>(props: MenubarCommandProps<T>) => {
  const { as = 'kbd', children, ...rest } = props;

  return (
    <Element as={as as ElementType<any>} cssClassName="ex-menubar-command" {...rest}>
      {children}
    </Element>
  );
};

MenubarCommand.displayName = 'Menubar.Command';

export const MenubarSeparator = <T extends ElementType = 'div'>(
  props: MenubarSeparatorProps<T>,
) => {
  const { as = 'div', asChild = false, children, ...rest } = props;

  return (
    <Menubar.Separator asChild {...rest}>
      <Element as={as as ElementType<any>} asChild={asChild} cssClassName="ex-menubar-separator">
        {children}
      </Element>
    </Menubar.Separator>
  );
};

MenubarSeparator.displayName = 'Menubar.Separator';

export const MenubarRadioGroup = <T extends ElementType = 'div'>(
  props: MenubarRadioGroupProps<T>,
) => {
  const { as = 'div', asChild = false, children, ...rest } = props;

  return (
    <Menubar.RadioGroup asChild {...rest}>
      <Element as={as as ElementType<any>} asChild={asChild} cssClassName="ex-menubar-radio-group">
        {children}
      </Element>
    </Menubar.RadioGroup>
  );
};

MenubarRadioGroup.displayName = 'Menubar.RadioGroup';

export const MenubarRadioItem = <T extends ElementType = 'div'>(
  props: MenubarRadioItemProps<T>,
) => {
  const { as = 'div', asChild = false, children, ...rest } = props;

  return (
    <Menubar.RadioItem asChild {...rest}>
      <Element as={as as ElementType<any>} asChild={asChild} cssClassName="ex-menubar-radio-item">
        {children}
      </Element>
    </Menubar.RadioItem>
  );
};

MenubarRadioItem.displayName = 'Menubar.RadioItem';

export const MenubarCheckboxItem = <T extends ElementType = 'div'>(
  props: MenubarCheckboxItemProps<T>,
) => {
  const { as = 'div', asChild = false, children, ...rest } = props;

  return (
    <Menubar.CheckboxItem asChild {...rest}>
      <Element
        as={as as ElementType<any>}
        asChild={asChild}
        cssClassName="ex-menubar-checkbox-item"
      >
        {children}
      </Element>
    </Menubar.CheckboxItem>
  );
};

MenubarCheckboxItem.displayName = 'Menubar.CheckboxItem';

export const MenubarSub = <T extends ElementType = 'div'>(props: MenubarSubProps<T>) => {
  const { as = 'div', asChild = false, children, ...rest } = props;

  return (
    <Menubar.Sub asChild {...rest}>
      <Element as={as as ElementType<any>} asChild={asChild} cssClassName="ex-menubar-sub">
        {children}
      </Element>
    </Menubar.Sub>
  );
};

MenubarSub.displayName = 'Menubar.Sub';

export const MenubarSubTrigger = <T extends ElementType = 'div'>(
  props: MenubarSubTriggerProps<T>,
) => {
  const { as = 'div', asChild = false, children, ...rest } = props;

  return (
    <Menubar.SubTrigger asChild {...rest}>
      <Element as={as as ElementType<any>} asChild={asChild} cssClassName="ex-menubar-sub-trigger">
        {children}
      </Element>
    </Menubar.SubTrigger>
  );
};

MenubarSubTrigger.displayName = 'Menubar.SubTrigger';

export const MenubarSubContent = <T extends ElementType = 'div'>(
  props: MenubarSubContentProps<T>,
) => {
  const { as = 'div', asChild = false, children, alignOffset = -8, ...rest } = props;

  return (
    <Menubar.SubContent asChild alignOffset={alignOffset} {...rest}>
      <Element as={as as ElementType<any>} asChild={asChild} cssClassName="ex-menubar-sub-content">
        {children}
      </Element>
    </Menubar.SubContent>
  );
};

MenubarSubContent.displayName = 'Menubar.SubContent';
