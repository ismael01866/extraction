import { createHash } from 'node:crypto';
import fs from 'node:fs';
import path from 'node:path';

export function getBlockSource(relativePath: string) {
  return fs.readFileSync(path.join(process.cwd(), relativePath), 'utf8').trimEnd();
}

export function writeCodeSource(source: string) {
  const id = createHash('sha256').update(source).digest('hex').slice(0, 16);
  const directory = path.join(process.cwd(), 'public', '_code');
  const filePath = path.join(directory, `${id}.txt`);

  fs.mkdirSync(directory, { recursive: true });
  if (!fs.existsSync(filePath)) fs.writeFileSync(filePath, source);

  return `/_code/${id}.txt`;
}
