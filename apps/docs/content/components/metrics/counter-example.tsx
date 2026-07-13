'use client';

import { Counter } from 'extraction-ui';

export const CounterFormatterExample = () => {
  return (
    <Counter
      value={125000}
      formatter={(value) => Math.round(value).toLocaleString()}
    />
  );
};
