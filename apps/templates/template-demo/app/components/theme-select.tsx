'use client';

import { useEffect, useState } from 'react';

import { ColorSwatch, HStack, Icon, Select } from 'extraction-ui';
import { LuPaintBucket } from 'react-icons/lu';

const THEMES = [
  {
    value: 'default',
    name: 'Default',
    colors: ['oklch(0.55 0.15 275)', 'oklch(0.55 0.15 185)', 'oklch(0.55 0.04 275)'],
  },
  {
    value: 'amber',
    name: 'Amber',
    colors: ['oklch(0.55 0.15 85)', 'oklch(0.55 0.15 65)', 'oklch(0.55 0.04 85)'],
  },
  {
    value: 'aqua',
    name: 'Aqua',
    colors: ['oklch(0.55 0.15 185)', 'oklch(0.55 0.15 155)', 'oklch(0.55 0.04 185)'],
  },
  {
    value: 'coral',
    name: 'Coral',
    colors: ['oklch(0.55 0.15 35)', 'oklch(0.55 0.15 5)', 'oklch(0.55 0.04 35)'],
  },
  {
    value: 'forest',
    name: 'Forest',
    colors: ['oklch(0.55 0.15 150)', 'oklch(0.55 0.15 110)', 'oklch(0.55 0.04 150)'],
  },
  {
    value: 'lavender',
    name: 'Lavender',
    colors: ['oklch(0.55 0.15 300)', 'oklch(0.55 0.15 270)', 'oklch(0.55 0.04 300)'],
  },
  {
    value: 'lime',
    name: 'Lime',
    colors: ['oklch(0.55 0.15 120)', 'oklch(0.55 0.15 85)', 'oklch(0.55 0.04 120)'],
  },
  {
    value: 'midnight',
    name: 'Midnight',
    colors: ['oklch(0.55 0.15 250)', 'oklch(0.55 0.15 215)', 'oklch(0.55 0.04 250)'],
  },
  {
    value: 'ocean',
    name: 'Ocean',
    colors: ['oklch(0.55 0.15 225)', 'oklch(0.55 0.15 190)', 'oklch(0.55 0.04 225)'],
  },
  {
    value: 'rose',
    name: 'Rose',
    colors: ['oklch(0.55 0.15 370)', 'oklch(0.55 0.15 355)', 'oklch(0.55 0.04 370)'],
  },
];

export const ThemeSelect = () => {
  const [value, setValue] = useState(THEMES[0]?.value ?? '');

  const selectedTheme = THEMES.find((theme) => theme.value === value) ?? THEMES[0];

  useEffect(() => {
    if (!value) return;

    document.documentElement.setAttribute('data-theme', value);
  }, [value]);

  return (
    <Select value={value} onValueChange={setValue}>
      <Select.Trigger className="variant-solid w-56 rounded-full">
        <Icon as={LuPaintBucket} className="mr-2 text-lg" />
        <HStack className="mr-2 gap-0 -space-x-1.5">
          {selectedTheme?.colors.map((color, index) => (
            <ColorSwatch
              key={index}
              className="color-swatch-sm border-match-bg rounded-full border-2 shadow-sm"
              style={{ backgroundColor: color }}
            />
          ))}
        </HStack>
        <Select.Value />
        <Select.Icon />
      </Select.Trigger>
      <Select.Portal>
        <Select.Content position="popper" sideOffset={8}>
          <Select.ScrollUpButton />
          <Select.Viewport>
            <Select.Section>
              {THEMES.map(({ value, name, colors }) => (
                <Select.Item value={value} key={value}>
                  <HStack className="mr-2 gap-0 -space-x-1.5 py-1">
                    {colors.map((color, index) => (
                      <ColorSwatch
                        key={`${value}-${index}`}
                        className="color-swatch-sm border-match-bg rounded-full border-2 shadow-sm"
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
