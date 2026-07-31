'use client';

import { ComponentProps } from 'react';

import { Icon, IconButton, useColorMode } from 'extraction-ui';
import { LuSun } from 'react-icons/lu';

export function ColorModeButton({ ...rest }: ComponentProps<typeof IconButton>) {
  const { toggleColorMode } = useColorMode();

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
