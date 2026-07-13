import { ProgressIndicator, ProgressRoot } from './progress';

export type { ProgressIndicatorProps, ProgressProps } from './progress.types';

export const Progress = Object.assign(ProgressRoot, {
  Indicator: ProgressIndicator,
});
