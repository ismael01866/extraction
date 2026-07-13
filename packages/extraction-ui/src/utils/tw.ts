import { twMerge } from 'tailwind-merge';

type ClassValue =
  | string
  | number
  | boolean
  | null
  | undefined
  | Record<string, boolean>
  | ClassValue[];

function cx(...inputs: ClassValue[]): string {
  const classes: string[] = [];

  for (const input of inputs) {
    if (!input) continue;

    if (typeof input === 'string' || typeof input === 'number') {
      classes.push(String(input));
    } else if (Array.isArray(input)) {
      classes.push(cx(...input));
    } else {
      for (const [key, value] of Object.entries(input)) {
        if (value) classes.push(key);
      }
    }
  }

  return classes.join(' ');
}

export function cn(...inputs: ClassValue[]) {
  return twMerge(cx(...inputs));
}
