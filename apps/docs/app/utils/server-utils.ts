import fs from 'node:fs';
import path from 'node:path';

export function getBlockSource(relativePath: string) {
  return fs
    .readFileSync(path.join(process.cwd(), relativePath), 'utf8')
    .trimEnd();
}
