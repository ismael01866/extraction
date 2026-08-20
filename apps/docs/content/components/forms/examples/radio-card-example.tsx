'use client';

import { useState } from 'react';

import { Button, RadioCard, RadioGroup } from 'extraction-ui';

export const RadioCardControlledExample = () => {
  const [value, setValue] = useState('option-1');

  return (
    <RadioGroup value={value} onValueChange={(value) => setValue(value)}>
      <RadioCard value="option-1">
        <RadioCard.Indicator />
        <RadioCard.Content>
          <RadioCard.Label>Option 1</RadioCard.Label>
        </RadioCard.Content>
      </RadioCard>
      <RadioCard value="option-2">
        <RadioCard.Indicator />
        <RadioCard.Content>
          <RadioCard.Label>Option 2</RadioCard.Label>
        </RadioCard.Content>
      </RadioCard>
    </RadioGroup>
  );
};

export const RadioCardUncontrolledExample = () => {
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);
        console.log(formData.get('radio-card'));
      }}
    >
      <RadioGroup name="radio-card" defaultValue="option-1">
        <RadioCard value="option-1">
          <RadioCard.Indicator />
          <RadioCard.Content>
            <RadioCard.Label>Option 1</RadioCard.Label>
          </RadioCard.Content>
        </RadioCard>
        <RadioCard value="option-2">
          <RadioCard.Indicator />
          <RadioCard.Content>
            <RadioCard.Label>Option 2</RadioCard.Label>
          </RadioCard.Content>
        </RadioCard>
      </RadioGroup>

      <Button type="submit" className="palette-neutral variant-surface button-sm mt-3 w-full">
        Submit
      </Button>
    </form>
  );
};
