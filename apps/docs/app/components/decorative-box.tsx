import { ComponentProps } from 'react';

import { Box } from 'extraction-ui';
import { cn } from 'extraction-ui-utils';

const decorativeStyles = {
  backgroundImage: `
    repeating-linear-gradient(
      45deg,
      transparent,
      transparent 4px,
      rgba(0,0,0,0.12) 4px,
      rgba(0,0,0,0.12) 5px
    )
  `,
} as const;

export function DecorativeBox({ className, style, ...rest }: ComponentProps<typeof Box>) {
  const classes = cn(
    'palette-neutral shade-200 rounded-sm size-16 variant-solid relative',
    className,
  );

  return <Box className={classes} style={{ ...decorativeStyles, ...style }} {...rest} />;
}

DecorativeBox.displayName = 'DecorativeBox';
