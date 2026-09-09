'use client';

import { useEffect, useState } from 'react';

import { Skeleton } from 'extraction-ui';

import { CopyButton } from './code-copy-button';

export function CodeViewer({
  sourceUrl,
  lang = 'tsx',
  themes,
  words = [],
  enableCopy = true,
}: {
  sourceUrl: string;
  lang?: 'tsx';
  themes?: { dark: string; light: string };
  words?: string[];
  enableCopy?: boolean;
}) {
  const [html, setHtml] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    async function loadCode() {
      try {
        const response = await fetch(sourceUrl);
        if (!response.ok) throw new Error(`Failed to load code: ${response.status}`);

        const value = await response.text();
        if (cancelled) return;

        const [{ codeToHtml }, { highlightWords }] = await Promise.all([
          import('shiki'),
          import('../utils/shiki'),
        ]);
        if (cancelled) return;

        const highlighted = await codeToHtml(value, {
          lang,
          themes: themes ?? {
            dark: 'github-dark-default',
            light: 'github-light-default',
          },
          transformers: words.length ? [highlightWords(words)] : undefined,
        });

        if (!cancelled) setHtml(highlighted);
      } catch (error) {
        if (!cancelled) console.error('Failed to load code:', error);
      }
    }

    loadCode();

    return () => {
      cancelled = true;
    };
  }, [lang, sourceUrl, themes?.dark, themes?.light, words.join(',')]);

  return (
    <div className="relative">
      {enableCopy && <CopyButton sourceUrl={sourceUrl} />}

      {html ? (
        <div dangerouslySetInnerHTML={{ __html: html }} />
      ) : (
        <div aria-busy="true" aria-label="Loading code" className="space-y-2 p-4">
          <Skeleton className="h-4 w-1/2" />
          <Skeleton className="h-4 w-3/4" />
        </div>
      )}
    </div>
  );
}
