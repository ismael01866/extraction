'use client';

import { useState } from 'react';

import { Button, Field, Input } from 'extraction-ui';

export const InputControlledExample = () => {
  const [value, setValue] = useState('');
  return (
    <Field className="w-64">
      <Input
        placeholder="Enter your name"
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
    </Field>
  );
};

export const InputUncontrolledExample = () => {
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);
        console.log(formData.get('input'));
      }}
      className="w-64"
    >
      <Field>
        <Input placeholder="Enter your name" name="input" />
      </Field>

      <Button type="submit" className="palette-neutral variant-surface button-sm mt-3 w-full">
        Submit
      </Button>
    </form>
  );
};
