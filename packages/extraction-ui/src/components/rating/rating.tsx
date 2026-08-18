'use client';

import React from 'react';

import './rating.css';

import { Element } from '../element';
import { RatingContext } from './rating.context';
import {
  RatingContextValue,
  RatingControlProps,
  RatingIndicatorProps,
  RatingProps,
} from './rating.types';
import { getFill, getFractionFromPointer } from './rating.utils';

import * as RadioGroup from '@radix-ui/react-radio-group';

export const RatingRoot = <T extends React.ElementType = 'div'>(props: RatingProps<T>) => {
  const {
    as = 'div',
    asChild = false,
    children,
    count,
    defaultValue,
    fractions,
    name,
    readOnly = false,
    single = false,
    value,
    onValueChange,
    ...rest
  } = props;

  const [isInForm, setIsInForm] = React.useState(false);

  const [internalValue, setInternalValue] = React.useState(defaultValue);
  const [hoveredValue, setHoveredValue] = React.useState<string | null>(null);

  const rootRef = React.useRef<HTMLDivElement>(null);

  const isControlled = value !== undefined;
  const activeValue = isControlled ? value : internalValue;

  React.useEffect(() => {
    const element = rootRef.current;
    if (!element) return;

    setIsInForm(element.closest('form') !== null);
  }, []);

  const setActiveValue = React.useCallback(
    (next: string = '') => {
      if (!isControlled) {
        setInternalValue(next);
      }

      setHoveredValue(null);
      onValueChange?.(next);
    },
    [isControlled, onValueChange],
  );

  const context: RatingContextValue = React.useMemo(
    () => ({
      activeValue,
      fractions,
      readOnly,
      single,
      hoveredValue,
      setHoveredValue,
      setActiveValue,
    }),
    [activeValue, fractions, readOnly, single, hoveredValue, setActiveValue],
  );

  const items = React.useMemo(() => {
    if (!count) {
      if (!children) {
        throw new Error('Rating requires either a `count` prop or explicit children elements.');
      }

      return children;
    }

    if (children) {
      const childArray = React.Children.toArray(children);
      const template = childArray.find(React.isValidElement) as
        React.ReactElement<RatingControlProps<any>> | undefined;

      if (!template) return null;

      return Array.from({ length: count }, (_, index) => {
        const itemValue = index + 1;

        return React.cloneElement(template, {
          key: itemValue,
          value: String(itemValue),
          'aria-label': template.props['aria-label'] ?? `${itemValue}`,
        });
      });
    }

    return Array.from({ length: count }, (_, index) => {
      const itemValue = index + 1;

      return (
        <RatingControl key={itemValue} value={String(itemValue)} aria-label={`${itemValue}`}>
          <RatingIndicator />
        </RatingControl>
      );
    });
  }, [children, count]);

  const rating = (
    <RadioGroup.Root
      value={String(activeValue ?? '')}
      onValueChange={setActiveValue}
      onMouseLeave={() => setHoveredValue(null)}
      asChild
      {...rest}
    >
      <Element as={as as React.ElementType<any>} asChild={asChild} cssClassName="ex-rating">
        {items}
      </Element>
    </RadioGroup.Root>
  );

  return (
    <RatingContext.Provider value={context}>
      <div ref={rootRef} style={{ display: 'contents' }}>
        {rating}
        {isInForm ? <input type="hidden" name={name} value={String(activeValue ?? '')} /> : null}
      </div>
    </RatingContext.Provider>
  );
};

RatingRoot.displayName = 'Rating';

export const RatingControl = <T extends React.ElementType = 'button'>(
  props: RatingControlProps<T>,
) => {
  const { asChild = false, children, style, value, ...rest } = props;

  const context = React.useContext(RatingContext);

  if (!context) {
    throw new Error('Rating.Control must be used within Rating');
  }

  if (value === undefined) {
    throw new Error('Rating.Control requires a `value` prop.');
  }

  const {
    activeValue,
    hoveredValue,
    fractions,
    readOnly,
    single,
    setHoveredValue,
    setActiveValue,
  } = context;

  const as = props.as ?? (readOnly ? 'span' : 'button');

  const displayValue = hoveredValue ?? activeValue ?? '0';
  const numericValue = Number(value);
  const numericDisplayValue = Number(displayValue);

  const itemStart = numericValue - 1;

  const fill = getFill(numericDisplayValue, numericValue, fractions);
  const checked = value === activeValue;

  const singleFilledState = hoveredValue != null ? hoveredValue === value : checked;
  const nonFractionsFilled = single ? singleFilledState : fill > 0;

  const filled = fractions ? fill > 0 : nonFractionsFilled;

  const handleMouseMove = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (!fractions) {
      setHoveredValue(String(value));
      return;
    }

    const fraction = getFractionFromPointer(event, fractions);
    setHoveredValue(String(itemStart + fraction));
  };

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (!fractions) return;

    event.preventDefault();
    event.stopPropagation();

    if (event.detail === 0) {
      setActiveValue(String(value));
      return;
    }

    const fraction = getFractionFromPointer(event, fractions);
    setActiveValue(String(itemStart + fraction));
  };

  const controlProps = {
    ...rest,
    asChild: true,
    value: String(value),
    ...(readOnly
      ? {}
      : {
          onClick: (event: React.MouseEvent<HTMLButtonElement>) => {
            handleClick(event);
            rest.onClick?.(event);
          },
          onMouseMove: (event: React.MouseEvent<HTMLButtonElement>) => {
            handleMouseMove(event);
            rest.onMouseMove?.(event);
          },
        }),
  };

  return (
    <RadioGroup.Item {...controlProps}>
      <Element
        as={as as React.ElementType<any>}
        asChild={asChild}
        cssClassName="ex-rating-control"
        data-filled={filled}
        data-readonly={readOnly}
        style={{
          ...style,
          ...(fractions ? { '--ex-fill': fill } : {}),
        }}
      >
        {children}
      </Element>
    </RadioGroup.Item>
  );
};

RatingControl.displayName = 'Rating.Control';

export const RatingIndicator = <T extends React.ElementType = 'div'>(
  props: RatingIndicatorProps<T>,
) => {
  const { as = 'div', children, forceMount = true, ...rest } = props;

  const content = children ?? (
    <svg className="ex-rating-indicator-svg" viewBox="0 0 24 24">
      <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0 .611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
    </svg>
  );

  const clone = (className: string) => {
    if (React.isValidElement<{ className?: string }>(content)) {
      return React.cloneElement(content, {
        className: [content.props.className, className].filter(Boolean).join(' '),
      });
    }

    return <span className={className}>{content}</span>;
  };

  return (
    <RadioGroup.Indicator asChild forceMount={forceMount}>
      <Element as={as as React.ElementType<any>} cssClassName="ex-rating-indicator" {...rest}>
        {clone('ex-rating-indicator-bg')}
        {clone('ex-rating-indicator-fg')}
      </Element>
    </RadioGroup.Indicator>
  );
};

RatingIndicator.displayName = 'Rating.Indicator';
