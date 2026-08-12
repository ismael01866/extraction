import { codeToHtml } from 'shiki';

import { highlightWords } from '../utils/shiki';
import { CopyButton } from './code-copy-button';

export async function Code({
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
  const html = await codeToHtml(children, {
    lang,
    themes: themes ?? {
      dark: 'github-dark-default',
      light: 'github-light-default',
    },
    transformers: words.length ? [highlightWords(words)] : undefined,
  });

  return (
    <div className="relative">
      {enableCopy && <CopyButton value={children} />}

      <div dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  );
}
