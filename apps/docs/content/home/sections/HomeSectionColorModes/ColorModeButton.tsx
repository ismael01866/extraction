'use client';

import { Button, Icon } from 'extraction-ui';
import { useColorModeWithOptions } from 'extraction-ui-components';
import { LuSunMoon } from 'react-icons/lu';

export function ColorModeButton() {
  const { toggleColorMode } = useColorModeWithOptions({
    useNativeClassList: false,
  });

  return (
    <Button
      className="button-lg tonal-black palette-neutral text-fluid h-14 px-8"
      onClick={toggleColorMode}
    >
      <Icon as={LuSunMoon} />
      Toggle Color Mode
    </Button>
  );
}
