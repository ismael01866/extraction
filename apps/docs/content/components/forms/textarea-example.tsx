'use client';

import { useState } from 'react';

import { Button, Field, Textarea } from 'extraction-ui';

export const TextareaControlledExample = () => {
  const [value, setValue] = useState('');
  return (
    <Field className="w-64">
      <Textarea
        placeholder="Enter your name"
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
    </Field>
  );
};

export const TextareaUncontrolledExample = () => {
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);
        console.log(formData.get('textarea'));
      }}
      className="w-64"
    >
      <Field>
        <Textarea placeholder="Enter your name" name="textarea" />
      </Field>

      <Button type="submit" className="palette-neutral variant-surface button-sm mt-3 w-full">
        Submit
      </Button>
    </form>
  );
};
