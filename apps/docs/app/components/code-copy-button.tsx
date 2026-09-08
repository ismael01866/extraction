'use client';

import { useState } from 'react';

export function CopyButton({ value, sourceUrl }: { value?: string; sourceUrl?: string }) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      const source = sourceUrl ? await fetch(sourceUrl).then((response) => response.text()) : value;

      if (source === undefined) throw new Error('No code source available');
      await navigator.clipboard.writeText(source);

      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (error) {
      console.error('Failed to copy code:', error);
    }
  }

  return (
    <button
      type="button"
      onClick={handleCopy}
      className="absolute right-3 top-3 z-10 rounded-md border border-white/10 bg-black/60 px-2 py-1 text-xs text-white backdrop-blur transition hover:bg-black/80"
    >
      {copied ? 'Copied' : 'Copy'}
    </button>
  );
}
