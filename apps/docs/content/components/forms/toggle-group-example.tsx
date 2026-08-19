'use client';

import { useState } from 'react';

import { Button, Group, IconButton, ToggleGroup } from 'extraction-ui';
import { LuAlignCenter, LuAlignLeft, LuAlignRight } from 'react-icons/lu';

export const ToggleGroupControlledExample = () => {
  const [value, setValue] = useState<string | string[]>('');

  return (
    <ToggleGroup
      type="single"
      value={value}
      onValueChange={(value: string | string[]) => setValue(value)}
    >
      <Group>
        <ToggleGroup.Item value={'item-1'} asChild>
          <IconButton
            className={`variant-outline data-[state='on']:variant-solid`}
            aria-label="align left"
          >
            <LuAlignLeft />
          </IconButton>
        </ToggleGroup.Item>
        <ToggleGroup.Item value={'item-2'} asChild>
          <IconButton
            className={`variant-outline data-[state='on']:variant-solid`}
            aria-label="align center"
          >
            <LuAlignCenter />
          </IconButton>
        </ToggleGroup.Item>
        <ToggleGroup.Item value={'item-3'} asChild>
          <IconButton
            className={`variant-outline data-[state='on']:variant-solid`}
            aria-label="align right"
          >
            <LuAlignRight />
          </IconButton>
        </ToggleGroup.Item>
      </Group>
    </ToggleGroup>
  );
};

export const ToggleGroupUncontrolledExample = () => {
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);
        console.log(formData.get('toggle-group'));
      }}
      className="w-20"
    >
      <ToggleGroup type="single" name="toggle-group">
        <Group>
          <ToggleGroup.Item value={'item-1'} asChild>
            <IconButton
              className={`variant-outline data-[state='on']:variant-solid`}
              aria-label="align left"
            >
              <LuAlignLeft />
            </IconButton>
          </ToggleGroup.Item>
          <ToggleGroup.Item value={'item-2'} asChild>
            <IconButton
              className={`variant-outline data-[state='on']:variant-solid`}
              aria-label="align center"
            >
              <LuAlignCenter />
            </IconButton>
          </ToggleGroup.Item>
          <ToggleGroup.Item value={'item-3'} asChild>
            <IconButton
              className={`variant-outline data-[state='on']:variant-solid`}
              aria-label="align right"
            >
              <LuAlignRight />
            </IconButton>
          </ToggleGroup.Item>
        </Group>
      </ToggleGroup>

      <Button type="submit" className="palette-neutral variant-surface button-sm mt-3 w-full">
        Submit
      </Button>
    </form>
  );
};
