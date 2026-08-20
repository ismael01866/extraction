'use client';

import { useState } from 'react';

import { Button, Rating } from 'extraction-ui';

export const RatingControlledExample = () => {
  const [value, setValue] = useState('3');
  return <Rating value={value} onValueChange={setValue} count={5} />;
};

export const RatingUncontrolledExample = () => {
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);
        console.log(formData.get('rating'));
      }}
    >
      <Rating name="rating" defaultValue="3" count={5} fractions={2} />

      <br />
      <Button type="submit" className="palette-neutral variant-surface button-sm mt-3 w-full">
        Submit
      </Button>
    </form>
  );
};
