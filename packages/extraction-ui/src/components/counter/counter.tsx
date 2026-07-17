'use client';

import React, { ElementType, useEffect, useRef, useState } from 'react';

import './counter.css';

import { Element } from '../element';
import { CounterProps } from './counter.types';

export const Counter = <T extends ElementType = 'span'>(props: CounterProps<T>) => {
  const {
    as = 'span',
    value,
    initialValue = 0,
    duration = 1000,
    delay = 0,
    decimals = 0,
    formatter,
    ...rest
  } = props;

  const frameRef = useRef<ReturnType<typeof requestAnimationFrame> | null>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const displayValueRef = useRef(initialValue);
  const [displayValue, setDisplayValue] = useState(initialValue);

  useEffect(() => {
    const startValue = displayValueRef.current;
    const endValue = value;

    const cleanup = () => {
      if (frameRef.current !== null) cancelAnimationFrame(frameRef.current);
      if (timeoutRef.current !== null) clearTimeout(timeoutRef.current);
    };

    cleanup();

    const startAnimation = () => {
      const startTime = performance.now();

      const animate = (now: number) => {
        const progress = Math.min((now - startTime) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        const current = startValue + (endValue - startValue) * eased;

        displayValueRef.current = current;
        setDisplayValue(current);

        if (progress < 1) {
          frameRef.current = requestAnimationFrame(animate);
        } else {
          setDisplayValue(endValue);
          displayValueRef.current = endValue;
        }
      };

      frameRef.current = requestAnimationFrame(animate);
    };

    if (delay > 0) {
      timeoutRef.current = setTimeout(startAnimation, delay);
    } else {
      startAnimation();
    }

    return cleanup;
  }, [value, duration, delay]);

  const content = formatter ? formatter(displayValue) : displayValue.toFixed(decimals);

  return (
    <Element as={as as ElementType<any>} cssClassName="ex-counter" {...rest}>
      {content}
    </Element>
  );
};

Counter.displayName = 'Counter';
