'use client';

import { useState } from 'react';

import { Button, PinInput } from 'extraction-ui';

export const PinControlledExample = () => {
  const [value, setValue] = useState('');
  return (
    <PinInput placeholder={'○○○'} value={value} onValueChange={setValue}>
      <PinInput.Field />
      <PinInput.Field />
      <PinInput.Field />
      <PinInput.Hidden />
    </PinInput>
  );
};

export const PinUncontrolledExample = () => {
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);
        console.log(formData.get('pin-input'));
      }}
      className="w-64"
    >
      <PinInput placeholder={'○○○'} name="pin-input">
        <PinInput.Field />
        <PinInput.Field />
        <PinInput.Field />
        <PinInput.Hidden />
      </PinInput>

      <Button type="submit" className="palette-neutral variant-surface button-sm mt-3 w-full">
        Submit
      </Button>
    </form>
  );
};
