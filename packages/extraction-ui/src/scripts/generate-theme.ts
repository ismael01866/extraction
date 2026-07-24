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
  800: '55%',
  900: '40%',
  950: '30%',
};

function getMixBase(shade: string) {
  const num = Number(shade);
  return num <= 500 ? 'white' : 'black';
}

// function getForegroundColor(shade: string, name: string) {
//   const num = Number(shade);

//   return num <= 300
//     ? `color-mix(in oklch, var(--color-${name}) 50%, black)`
//     : `color-mix(in oklch, var(--color-${name}) 2%, white)`;
// }

/*
 * PALETTE + SHADES */

function generatePaletteVars() {
  const vars: Record<string, string> = {};

  for (const [name, base] of Object.entries(colorPalette)) {
    vars[`--color-${name}`] = base;
    // vars[`--color-${name}-foreground`] = `color-mix(in oklch, var(--color-${name}) 2%, white)`;

    for (const shade of Object.keys(shades)) {
      const mixBase = getMixBase(shade);

      if (shade === '500') {
        vars[`--color-${name}-500`] = `var(--color-${name})`;
      } else {
        vars[`--color-${name}-${shade}`] =
          `color-mix(in oklch, var(--color-${name}) ${themePercentages[shade as unknown as keyof typeof themePercentages]}, ${mixBase})`;
      }

      // vars[`--color-${name}-${shade}-foreground`] = getForegroundColor(shade, name);
    }
  }

  return vars;
}

/*
 * CSS OUTPUT */

function main() {
  const css =
    `@theme {\n` +
    Object.entries(generatePaletteVars())
      .map(([k, v]) => `  ${k}: ${v};`)
      .join('\n') +
    `\n}\n`;

  const outDir = path.resolve('src/css');
  const outPath = path.join(outDir, 'theme.css');

  fs.mkdirSync(outDir, { recursive: true });
  fs.writeFileSync(outPath, css);

  console.log(`✅ Generated theme CSS at ${outPath}`);
}

main();
