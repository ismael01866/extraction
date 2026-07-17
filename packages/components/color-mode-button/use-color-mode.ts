import { useCallback } from 'react';

import { useTheme } from 'next-themes';

type ColorMode = 'light' | 'dark';

type UseColorModeOptions = {
  useNextThemes?: boolean;
  useNativeClassList?: boolean;
  propagateToIFrame?: boolean;
};

function applyColorModeToIframe(iframe: HTMLIFrameElement, mode: ColorMode) {
  const doc = iframe.contentDocument;
  if (!doc) return;

  const html = doc.documentElement;
  if (!html) return;

  const isDark = mode === 'dark';

  html.classList.toggle('dark', isDark);
  html.classList.toggle('light', !isDark);
}

function propagateColorMode(mode: ColorMode) {
  document.querySelectorAll('iframe').forEach((iframe) => {
    try {
      applyColorModeToIframe(iframe, mode);
    } catch {}
  });
}

function isColorMode(value: string | undefined): value is ColorMode {
  return value === 'light' || value === 'dark';
}

function getDomColorMode(): ColorMode {
  if (typeof globalThis === 'undefined') return 'light';
  const html = document.documentElement;

  if (html.classList.contains('dark')) return 'dark';
  if (html.classList.contains('light')) return 'light';

  return globalThis.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

function applyDomColorMode(nextMode: ColorMode) {
  if (typeof document === 'undefined') return;

  const html = document.documentElement;
  const isDark = nextMode === 'dark';

  html.classList.toggle('dark', isDark);
  html.classList.toggle('light', !isDark);
}

export function useColorMode() {
  const { resolvedTheme, setTheme } = useTheme();

  const toggleColorMode = useCallback(() => {
    const currentMode = isColorMode(resolvedTheme) ? resolvedTheme : getDomColorMode();

    const nextMode = currentMode === 'dark' ? 'light' : 'dark';

    setTheme(nextMode);
    applyDomColorMode(nextMode);
  }, [resolvedTheme, setTheme]);

  return { toggleColorMode };
}

export function useColorModeWithOptions(options: UseColorModeOptions) {
  const { resolvedTheme, setTheme } = useTheme();
  const { useNextThemes = true, useNativeClassList = true, propagateToIFrame = false } = options;

  const toggleColorMode = useCallback(() => {
    const currentMode = isColorMode(resolvedTheme) ? resolvedTheme : getDomColorMode();

    const nextMode = currentMode === 'dark' ? 'light' : 'dark';

    if (useNextThemes) {
      setTheme(nextMode);
    }

    if (useNativeClassList) {
      applyDomColorMode(nextMode);
    }

    if (propagateToIFrame) {
      propagateColorMode(nextMode);
    }
  }, [resolvedTheme, setTheme, useNextThemes, useNativeClassList]);

  return { toggleColorMode };
}
