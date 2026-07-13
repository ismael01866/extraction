module.exports = {
  semi: true,
  singleQuote: true,
  trailingComma: 'all',
  tabWidth: 2,
  useTabs: false,
  endOfLine: 'auto',
  printWidth: 80,
  proseWrap: 'never',
  plugins: [
    '@trivago/prettier-plugin-sort-imports',
    'prettier-plugin-multiline-arrays',
    'prettier-plugin-tailwindcss',
  ],
  multilineArraysWrapThreshold: 4,
  importOrder: [
    '^react$',
    '^next/(.*)$',
    '^@/.*$',
    '^[a-zA-Z]',
    '^.+.css$',
    '^[./]',
    '^[^w]',
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  overrides: [
    {
      files: '*.mdx',
      options: {
        jsxSingleQuote: true,
      },
    },
    {
      files: '*.json',
      options: {
        tabWidth: 2,
      },
    },
    {
      files: '*.{jsx,tsx}',
    },
  ],
};
