import { MotionInView } from '@/app/components';

import { Accordion, Description, Display, Grid, Section, Stack } from 'extraction-ui';

const FAQ = [
  {
    id: 'option-1',
    title: 'How is this different from other libraries?',
    description:
      'Extraction UI is designed with a CSS Tailwind-first approach and design-token-driven theming.',
  },
  {
    id: 'option-2',
    title: 'How is the customization done?',
    description:
      'Most of the customization can done through CSS variables and Tailwind class utilities. Extraction UI also comes with a set of pre-defined tokens that can be used to customize the theme further.',
  },
  {
    id: 'option-3',
    title: 'Does it include dark mode and theming?',
    description: 'Dark mode functionality and a primary theme are already baked in.',
  },
  {
    id: 'option-4',
    title: 'Where can I see examples?',
    description:
      'The documentation site provides implementation examples for every single component.',
  },
  {
    id: 'option-5',
    title: 'Which frameworks does it support?',
    description:
      'It supports Next.js, TanStack, Vite, Astro, and Gatsby, but it should work well in any modern React-based setup.',
  },
];

export function HomeSectionFaq() {
  return (
    <Section>
      <Grid className="grid-cols-1 gap-20 lg:grid-cols-8">
        <Stack className="gap-4 lg:col-span-2">
          <Display className="text-fluid">FAQ</Display>
          <Description className="text-fluid description-xl">
            Learn more about the library, its features, and how it works.
          </Description>
        </Stack>

        <div></div>

        <div className="lg:col-span-5">
          <MotionInView>
            <Accordion className="accordion-lg" type="multiple">
              {FAQ.map(({ id, title, description }) => (
                <Accordion.Item value={id} key={id}>
                  <Accordion.Header>
                    <Accordion.Trigger className="cursor-pointer">
                      <Accordion.Title>{title}</Accordion.Title>
                      <Accordion.Icon />
                    </Accordion.Trigger>
                  </Accordion.Header>
                  <Accordion.Content>
                    <Accordion.Section>
                      <Accordion.Description>{description}</Accordion.Description>
                    </Accordion.Section>
                  </Accordion.Content>
                </Accordion.Item>
              ))}
            </Accordion>
          </MotionInView>
        </div>
      </Grid>
    </Section>
  );
}
