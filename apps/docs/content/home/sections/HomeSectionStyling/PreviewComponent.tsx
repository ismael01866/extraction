'use client';

import { useState } from 'react';

import { ClientCode } from '@/app/components';

import { Button, Icon } from 'extraction-ui';
import reactElementToJSXString from 'react-element-to-jsx-string';
import { LuArrowRight } from 'react-icons/lu';

const EXAMPLES = [
  {
    className: 'tonal-black palette-neutral',
  },
];

export const PreviewComponent = () => {
  const [exampleIndex, setExampleIndex] = useState(0);

  return (
    <>
      <Button className={`button-xl w-80 ${EXAMPLES[exampleIndex].className}`}>
        See next <Icon as={LuArrowRight} />
      </Button>

      <ClientCode enableCopy={false}>
        {reactElementToJSXString(<Button className={`${EXAMPLES[exampleIndex].className}`} />)}
      </ClientCode>
    </>
  );
};
