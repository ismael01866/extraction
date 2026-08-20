'use client';

import { useState } from 'react';

import { Button, Switch } from 'extraction-ui';

export const SwitchControlledExample = () => {
  const [checked, setChecked] = useState(false);

  return (
    <Switch checked={checked} onCheckedChange={(value) => setChecked(value === true)}>
      <Switch.Thumb aria-label="switch thumb" />
    </Switch>
  );
};

export const SwitchUncontrolledExample = () => {
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);
        console.log(formData.get('switch'));
      }}
    >
      <Switch name="switch">
        <Switch.Thumb aria-label="switch thumb" />
      </Switch>

      <br />
      <Button type="submit" className="palette-neutral variant-surface button-sm mt-3 w-full">
        Submit
      </Button>
    </form>
  );
};
