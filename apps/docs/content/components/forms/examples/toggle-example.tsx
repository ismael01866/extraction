'use client';

import { useState } from 'react';

import { Button, IconButton, Toggle } from 'extraction-ui';
import { LuMail } from 'react-icons/lu';

export const ToggleControlledExample = () => {
  const [pressed, setPressed] = useState(false);
  return (
    <Toggle pressed={pressed} onPressedChange={(value) => setPressed(value)} asChild>
      <IconButton
        className={`variant-outline data-[state='on']:variant-solid`}
        aria-label="toggle button"
      >
        <LuMail />
      </IconButton>
    </Toggle>
  );
};

export const ToggleUncontrolledExample = () => {
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);
        console.log(formData.get('toggle'));
      }}
      className="w-20"
    >
      <Toggle name="toggle" asChild>
        <IconButton
          className={`variant-outline data-[state='on']:variant-solid`}
          aria-label="toggle button"
        >
          <LuMail />
        </IconButton>
      </Toggle>

      <Button type="submit" className="palette-neutral variant-surface button-sm mt-3 w-full">
        Submit
      </Button>
    </form>
  );
};
