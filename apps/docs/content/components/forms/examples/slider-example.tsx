'use client';

import { useState } from 'react';

import { Button, Slider } from 'extraction-ui';

export const SliderControlledExample = () => {
  const [value, setValue] = useState([50]);

  return (
    <Slider className="w-40" value={value} onValueChange={setValue}>
      <Slider.Track>
        <Slider.Range />
      </Slider.Track>
      <Slider.Thumb aria-label="slider thumb" />
    </Slider>
  );
};

export const SliderUncontrolledExample = () => {
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);
        console.log(formData.get('slider'));
      }}
    >
      <Slider className="w-40" name="slider" defaultValue={[50]}>
        <Slider.Track>
          <Slider.Range />
        </Slider.Track>
        <Slider.Thumb aria-label="slider thumb" />
      </Slider>

      <br />
      <Button type="submit" className="palette-neutral variant-surface button-sm w-full">
        Submit
      </Button>
    </form>
  );
};
