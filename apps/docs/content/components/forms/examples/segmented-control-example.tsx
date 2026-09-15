'use client';

import { useState } from 'react';

import { Button, SegmentedControl } from 'extraction-ui';

export const SegmentedControlControlledExample = () => {
  const [value, setValue] = useState('Day');
  return (
    <SegmentedControl value={value} onValueChange={setValue} items={['Day', 'Week', 'Month']} />
  );
};

export const SegmentedControlUncontrolledExample = () => {
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);
        console.log(formData.get('segmented-control'));
      }}
    >
      <SegmentedControl name="segmented-control" items={['Day', 'Week', 'Month']} />

      <br />
      <Button type="submit" className="palette-neutral variant-surface button-sm mt-3 w-full">
        Submit
      </Button>
    </form>
  );
};
