'use client';

import React, {
  CSSProperties,
  ElementType,
  useCallback,
  useContext,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from 'react';

import './segmented-control.css';

import { Element } from '../element';
import { SegmentedControlContext } from './segmented-control.context';
import {
  SegmentedControlContextValue,
  SegmentedControlIndicatorProps,
  SegmentedControlItemProps,
  SegmentedControlItemsProps,
  SegmentedControlProps,
} from './segmented-control.types';
import { getFirstItemValue } from './segmented-control.utils';

import * as RadioGroup from '@radix-ui/react-radio-group';

export const SegmentedControlRoot = <T extends ElementType = 'div'>(
  props: SegmentedControlProps<T>,
) => {
  const {
    as = 'div',
    asChild = false,
    children,
    defaultValue,
    items,
    name,
    orientation = 'horizontal',
    readOnly = false,
    value,
    onValueChange,
    ...rest
  } = props;

  const [internalValue, setInternalValue] = useState(
    () => defaultValue ?? getFirstItemValue(items, children),
  );
  const [indicator, setIndicator] = useState<CSSProperties>({ opacity: 0 });

  const [ready, setReady] = useState(false);

  const rootRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<Record<string, HTMLElement | null>>({});

  const isControlled = value !== undefined;
  const activeValue = isControlled ? value : internalValue;

  const isCompound = React.Children.toArray(children).some(
    (child) =>
      React.isValidElement(child) &&
      (child.type === SegmentedControlItem || child.type === SegmentedControlItems),
  );

  const setActiveValue = useCallback(
    (nextValue: string) => {
      if (readOnly) return;

      if (!isControlled) {
        setInternalValue(nextValue);
      }

      onValueChange?.(nextValue);
    },
    [isControlled, onValueChange, readOnly],
  );

  const measure = useCallback(() => {
    const container = rootRef.current;
    if (!container || activeValue == null) return;

    const node = itemRefs.current[String(activeValue)];
    if (!node) return;

    setIndicator({
      width: node.offsetWidth,
      height: node.offsetHeight,
      opacity: 1,
      transform: `translate(${node.offsetLeft}px, ${node.offsetTop}px)`,
    });
  }, [activeValue]);

  useLayoutEffect(() => {
    measure();
  }, [measure, orientation, children]);

  useEffect(() => {
    const raf = requestAnimationFrame(() => {
      measure();
      setReady(true);
    });

    return () => {
      cancelAnimationFrame(raf);
    };
  }, [measure]);

  const context: SegmentedControlContextValue = useMemo(
    () => ({
      activeValue,
      setActiveValue,
      orientation,
      readOnly,
      indicator,
      ready,
      measure,
      itemRefs,
    }),
    [activeValue, setActiveValue, orientation, readOnly, indicator, ready, measure],
  );

  return (
    <SegmentedControlContext.Provider value={context}>
      <RadioGroup.Root
        value={String(activeValue ?? '')}
        onValueChange={setActiveValue}
        orientation={orientation}
        aria-readonly={readOnly || undefined}
        asChild
        {...rest}
      >
        <Element
          as={as as ElementType<any>}
          ref={rootRef}
          asChild={asChild}
          cssClassName="ex-segmented-control"
          data-orientation={orientation}
          data-readonly={readOnly || undefined}
        >
          {isCompound || !items ? (
            children
          ) : (
            <>
              <SegmentedControlIndicator />
              <SegmentedControlItems items={items} />
            </>
          )}
        </Element>
      </RadioGroup.Root>
      {name ? <input type="hidden" name={name} value={String(activeValue ?? '')} /> : null}
    </SegmentedControlContext.Provider>
  );
};

SegmentedControlRoot.displayName = 'SegmentedControl';

export const SegmentedControlItem = <T extends ElementType = 'button'>(
  props: SegmentedControlItemProps<T>,
) => {
  const { asChild = false, children, value, ...rest } = props;

  const context = useContext(SegmentedControlContext);

  if (!context) {
    throw new Error('SegmentedControl.Item must be used within SegmentedControl');
  }

  const { activeValue, itemRefs, measure, readOnly } = context;

  const as = props.as ?? (readOnly ? 'span' : 'button');

  const stringValue = String(value);
  const isSelected = stringValue === String(activeValue);

  const setItemRef = useCallback(
    (node: HTMLElement | null) => {
      itemRefs.current[stringValue] = node;

      if (node) {
        measure();
      }
    },
    [stringValue, itemRefs, measure],
  );

  return (
    <RadioGroup.Item value={stringValue} asChild {...rest}>
      <Element
        as={as as ElementType<any>}
        asChild={asChild}
        cssClassName="ex-segmented-control-item"
        ref={setItemRef}
        data-state={isSelected ? 'checked' : 'unchecked'}
        data-readonly={readOnly || undefined}
      >
        {children}
      </Element>
    </RadioGroup.Item>
  );
};

SegmentedControlItem.displayName = 'SegmentedControl.Item';

export const SegmentedControlItems = (props: SegmentedControlItemsProps) => {
  const { items, ...rest } = props;

  return (
    <>
      {items.map((item) => {
        const { value, label } = typeof item === 'string' ? { value: item, label: item } : item;

        return (
          <SegmentedControlItem key={value} value={value} {...rest}>
            {label}
          </SegmentedControlItem>
        );
      })}
    </>
  );
};

SegmentedControlItems.displayName = 'SegmentedControl.Items';

export const SegmentedControlIndicator = <T extends ElementType = 'div'>(
  props: SegmentedControlIndicatorProps<T>,
) => {
  const { as = 'div', asChild = false, style, ...rest } = props;

  const context = useContext(SegmentedControlContext);

  if (!context) {
    throw new Error('SegmentedControl.Indicator must be used within SegmentedControl');
  }

  const { indicator, ready } = context;

  return (
    <Element
      as={as as ElementType<any>}
      asChild={asChild}
      cssClassName="ex-segmented-control-indicator"
      aria-hidden
      style={{
        ...indicator,
        ...(ready ? {} : { transition: 'none' }),
        ...style,
      }}
      {...rest}
    />
  );
};

SegmentedControlIndicator.displayName = 'SegmentedControl.Indicator';
