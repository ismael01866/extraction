import { default as theme } from 'tailwindcss/defaultTheme';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const { __BARE_VALUE__, ...delays } = theme.transitionDelay;

export const transitionDelays = delays;
export type TransitionDelayToken = typeof transitionDelays;

export const transitionDelayValues = Object.keys(
  transitionDelays,
) as unknown as (keyof TransitionDelayToken)[];

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const { __BARE_VALUE__: _, ...durations } = theme.transitionDuration;

export const transitionDurations = durations;
export type TransitionDurationToken = typeof transitionDurations;

export const transitionDurationValues = Object.keys(
  transitionDurations,
) as unknown as (keyof TransitionDurationToken)[];

export const transitionProperties = theme.transitionProperty;
export type TransitionPropertyToken = typeof transitionProperties;

export const transitionPropertyValues = Object.keys(
  transitionProperties,
) as unknown as (keyof TransitionPropertyToken)[];

export const transitionTimings = theme.transitionTimingFunction;
export type TransitionTimingToken = typeof transitionTimings;

export const transitionTimingValues = Object.keys(
  transitionTimings,
) as unknown as (keyof TransitionTimingToken)[];
