'use client';

import React, { ElementType, useContext, useLayoutEffect, useMemo, useRef, useState } from 'react';

import './fit-text.css';

import { Element } from '../element';
import { FitTextContext } from './fit-text.context';
import { FitTextContentProps, FitTextProps, FitTextTargetProps } from './fit-text.types';

export const FitTextRoot = <T extends ElementType = 'svg'>(props: FitTextProps<T>) => {
  const { as = 'svg', children, ...rest } = props;

  const textRef = useRef<HTMLDivElement | null>(null);

  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [hasMeasured, setHasMeasured] = useState(false);

  const isCompound = React.Children.toArray(children).some(
    (child) => React.isValidElement(child) && child.type === FitTextContent,
  );

  useLayoutEffect(() => {
    const el = textRef.current;

    if (!el) return;

    const width = el.scrollWidth;
    const height = el.scrollHeight;

    if (!width || !height) return;

    setDimensions((prev) => {
      if (prev.width === width && prev.height === height) return prev;
      return { width, height };
    });

    setHasMeasured(true);
  }, [children]);

  const viewBox = hasMeasured ? `0 0 ${dimensions.width} ${dimensions.height}` : '0 0 100 100';

  const contextValue = useMemo(
    () => ({
      textRef,
      dimensions,
      hasMeasured,
    }),
    [textRef, dimensions, hasMeasured],
  );

  return (
    <FitTextContext.Provider value={contextValue}>
      <Element
        as={as as ElementType<any>}
        cssClassName="ex-fit-text"
        viewBox={viewBox}
        style={{ opacity: hasMeasured ? 1 : 0, ...rest.style }}
        {...rest}
      >
        {isCompound ? (
          children
        ) : (
          <FitTextContent>
            <FitTextTarget>{children}</FitTextTarget>
          </FitTextContent>
        )}
      </Element>
    </FitTextContext.Provider>
  );
};

FitTextRoot.displayName = 'FitText';

export const FitTextContent = <T extends ElementType = 'foreignObject'>(
  props: FitTextContentProps<T>,
) => {
  const { as = 'foreignObject', children, ...rest } = props;

  const context = useContext(FitTextContext);
  if (!context) throw new Error('FitText.Content must be used within FitText');

  const { dimensions, hasMeasured } = context;

  const width = hasMeasured ? dimensions.width : 5000;
  const height = hasMeasured ? dimensions.height : 5000;

  return (
    <Element
      as={as as ElementType<any>}
      cssClassName="ex-fit-text-content"
      width={width}
      height={height}
      {...rest}
    >
      {children}
    </Element>
  );
};

FitTextContent.displayName = 'FitText.Content';

export const FitTextTarget = <T extends ElementType = 'div'>(props: FitTextTargetProps<T>) => {
  const { as = 'div', children, ...rest } = props;

  const context = useContext(FitTextContext);
  if (!context) throw new Error('FitText.Target must be used within FitText');
  return (
    <Element
      as={as as ElementType<any>}
      cssClassName="ex-fit-text-target"
      ref={context.textRef}
      {...rest}
    >
      {children}
    </Element>
  );
};

FitTextTarget.displayName = 'FitText.Target';
