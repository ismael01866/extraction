'use client';

import { useState } from 'react';

import { Button, Password } from 'extraction-ui';

export const PasswordControlledExample = () => {
  const [value, setValue] = useState('');
  return (
    <Password className="w-64">
      <Password.Input
        placeholder="Enter your password"
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
      <Password.Toggle>
        <Password.Icon />
      </Password.Toggle>
    </Password>
  );
};

export const PasswordUncontrolledExample = () => {
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);
        console.log(formData.get('password'));
      }}
      className="w-64"
    >
      <Password>
        <Password.Input placeholder="Enter your password" name="password" />
        <Password.Toggle>
          <Password.Icon />
        </Password.Toggle>
      </Password>

      <Button type="submit" className="palette-neutral variant-surface button-sm mt-3 w-full">
        Submit
      </Button>
    </form>
  );
};
