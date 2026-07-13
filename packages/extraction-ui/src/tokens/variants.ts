export const variants = {
  solid: '',
  outline: '',
  surface: '',
  subtle: '',
  ghost: '',
  link: '',
  plain: '',
};

export type VariantToken = typeof variants;
export const variantsValues = Object.keys(variants) as (keyof VariantToken)[];
