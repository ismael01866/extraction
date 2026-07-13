'use client';

import { useCallback, useState } from 'react';

import ShikiHighlighter from 'react-shiki';
import type { BundledLanguage } from 'shiki';

import { highlightWords } from '../utils/shiki';

export function Code({
  children = '',
  lang = 'tsx',
  themes,
  words = [],
  enableCopy = true,
  ...rest
}: {
  children?: string;
  lang?: BundledLanguage;
  themes?: {
    dark: string;
    light: string;
  };
  words?: string[];
  enableCopy?: boolean;
}) {
  const [copied, setCopied] = useState(false);

  const theme = themes || {
    dark: 'github-dark-default',
    light: 'github-light-default',
  };

  const handleCopy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(children);

      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (err) {
      console.error('Failed to copy code:', err);
    }
  }, [children]);

  return (
    <div className="relative">
      {enableCopy && (
        <button
          type="button"
          onClick={handleCopy}
          className="absolute top-3 right-3 z-10 rounded-md border border-white/10 bg-black/60 px-2 py-1 text-xs text-white backdrop-blur transition hover:bg-black/80"
        >
          {copied ? 'Copied' : 'Copy'}
        </button>
      )}

      <ShikiHighlighter
        language={lang}
        theme={theme}
        transformers={[...(words.length > 0 ? [highlightWords(words)] : [])]}
        {...rest}
      >
        {children}
      </ShikiHighlighter>
    </div>
  );
}
