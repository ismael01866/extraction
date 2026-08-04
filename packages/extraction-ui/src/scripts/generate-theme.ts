/* eslint-disable no-console */
import fs from 'node:fs';
import path from 'node:path';

import { colorPalette, shades } from '../tokens';

const themePercentages = {
  50: '10%',
  100: '20%',
  200: '35%',
  300: '50%',
  400: '75%',
  500: '100%',
  600: '85%',
  700: '70%',
  800: '60%',
  900: '50%',
  950: '45%',
};

function getMixBase(shade: string) {
  const num = Number(shade);
  return num <= 500 ? 'white' : 'black';
}

/*
 * PALETTE + SHADES */

function generatePaletteVars(colors: Record<string, string>) {
  const vars: Record<string, string> = {};

  for (const [name, base] of Object.entries(colors)) {
    vars[`--color-${name}`] = base;

    for (const shade of Object.keys(shades)) {
      const mixBase = getMixBase(shade);

      if (shade === '500') {
        vars[`--color-${name}-500`] = `var(--color-${name})`;
      } else {
        vars[`--color-${name}-${shade}`] =
          `color-mix(in oklch, var(--color-${name}) ${themePercentages[shade as unknown as keyof typeof themePercentages]}, ${mixBase})`;
      }
    }
  }

  return vars;
}

/*
 * CSS OUTPUT */

function main() {
  const css =
    `@theme {\n` +
    Object.entries(generatePaletteVars(colorPalette))
      .map(([k, v]) => `  ${k}: ${v};`)
      .join('\n') +
    `\n}\n`;

  // const extra =
  //   `@theme {\n` +
  //   Object.entries(generatePaletteVars(extraColorPalette))
  //     .map(([k, v]) => `  ${k}: ${v};`)
  //     .join('\n') +
  //   `\n}\n`;

  const outDir = path.resolve('src/css');

  fs.mkdirSync(outDir, { recursive: true });

  fs.writeFileSync(path.join(outDir, 'theme.css'), css);
  // fs.writeFileSync(path.join(outDir, 'palettes.css'), extra);

  console.log(`✅ Generated theme CSS`);
}

main();
