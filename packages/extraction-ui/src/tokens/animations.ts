import { default as theme } from 'tailwindcss/defaultTheme';

export const animations = theme.animation;
export type AnimationToken = typeof animations;

export const animationValues = Object.keys(
  animations,
) as unknown as (keyof AnimationToken)[];
