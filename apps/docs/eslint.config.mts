import * as mdx from 'eslint-plugin-mdx';
import prettier from 'eslint-plugin-prettier';
import pluginReact from 'eslint-plugin-react';
import { defineConfig } from 'eslint/config';
import globals from 'globals';
import tseslint from 'typescript-eslint';

import js from '@eslint/js';
import json from '@eslint/json';
import markdown from '@eslint/markdown';

export default defineConfig([
  {
    ignores: [
      'node_modules/**',
      '.next/**',
      'dist/**',
      'public/**',
      '**/next-env.d.ts',
    ],
  },
  {
    files: ['**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    ...js.configs.recommended,
    languageOptions: {
      globals: { ...globals.browser, ...globals.node },
      parserOptions: {
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
  ...tseslint.configs.recommended,
  {
    files: ['**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    ...pluginReact.configs.flat.recommended,
    settings: {
      react: {
        version: 'detect',
      },
    },
    rules: {
      ...pluginReact.configs.flat.recommended.rules,
      'react/prop-types': 'off',
      'react/react-in-jsx-scope': 'off',
    },
  },
  {
    files: ['**/*.json'],
    ...json.configs.recommended,
    rules: {
      '@typescript-eslint/no-unused-expressions': 'off',
    },
  },
  {
    files: ['**/*.jsonc'],
    ...json.configs.recommended,
    language: 'json/jsonc',
  },
  ...markdown.configs.recommended,
  {
    files: ['**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx,mdx}'],
    plugins: { prettier },
    rules: { 'prettier/prettier': 'error' },
  },
  {
    files: ['**/*.mdx'],
  },
  {
    files: ['**/*.mdx'],
    ...mdx.flat,
    plugins: {
      ...mdx.flat.plugins,
      react: pluginReact,
    },
    rules: {
      '@typescript-eslint/no-unused-vars': [
        'error',
        { varsIgnorePattern: '^React$' },
      ],
      '@typescript-eslint/no-unused-expressions': 'off',
      'react/jsx-uses-vars': 'error',
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',
    },
  },
]);
