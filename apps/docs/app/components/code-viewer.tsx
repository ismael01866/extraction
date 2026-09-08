'use client';

import { useEffect, useState } from 'react';

import { CopyButton } from './code-copy-button';

export function CodeViewer({
  preview,
  sourceUrl,
  lang = 'tsx',
  themes,
  words = [],
  enableCopy = true,
}: {
  preview: string;
  sourceUrl: string;
  lang?: 'tsx';
  themes?: { dark: string; light: string };
  words?: string[];
  enableCopy?: boolean;
}) {
  const [source, setSource] = useState<string | null>(null);
  const [html, setHtml] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    async function loadCode() {
      try {
        const response = await fetch(sourceUrl);
        if (!response.ok) throw new Error(`Failed to load code: ${response.status}`);

        const value = await response.text();
        if (cancelled) return;
        setSource(value);

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
        <pre aria-busy="true" className="overflow-x-auto" style={{ visibility: 'hidden' }}>
          <code>{source ?? preview}</code>
        </pre>
      )}
    </div>
  );
}
