import { default as theme } from 'tailwindcss/defaultTheme';

export const motions = theme.transitionTimingFunction;
export type MotionToken = keyof Omit<typeof motions, 'DEFAULT'>;

export const motionValues = Object.keys(motions) as MotionToken[];
export const motionFunctions: Record<MotionToken, (t: number) => number> = {
  linear: (t) => t,
  in: (t) => t * t,
  out: (t) => t * (2 - t),
  'in-out': (t) => (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t),
};
