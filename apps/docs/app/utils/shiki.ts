import { ShikiTransformer } from 'shiki';

const escapeRegExp = (value: string) =>
  value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

export const highlightWords = (words: string[]): ShikiTransformer => ({
  name: 'highlight-words',

  span(node, _line, _col, _lineElement, token) {
    const matches = words.filter((word) => {
      const escaped = escapeRegExp(word);

      if (word.startsWith('-')) {
        return new RegExp(String.raw`[^\s]*${escaped}\b`).test(token.content);
      }

      return new RegExp(String.raw`\b${escaped}\b`).test(token.content);
    });

    if (matches.length === 0) return;

    const escapedMatches = matches.map((word) => {
      const escaped = escapeRegExp(word);

      if (word.startsWith('-')) {
        return String.raw`[^\s]*${escaped}\b`;
      }

      return String.raw`\b${escaped}\b`;
    });

    const regex = new RegExp(`(${escapedMatches.join('|')})`, 'g');

    node.children = token.content
      .split(regex)
      .filter(Boolean)
      .map((part) => {
        const isMatch = matches.some((word) => {
          const escaped = escapeRegExp(word);

          if (word.startsWith('-')) {
            return new RegExp(String.raw`^[^\s]*${escaped}\b$`).test(part);
          }

          return new RegExp(String.raw`^\b${escaped}\b$`).test(part);
        });

        if (isMatch) {
          return {
            type: 'element',
            tagName: 'span',
            properties: {
              class: 'shiki-highlight',
            },
            children: [
              {
                type: 'text',
                value: part,
              },
            ],
          };
        }

        return {
          type: 'text',
          value: part,
        };
      });
  },
});
