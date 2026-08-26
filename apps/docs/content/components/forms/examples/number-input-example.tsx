'use client';

import { useState } from 'react';

import { Button, Field, NumberInput } from 'extraction-ui';

export const NumberInputControlledExample = () => {
  const [value, setValue] = useState(0);

  return (
    <Field className="w-64">
      <NumberInput value={value} onValueChange={setValue}>
        <NumberInput.Field placeholder="Enter your age" />
        <NumberInput.Control>
          <NumberInput.IncrementButton />
          <NumberInput.DecrementButton />
        </NumberInput.Control>
      </NumberInput>
    </Field>
  );
};

export const NumberInputUncontrolledExample = () => {
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);
        console.log(formData.get('number-input'));
      }}
      className="w-64"
    >
      <Field>
        <NumberInput>
          <NumberInput.Field placeholder="Enter your age" name="number-input" />
          <NumberInput.Control>
            <NumberInput.IncrementButton />
            <NumberInput.DecrementButton />
          </NumberInput.Control>
        </NumberInput>
      </Field>

      <Button type="submit" className="palette-neutral variant-surface button-sm mt-3 w-full">
        Submit
      </Button>
    </form>
  );
};
