'use client';

import { useEffect, useState } from 'react';

import { THEMES } from '@/app/utils/vars';

import { ColorSwatch, HStack, Select } from 'extraction-ui';

export const ColorThemeSelect = () => {
  const [value, setValue] = useState(THEMES[0]?.value ?? '');

  const selectedTheme =
    THEMES.find((theme) => theme.value === value) ?? THEMES[0];

  useEffect(() => {
    if (!value) return;
    document.documentElement.setAttribute('data-theme', value);
  }, [value]);

  return (
    <Select value={value} onValueChange={setValue}>
      <Select.Trigger
        aria-label="select-theme"
        className="select-trigger-lg variant-surface tonal-white hover:shade-50 h-14 px-8"
      >
        <HStack className="me-2 gap-0 -space-x-1.5">
          {selectedTheme?.colors.map((color, index) => (
            <ColorSwatch
              key={index}
              className="color-swatch-sm rounded-full shadow-sm"
              style={{ backgroundColor: color }}
            />
          ))}
        </HStack>
        <Select.Value />
        <Select.Icon />
      </Select.Trigger>
      <Select.Portal>
        <Select.Content
          position="popper"
          sideOffset={8}
          onCloseAutoFocus={(e) => e.preventDefault()}
        >
          <Select.ScrollUpButton />
          <Select.Viewport>
            <Select.Section>
              {THEMES.map(({ value, name, colors }) => (
                <Select.Item value={value} key={value}>
                  <HStack className="me-2 gap-0 -space-x-1.5 py-1">
                    {colors.map((color, index) => (
                      <ColorSwatch
                        key={`${value}-${index}`}
                        className="color-swatch-sm rounded-full shadow-sm"
                        style={{ backgroundColor: color }}
                      />
                    ))}
                  </HStack>
                  <Select.ItemText>{name}</Select.ItemText>
                  <Select.ItemIndicator />
                </Select.Item>
              ))}
            </Select.Section>
          </Select.Viewport>
          <Select.ScrollDownButton />
        </Select.Content>
      </Select.Portal>
    </Select>
  );
};
