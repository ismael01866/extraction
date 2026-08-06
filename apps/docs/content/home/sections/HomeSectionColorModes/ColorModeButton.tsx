'use client';

import { Button, Icon, useColorMode } from 'extraction-ui';
import { useTheme } from 'nextra-theme-docs';
import { LuSunMoon } from 'react-icons/lu';

export function ColorModeButton() {
  const { setTheme } = useTheme();
  const { toggleColorMode } = useColorMode({ onChange: setTheme });

  return (
    <Button
      className="button-xl tonal-black palette-neutral text-fluid-base px-8"
      onClick={toggleColorMode}
    >
      <Icon as={LuSunMoon} />
      Toggle Color Mode
    </Button>
  );
}
