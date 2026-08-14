'use client';

import React, { Children, ElementType, ReactElement, useContext, useMemo, useState } from 'react';

import './rating.css';

import { Element } from '../element';
import { RatingContext } from './rating.context';
import {
  RatingContextValue,
  RatingControlProps,
  RatingIndicatorProps,
  RatingProps,
} from './rating.types';

import * as RadioGroup from '@radix-ui/react-radio-group';

export const RatingRoot = <T extends ElementType = 'div'>(props: RatingProps<T>) => {
  const {
    as = 'div',
    asChild = false,
    children,
    count,
    defaultValue,
    readOnly = false,
    single = false,
    value,
    onValueChange,
    ...rest
  } = props;

  const [internalValue, setInternalValue] = useState(defaultValue);
  const [hoveredValue, setHoveredValue] = useState<string | null | undefined>(null);

  const isControlled = value !== undefined;
  const activeValue = isControlled ? value : internalValue;

  const handleValueChange = (next: string) => {
    if (!isControlled) {
      setInternalValue(next);
    }

    onValueChange?.(next);
  };

  const context: RatingContextValue = useMemo(
    () => ({
      activeValue,
      hoveredValue,
      readOnly,
      single,
      setHoveredValue,
    }),
    [activeValue, hoveredValue, readOnly, single],
  );

  const items = useMemo(() => {
    if (!count) {
      if (!children) {
        throw new Error('Rating requires either a `count` prop or explicit children elements.');
      }

      return children;
    }

    if (children && count) {
      const childArray = Children.toArray(children);
      const template = childArray.find(React.isValidElement) as
        ReactElement<RatingControlProps<any>> | undefined;

      if (!template) return null;

      return Array.from({ length: count }, (_, index) => {
        const itemValue = index + 1;

        return React.cloneElement(template, {
          key: itemValue,
          value: `${itemValue}`,
          'aria-label': template.props['aria-label'] ?? `${itemValue}`,
        });
      });
    }

    return Array.from({ length: count }, (_, index) => {
      const itemValue = index + 1;

      return (
        <RatingControl key={itemValue} value={`${itemValue}`} aria-label={`${itemValue}`}>
          <RatingIndicator />
        </RatingControl>
      );
    });
  }, [children, count]);

  if (readOnly) {
    return (
      <RatingContext.Provider value={context}>
        <RadioGroup.Root asChild {...rest}>
          <Element
            as={as as ElementType<any>}
            asChild={asChild}
            cssClassName="ex-rating"
            role="img"
          >
            {items}
          </Element>
        </RadioGroup.Root>
      </RatingContext.Provider>
    );
  }

  return (
    <RatingContext.Provider value={context}>
      <RadioGroup.Root
        value={String(activeValue)}
        onValueChange={handleValueChange}
        onMouseLeave={() => setHoveredValue(null)}
        asChild
        {...rest}
      >
        <Element as={as as ElementType<any>} asChild={asChild} cssClassName="ex-rating">
          {items}
        </Element>
      </RadioGroup.Root>
    </RatingContext.Provider>
  );
};

RatingRoot.displayName = 'Rating';

export const RatingControl = <T extends ElementType = 'button'>(props: RatingControlProps<T>) => {
  const { asChild = false, children, value, ...rest } = props;
  const context = useContext(RatingContext);

  if (!context) {
    throw new Error(`Rating.Item must be used within Rating`);
  }

  if (value === undefined) {
    throw new Error('Rating.Item requires a `value` prop.');
  }

  const { activeValue, hoveredValue, readOnly, single, setHoveredValue } = context;

  const as = props.as ?? (readOnly ? 'span' : 'button');
  const displayValue = hoveredValue ?? activeValue;

  const checked = value === activeValue;
  const hovered = !readOnly && hoveredValue === value;

  const isFilled = displayValue ? value <= displayValue : checked;
  const filled = single ? checked : isFilled;

  if (readOnly) {
    return (
      <RadioGroup.Item asChild value={String(value)} {...rest}>
        <Element
          as={as as ElementType<any>}
          asChild={asChild}
          cssClassName="ex-rating-control"
          data-filled={filled}
          data-readonly="true"
        >
          {children}
        </Element>
      </RadioGroup.Item>
    );
  }

  return (
    <RadioGroup.Item
      asChild
      value={String(value)}
      checked={checked}
      onMouseEnter={() => setHoveredValue(value)}
      {...rest}
    >
      <Element
        as={as as ElementType<any>}
        asChild={asChild}
        cssClassName="ex-rating-control"
        data-filled={filled}
        data-hovered={hovered}
      >
        {children}
      </Element>
    </RadioGroup.Item>
  );
};

RatingControl.displayName = 'Rating.Control';

export const RatingIndicator = <T extends ElementType = 'div'>(props: RatingIndicatorProps<T>) => {
  const { as = 'div', children, forceMount = true, ...rest } = props;

  return (
    <RadioGroup.Indicator asChild forceMount={forceMount} {...rest}>
      <Element as={as as ElementType<any>} cssClassName="ex-rating-indicator" {...rest}>
        {children ?? (
          <svg className="ex-rating-indicator-svg" viewBox="0 0 24 24">
            <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
          </svg>
        )}
      </Element>
    </RadioGroup.Indicator>
  );
};

RatingIndicator.displayName = 'Rating.Indicator';
