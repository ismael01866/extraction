'use client';

import type { ButtonHTMLAttributes } from 'react';
import * as React from 'react';

import { cn } from 'extraction-ui-utils';

import { useColorModeWithOptions } from './use-color-mode';

type ColorModeButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  useNextThemes?: boolean;
  useNativeClassList?: boolean;
  propagateToIFrame?: boolean;
};

export const ColorModeButton = (props: ColorModeButtonProps) => {
  const {
    children,
    className,
    onClick,
    useNextThemes = false,
    useNativeClassList = false,
    propagateToIFrame = false,
    ...rest
  } = props;
  const { toggleColorMode } = useColorModeWithOptions({
    useNextThemes,
    useNativeClassList,
    propagateToIFrame,
  });

  const classNames = cn('ex-color-mode-button', className);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    toggleColorMode();
    onClick?.(e);
  };

  return (
    <button className={classNames} onClick={handleClick} {...rest}>
      {children ?? (
        <svg className="ex-color-mode-icon" viewBox="0 0 24 24">
          <path d="M21 12.79A9 9 0 1 1 11.21 3a7 7 0 0 0 9.79 9.79Z" />
        </svg>
      )}
    </button>
  );
};

ColorModeButton.displayName = 'ColorModeButton';
