import React, { ElementType } from 'react';

import { Select } from 'radix-ui';
import { cn } from 'utils';

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
          <svg className="ex-select-icon-caret" viewBox="0 0 20 20">
            <polyline points="6 10 10 14 14 10" />
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
          <svg className="ex-select-item-indicator-check" viewBox="0 0 20 20">
            <path d="M5 13l4 4L19 7" />
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
        <svg className="ex-select-scroll-up-caret" viewBox="0 0 20 20">
          <polyline points="6 12 10 8 14 12" />
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
        <svg className="ex-select-scroll-down-caret" viewBox="0 0 20 20">
          <polyline points="6 10 10 14 14 10" />
        </svg>
      )}
    </Select.ScrollDownButton>
  );
};

SelectScrollDownButton.displayName = 'Select.ScrollDownButton';
