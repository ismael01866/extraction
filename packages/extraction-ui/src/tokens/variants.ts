export const variants = {
  solid: '',
  outline: '',
  surface: '',
  subtle: '',
  ghost: '',
  flushed: '',
  link: '',
  plain: '',
};

export type VariantToken = typeof variants;
export const variantsValues = Object.keys(variants) as (keyof VariantToken)[];
