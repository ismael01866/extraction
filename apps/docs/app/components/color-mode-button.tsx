'use client';

import { ComponentProps } from 'react';

import { Icon, IconButton, useColorMode } from 'extraction-ui';
import { useTheme } from 'nextra-theme-docs';
import { LuSun } from 'react-icons/lu';

export function ColorModeButton({ ...rest }: ComponentProps<typeof IconButton>) {
  const { setTheme } = useTheme();
  const { toggleColorMode } = useColorMode({ onChange: setTheme });

  return (
    <IconButton
      aria-label="Color Mode"
      className="variant-ghost palette-neutral icon-button-sm size-8"
      onClick={toggleColorMode}
      {...rest}
    >
      <Icon as={LuSun} />
    </IconButton>
  );
}
