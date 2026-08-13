'use client';

import React, { ElementType, useContext, useMemo, useState } from 'react';

import './rating.css';

import { Element } from '../element';
import { RatingContext } from './rating.context';
import { RatingContextValue, RatingIconProps, RatingItemProps, RatingProps } from './rating.types';

import * as RadioGroup from '@radix-ui/react-radio-group';

export const RatingRoot = <T extends ElementType = 'div'>(props: RatingProps<T>) => {
  const {
    as = 'div',
    asChild = false,
    children,
    defaultValue = 0,
    readOnly = false,
    value,
    onValueChange,
    ...rest
  } = props;

  const [internalValue, setInternalValue] = useState(defaultValue);
  const [hoveredValue, setHoveredValue] = useState<number | null>(null);

  const isControlled = value !== undefined;
  const activeValue = isControlled ? value : internalValue;

  const handleValueChange = (next: string) => {
    const numeric = Number(next);

    if (!isControlled) {
      setInternalValue(numeric);
    }

    onValueChange?.(numeric);
  };

  const context: RatingContextValue = useMemo(
    () => ({
      activeValue,
      hoveredValue,
      readOnly,
      setHoveredValue,
    }),
    [activeValue, hoveredValue, readOnly, setHoveredValue],
  );

  // if (readOnly) {
  //   return (
  //     <RatingContext.Provider value={context}>
  //       <Element
  //         as={as as ElementType<any>}
  //         asChild={asChild}
  //         cssClassName="ex-rating"
  //         role="img"
  //         {...rest}
  //       >
  //         {children}
  //       </Element>
  //     </RatingContext.Provider>
  //   );
  // }

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
          {children}
        </Element>
      </RadioGroup.Root>
    </RatingContext.Provider>
  );
};

RatingRoot.displayName = 'Rating';

export const RatingItem = <T extends ElementType = 'button'>(props: RatingItemProps<T>) => {
  const { asChild = false, children, value, ...rest } = props;

  const context = useContext(RatingContext);

  if (!context) {
    throw new Error(`Rating.Item must be used within Rating`);
  }

  const { activeValue, hoveredValue, readOnly, setHoveredValue } = context;

  const as = props.as ?? (readOnly ? 'span' : 'button');
  const displayValue = hoveredValue ?? activeValue;
  const filled = value <= displayValue;
  const hovered = !readOnly && hoveredValue !== null && value <= hoveredValue;

  // if (readOnly) {
  //   return (
  //     <Element
  //       as={as as ElementType<any>}
  //       asChild={asChild}
  //       cssClassName="ex-rating-item"
  //       data-filled={filled}
  //       data-readonly="true"
  //       {...rest}
  //     >
  //       {children}
  //     </Element>
  //   );
  // }

  return (
    <RadioGroup.Item
      asChild
      value={String(value)}
      onMouseEnter={() => setHoveredValue(value)}
      {...rest}
    >
      <Element
        as={as as ElementType<any>}
        asChild={asChild}
        cssClassName="ex-rating-item"
        data-filled={filled}
        data-hovered={hovered}
      >
        {children}
      </Element>
    </RadioGroup.Item>
  );
};

RatingItem.displayName = 'Rating.Item';

export const RatingIcon = <T extends ElementType = 'div'>(props: RatingIconProps<T>) => {
  const { as = 'div', children, ...rest } = props;

  return (
    <Element as={as as ElementType<any>} cssClassName="ex-rating-icon" {...rest}>
      {children ?? (
        <svg className="ex-rating-icon-svg" viewBox="0 0 24 24">
          <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
        </svg>
      )}
    </Element>
  );
};

RatingIcon.displayName = 'Rating.Icon';
