export type ColorMode = 'light' | 'dark';

export type UseColorModeOptions = {
  useClassList?: boolean;
  onChange?: (mode: ColorMode) => void;
};
