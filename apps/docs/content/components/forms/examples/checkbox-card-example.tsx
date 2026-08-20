'use client';

import { useState } from 'react';

import { Button, CheckboxCard } from 'extraction-ui';

export const CheckboxCardControlledExample = () => {
  const [checked, setChecked] = useState(false);

  return (
    <CheckboxCard checked={checked} onCheckedChange={(value) => setChecked(value === true)}>
      <CheckboxCard.Indicator aria-label="Accept terms" />
      <CheckboxCard.Content>
        <CheckboxCard.Label>Accept Terms</CheckboxCard.Label>
        <CheckboxCard.Description>Agree to all terms and conditions</CheckboxCard.Description>
      </CheckboxCard.Content>
    </CheckboxCard>
  );
};

export const CheckboxCardUncontrolledExample = () => {
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);
        console.log(formData.get('checkbox-card'));
      }}
    >
      <CheckboxCard name="checkbox-card">
        <CheckboxCard.Indicator aria-label="Accept terms" />
        <CheckboxCard.Content>
          <CheckboxCard.Label>Accept Terms</CheckboxCard.Label>
          <CheckboxCard.Description>Agree to all terms and conditions</CheckboxCard.Description>
        </CheckboxCard.Content>
      </CheckboxCard>

      <Button type="submit" className="palette-neutral variant-surface button-sm mt-3 w-full">
        Submit
      </Button>
    </form>
  );
};
