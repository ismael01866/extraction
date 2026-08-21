'use client';

import { useEffect, useState } from 'react';

import { codeToHtml } from 'shiki';

import { highlightWords } from '../utils/shiki';
import { CopyButton } from './code-copy-button';

export function ClientCode({
  children = '',
  lang = 'tsx',
  themes,
  words = [],
  enableCopy = true,
}: {
  children?: string;
  lang?: 'tsx';
  themes?: {
    dark: string;
    light: string;
  };
  words?: string[];
  enableCopy?: boolean;
}) {
  const [html, setHtml] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    codeToHtml(children, {
      lang,
      themes: themes ?? {
        dark: 'github-dark-default',
        light: 'github-light-default',
      },
      transformers: words.length ? [highlightWords(words)] : undefined,
    }).then((result) => {
      if (!cancelled) setHtml(result);
    });

    return () => {
      cancelled = true;
    };
  }, [children, lang, themes?.dark, themes?.light, words.join(',')]);

  return (
    <div className="relative">
      {enableCopy && <CopyButton value={children} />}

      {html ? (
        <div dangerouslySetInnerHTML={{ __html: html }} />
      ) : (
        <pre className="overflow-x-auto">
          <code>{children}</code>
        </pre>
      )}
    </div>
  );
}
