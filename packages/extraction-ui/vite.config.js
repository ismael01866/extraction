import react from '@vitejs/plugin-react';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import preserveDirectives from 'rollup-preserve-directives';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  plugins: [
    react({
      jsxRuntime: 'automatic',
    }),
    dts({
      include: ['src'],
      exclude: ['src/**/*.test.ts', 'src/**/*.test.tsx'],
      rollupTypes: false,
      entryRoot: 'src',
      outputDir: 'dist',
      skipDiagnostics: false,
    }),
  ],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/setupTests.ts',
    include: ['**/*.{test,spec}.{ts,tsx}'],
  },
  build: {
    lib: {
      entry: {
        index: path.resolve(__dirname, 'src/index.ts'),
        client: path.resolve(__dirname, 'src/client.ts'),
        styles: path.resolve(__dirname, 'src/index.css'),
        inline: path.resolve(__dirname, 'src/css/inline.css'),
      },
      formats: ['es'],
    },
    rollupOptions: {
      plugins: [preserveDirectives()],
      external: ['react', 'react-dom', 'react/jsx-runtime', 'radix-ui'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
        preserveModules: true,
        preserveModulesRoot: 'src',
      },
    },
    cssCodeSplit: true,
    sourcemap: true,
    emptyOutDir: true,
  },
});
