'use client';

import { useCallback } from 'react';

import { ColorMode, UseColorModeOptions } from './use-color-mode.types';

function disableTransitions(callback: () => void) {
  const html = document.documentElement;

  html.classList.add('ex-disable-transitions');

  callback();

  void html.offsetHeight;

  requestAnimationFrame(() => {
    html.classList.remove('ex-disable-transitions');
  });
}

function getDomColorMode(): ColorMode {
  if (typeof document === 'undefined') return 'light';

  const html = document.documentElement;

  if (html.classList.contains('dark')) return 'dark';
  if (html.classList.contains('light')) return 'light';

  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

function applyDomColorMode(mode: ColorMode) {
  if (typeof document === 'undefined') return;

  disableTransitions(() => {
    const html = document.documentElement;

    html.classList.toggle('dark', mode === 'dark');
    html.classList.toggle('light', mode === 'light');
  });
}

export const useColorMode = (options: UseColorModeOptions = {}) => {
  const { useClassList = true, onChange } = options;

  const colorMode = getDomColorMode();

  const setColorMode = useCallback(
    (mode: ColorMode) => {
      if (useClassList) {
        applyDomColorMode(mode);
      }

      onChange?.(mode);
    },
    [onChange, useClassList],
  );

  const toggleColorMode = useCallback(() => {
    const next = getDomColorMode() === 'dark' ? 'light' : 'dark';

    setColorMode(next);
  }, [setColorMode]);

  return {
    colorMode,
    setColorMode,
    toggleColorMode,
  };
};
