'use client';

import { useState } from 'react';

import { Button, Checkbox } from 'extraction-ui';

export const CheckboxControlledExample = () => {
  const [checked, setChecked] = useState(false);

  return (
    <Checkbox>
      <Checkbox.Control
        id="ch-c"
        aria-label="Accept terms"
        checked={checked}
        onCheckedChange={(value) => setChecked(value === true)}
      >
        <Checkbox.Indicator />
      </Checkbox.Control>
      <Checkbox.Label htmlFor="ch-c">Accept terms</Checkbox.Label>
    </Checkbox>
  );
};

export const CheckboxUncontrolledExample = () => {
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);
        console.log(formData.get('checkbox'));
      }}
    >
      <Checkbox>
        <Checkbox.Control id="ch-u" aria-label="Accept terms" name="checkbox">
          <Checkbox.Indicator />
        </Checkbox.Control>
        <Checkbox.Label htmlFor="ch-u">Accept terms</Checkbox.Label>
      </Checkbox>

      <br />
      <Button type="submit" className="palette-neutral variant-surface button-sm w-full">
        Submit
      </Button>
    </form>
  );
};
