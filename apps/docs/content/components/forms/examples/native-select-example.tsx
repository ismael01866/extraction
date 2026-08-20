'use client';

import { useState } from 'react';

import { Button, NativeSelect } from 'extraction-ui';

export const NativeSelectControlledExample = () => {
  const [value, setValue] = useState('');
  return (
    <NativeSelect className="w-64">
      <NativeSelect.Field
        aria-label="select field"
        value={value}
        onChange={(event) => setValue(event.target.value)}
      >
        <option>option 1</option>
        <option>option 2</option>
      </NativeSelect.Field>
      <NativeSelect.Icon />
    </NativeSelect>
  );
};

export const NativeSelectUncontrolledExample = () => {
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);
        console.log(formData.get('native-select'));
      }}
      className="w-64"
    >
      <NativeSelect>
        <NativeSelect.Field aria-label="select field" name="native-select">
          <option>option 1</option>
          <option>option 2</option>
        </NativeSelect.Field>
        <NativeSelect.Icon />
      </NativeSelect>

      <Button type="submit" className="palette-neutral variant-surface button-sm mt-3 w-full">
        Submit
      </Button>
    </form>
  );
};
