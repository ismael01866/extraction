import {
  Button,
  Grid,
  VStack,
  shadesValues,
  variantsValues,
} from 'extraction-ui';
import { capitalize } from 'lodash';
import reactElementToJSXString from 'react-element-to-jsx-string';

import { BaseContainer, Code, CodeContainer } from '.';

export function Variants({ color }: { color?: string }) {
  return (
    <section>
      <BaseContainer className="flex-col items-start">
        Solid
        <Grid className="mbs-2 grid-cols-2 gap-2 sm:grid-cols-3">
          {shadesValues.map((shade, index) => (
            <Button
              key={index}
              className={`palette-${color} shade-${shade} variant-solid`}
            >
              {shade}
            </Button>
          ))}
        </Grid>
      </BaseContainer>
      <CodeContainer>
        <Code>
          {[
            `<Button className='palette-${color} shade-50  variant-solid' />`,
            `<Button className='palette-${color} shade-100 variant-solid' />`,
            `<Button className='palette-${color} shade-200 variant-solid' />`,
            `...`,
            `<Button className='palette-${color} shade-900 variant-solid' />`,
            `<Button className='palette-${color} shade-950 variant-solid' />`,
          ].join('\n')}
        </Code>
      </CodeContainer>

      <br />
      <BaseContainer className="flex-col items-start">
        <Grid className="mbs-2 grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {variantsValues
            .filter((variant) => !['solid', 'plain'].includes(variant))
            .map((variant, index) => (
              <VStack key={index} className="items-stretch">
                <Button
                  key={index}
                  className={`palette-${color} variant-${variant}`}
                >
                  {capitalize(variant)}
                </Button>
              </VStack>
            ))}
        </Grid>
      </BaseContainer>
      <CodeContainer>
        <Code>
          {variantsValues
            .filter((variant) => !['solid', 'plain'].includes(variant))
            .map((variant) => {
              return `${reactElementToJSXString(
                <Button className={`palette-${color} variant-${variant}`} />,
              )}`;
            })
            .join('\n')}
        </Code>
      </CodeContainer>
    </section>
  );
}
