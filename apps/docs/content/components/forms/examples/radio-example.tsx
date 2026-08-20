'use client';

import { useState } from 'react';

import { Button, Radio, RadioGroup } from 'extraction-ui';

export const RadioControlledExample = () => {
  const [value, setValue] = useState('option-1');

  return (
    <RadioGroup value={value} onValueChange={(value) => setValue(value)}>
      <Radio>
        <Radio.Control value="option-1" id="r1-c">
          <Radio.Indicator />
        </Radio.Control>
        <Radio.Label htmlFor="r1-c">Option 1</Radio.Label>
      </Radio>
      <Radio>
        <Radio.Control value="option-2" id="r2-c">
          <Radio.Indicator />
        </Radio.Control>
        <Radio.Label htmlFor="r2-c">Option 2</Radio.Label>
      </Radio>
    </RadioGroup>
  );
};

export const RadioUncontrolledExample = () => {
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);
        console.log(formData.get('radio'));
      }}
    >
      <RadioGroup name="radio" defaultValue="option-1">
        <Radio>
          <Radio.Control value="option-1" id="r1-u">
            <Radio.Indicator />
          </Radio.Control>
          <Radio.Label htmlFor="r1-u">Option 1</Radio.Label>
        </Radio>
        <Radio>
          <Radio.Control value="option-2" id="r2-u">
            <Radio.Indicator />
          </Radio.Control>
          <Radio.Label htmlFor="r2-u">Option 2</Radio.Label>
        </Radio>
      </RadioGroup>

      <br />
      <Button type="submit" className="palette-neutral variant-surface button-sm w-full">
        Submit
      </Button>
    </form>
  );
};
