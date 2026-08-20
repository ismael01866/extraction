'use client';

import { useState } from 'react';

import { Button, Select } from 'extraction-ui';

export const SelectControlledExample = () => {
  const [value, setValue] = useState('');

  return (
    <Select value={value} onValueChange={setValue}>
      <Select.Trigger className="w-64" aria-label="Select an option">
        <Select.Value placeholder="Select an option" />
        <Select.Icon />
      </Select.Trigger>
      <Select.Portal>
        <Select.Content>
          <Select.Viewport>
            <Select.Section>
              <Select.Item value="opt-1">
                <Select.ItemText>Option 1</Select.ItemText>
                <Select.ItemIndicator />
              </Select.Item>
              <Select.Item value="opt-2">
                <Select.ItemText>Option 2</Select.ItemText>
                <Select.ItemIndicator />
              </Select.Item>
            </Select.Section>
          </Select.Viewport>
        </Select.Content>
      </Select.Portal>
    </Select>
  );
};

export const SelectUncontrolledExample = () => {
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);
        console.log(formData.get('select'));
      }}
    >
      <Select name="select">
        <Select.Trigger className="w-64" aria-label="Select an option">
          <Select.Value placeholder="Select an option" />
          <Select.Icon />
        </Select.Trigger>
        <Select.Portal>
          <Select.Content>
            <Select.Viewport>
              <Select.Section>
                <Select.Item value="opt-1">
                  <Select.ItemText>Option 1</Select.ItemText>
                  <Select.ItemIndicator />
                </Select.Item>
                <Select.Item value="opt-2">
                  <Select.ItemText>Option 2</Select.ItemText>
                  <Select.ItemIndicator />
                </Select.Item>
              </Select.Section>
            </Select.Viewport>
          </Select.Content>
        </Select.Portal>
      </Select>

      <br />
      <Button type="submit" className="palette-neutral variant-surface button-sm mt-3 w-full">
        Submit
      </Button>
    </form>
  );
};
