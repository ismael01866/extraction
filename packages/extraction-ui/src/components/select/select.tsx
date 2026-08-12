import React, { ElementType } from 'react';

import './select.css';

import { cn } from '../../utils';
import { Element } from '../element';
import {
  SelectArrowProps,
  SelectContentProps,
  SelectGroupProps,
  SelectIconProps,
  SelectItemIndicatorProps,
  SelectItemProps,
  SelectItemTextProps,
  SelectLabelProps,
  SelectPortalProps,
  SelectProps,
  SelectScrollDownButtonProps,
  SelectScrollUpButtonProps,
  SelectSectionProps,
  SelectSeparatorProps,
  SelectTriggerProps,
  SelectValueProps,
  SelectViewportProps,
} from './select.types';

import * as Select from '@radix-ui/react-select';

export const SelectRoot = (props: SelectProps) => {
  const { children, ...rest } = props;

  return <Select.Root {...rest}>{children}</Select.Root>;
};

SelectRoot.displayName = 'Select';

export const SelectTrigger = <T extends ElementType = 'button'>(props: SelectTriggerProps<T>) => {
  const { as = 'button', asChild = false, children, ...rest } = props;

  return (
    <Select.Trigger asChild {...rest}>
      <Element as={as as ElementType<any>} asChild={asChild} cssClassName="ex-select-trigger">
        {children}
      </Element>
    </Select.Trigger>
  );
};

SelectTrigger.displayName = 'Select.Trigger';

export const SelectValue = (props: SelectValueProps) => {
  const { children, className, ...rest } = props;

  const classes = cn('ex-select-value', className);

  return (
    <Select.Value className={classes} {...rest}>
      {children}
    </Select.Value>
  );
};

SelectValue.displayName = 'Select.Value';

export const SelectIcon = <T extends ElementType = 'div'>(props: SelectIconProps<T>) => {
  const { as = 'div', asChild = false, children, ...rest } = props;

  return (
    <Select.Icon asChild {...rest}>
      <Element as={as as ElementType<any>} asChild={asChild} cssClassName="ex-select-icon">
        {children ?? (
          <svg className="ex-select-icon-svg" viewBox="0 0 24 24">
            <path d="m6 9 6 6 6-6"></path>
          </svg>
        )}
      </Element>
    </Select.Icon>
  );
};

SelectIcon.displayName = 'Select.Icon';

export const SelectPortal = (props: SelectPortalProps) => {
  const { children, ...rest } = props;

  return <Select.Portal {...rest}>{children}</Select.Portal>;
};

SelectPortal.displayName = 'Select.Portal';

export const SelectContent = <T extends ElementType = 'div'>(props: SelectContentProps<T>) => {
  const { as = 'div', asChild = false, children, ...rest } = props;

  return (
    <Select.Content asChild {...rest}>
      <Element as={as as ElementType<any>} asChild={asChild} cssClassName="ex-select-content">
        {children}
      </Element>
    </Select.Content>
  );
};

SelectContent.displayName = 'Select.Content';

export const SelectSection = <T extends ElementType = 'div'>(props: SelectSectionProps<T>) => {
  const { as = 'div', children, ...rest } = props;

  return (
    <Element as={as as ElementType<any>} cssClassName="ex-select-section" {...rest}>
      {children}
    </Element>
  );
};

SelectSection.displayName = 'Select.Section';

export const SelectArrow = (props: SelectArrowProps) => {
  const { children, className, ...rest } = props;

  const classes = cn('ex-select-arrow', className);

  return (
    <Select.Arrow className={classes} {...rest}>
      {children}
    </Select.Arrow>
  );
};

SelectArrow.displayName = 'Select.Arrow';

export const SelectGroup = <T extends ElementType = 'div'>(props: SelectGroupProps<T>) => {
  const { as = 'div', asChild = false, children, ...rest } = props;

  return (
    <Select.Group asChild {...rest}>
      <Element as={as as ElementType<any>} asChild={asChild} cssClassName="ex-select-group">
        {children}
      </Element>
    </Select.Group>
  );
};

SelectGroup.displayName = 'Select.Group';

export const SelectItem = <T extends ElementType = 'div'>(props: SelectItemProps<T>) => {
  const { as = 'div', asChild = false, children, ...rest } = props;

  return (
    <Select.Item asChild {...rest}>
      <Element as={as as ElementType<any>} asChild={asChild} cssClassName="ex-select-item">
        {children}
      </Element>
    </Select.Item>
  );
};

SelectItem.displayName = 'Select.Item';

export const SelectItemText = <T extends ElementType = 'div'>(props: SelectItemTextProps<T>) => {
  const { as = 'div', asChild = false, children, ...rest } = props;

  return (
    <Select.ItemText asChild {...rest}>
      <Element as={as as ElementType<any>} asChild={asChild} cssClassName="ex-select-item-text">
        {children}
      </Element>
    </Select.ItemText>
  );
};

SelectItemText.displayName = 'Select.ItemText';

export const SelectItemIndicator = <T extends ElementType = 'div'>(
  props: SelectItemIndicatorProps<T>,
) => {
  const { as = 'div', asChild = false, children, ...rest } = props;

  return (
    <Select.ItemIndicator asChild {...rest}>
      <Element
        as={as as ElementType<any>}
        asChild={asChild}
        cssClassName="ex-select-item-indicator"
      >
        {children ?? (
          <svg className="ex-select-item-indicator-svg" viewBox="0 0 24 24">
            <path d="M20 6 9 17l-5-5"></path>
          </svg>
        )}
      </Element>
    </Select.ItemIndicator>
  );
};

SelectItemIndicator.displayName = 'Select.ItemIndicator';

export const SelectLabel = <T extends ElementType = 'div'>(props: SelectLabelProps<T>) => {
  const { as = 'div', asChild = false, children, ...rest } = props;

  return (
    <Select.Label asChild {...rest}>
      <Element as={as as ElementType<any>} asChild={asChild} cssClassName="ex-select-label">
        {children}
      </Element>
    </Select.Label>
  );
};

SelectLabel.displayName = 'Select.Label';

export const SelectSeparator = <T extends ElementType = 'div'>(props: SelectSeparatorProps<T>) => {
  const { as = 'div', asChild = false, children, ...rest } = props;

  return (
    <Select.Separator asChild {...rest}>
      <Element as={as as ElementType<any>} asChild={asChild} cssClassName="ex-select-separator">
        {children}
      </Element>
    </Select.Separator>
  );
};

SelectSeparator.displayName = 'Select.Separator';

export const SelectViewport = <T extends ElementType = 'div'>(props: SelectViewportProps<T>) => {
  const { children, className, ...rest } = props;

  const classNames = cn('ex-select-viewport', className);

  return (
    <Select.Viewport className={classNames} {...rest}>
      {children}
    </Select.Viewport>
  );
};

SelectViewport.displayName = 'Select.Viewport';

export const SelectScrollUpButton = <T extends ElementType = 'div'>(
  props: SelectScrollUpButtonProps<T>,
) => {
  const { children, ...rest } = props;

  return (
    <Select.ScrollUpButton className="ex-select-scroll-up-button" {...rest}>
      {children ?? (
        <svg className="ex-select-scroll-up-button-svg" viewBox="0 0 24 24">
          <path d="m12.354 8.854 5.792 5.792a.5.5 0 0 1-.353.854H6.207a.5.5 0 0 1-.353-.854l5.792-5.792a.5.5 0 0 1 .708 0Z"></path>
        </svg>
      )}
    </Select.ScrollUpButton>
  );
};

SelectScrollUpButton.displayName = 'Select.ScrollUpButton';

export const SelectScrollDownButton = <T extends ElementType = 'div'>(
  props: SelectScrollDownButtonProps<T>,
) => {
  const { children, ...rest } = props;

  return (
    <Select.ScrollDownButton className="ex-select-scroll-down-button" {...rest}>
      {children ?? (
        <svg className="ex-select-scroll-down-button-svg" viewBox="0 0 24 24">
          <path d="M11.646 15.146 5.854 9.354a.5.5 0 0 1 .353-.854h11.586a.5.5 0 0 1 .353.854l-5.793 5.792a.5.5 0 0 1-.707 0Z"></path>
        </svg>
      )}
    </Select.ScrollDownButton>
  );
};

SelectScrollDownButton.displayName = 'Select.ScrollDownButton';
