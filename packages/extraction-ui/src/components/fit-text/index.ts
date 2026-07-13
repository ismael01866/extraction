import { FitTextContent, FitTextRoot, FitTextTarget } from './fit-text';

export type {
  FitTextContentProps,
  FitTextContextValue,
  FitTextProps,
  FitTextTargetProps,
} from './fit-text.types';

export const FitText = Object.assign(FitTextRoot, {
  Content: FitTextContent,
  Target: FitTextTarget,
});
