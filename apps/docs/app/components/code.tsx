import { writeCodeSource } from '../utils/server-utils';
import { CodeViewer } from './code-viewer';

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
  const sourceUrl = writeCodeSource(children);
  const preview = children.length > 240 ? `${children.slice(0, 240)}\n...` : children;

  return (
    <CodeViewer
      enableCopy={enableCopy}
      lang={lang}
      preview={preview}
      sourceUrl={sourceUrl}
      themes={themes}
      words={words}
    />
  );
}
