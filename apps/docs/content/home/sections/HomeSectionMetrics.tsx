'use client';

import { MotionInView } from '@/app/components';

import { Counter, Description, Display, Grid, InView, Section, Stack, Title } from 'extraction-ui';

const METRICS = [
  {
    number: 80,
    decorator: '+',
    title: 'Components',
    description: 'Accessible, composable, and built for modern applications.',
  },
  {
    number: 10,
    decorator: 'x',
    title: 'Faster development',
    description: 'Reduce repetitive work with reusable building blocks.',
  },
  {
    number: 100,
    decorator: '%',
    title: 'Typescript support',
    description: 'Fully typed codebase for a reliable developer experience.',
  },
  {
    number: 60,
    decorator: ' fps',
    title: 'Fluid performance',
    description: 'Optimized css across every component.',
  },
];

export function HomeSectionMetrics() {
  return (
    <Section>
      <Grid className="grid-cols-1 gap-x-24 gap-y-12 sm:gap-y-20 md:gap-y-32 lg:grid-cols-8">
        <div className="hidden lg:col-span-2 lg:block"></div>

        <MotionInView>
          <Stack className="gap-4 lg:col-span-6">
            <Display className="text-fluid">
              Design once.
              <br />
              <span className="text-primary">Use everywhere.</span>
            </Display>
            <Description className="text-fluid description-2xl">
              Explore the numbers behind the platform.
            </Description>
          </Stack>
        </MotionInView>

        <div className="col-span-full">
          <Grid className="grid-cols-1 gap-20 sm:grid-cols-2 lg:grid-cols-4">
            {METRICS.map((metric, index) => (
              <MotionInView
                key={metric.title}
                style={{
                  transitionDelay: `${(index + 1) * 100}ms`,
                }}
              >
                <Stack className="col-span-1 gap-8">
                  <InView>
                    {({ isInView }) => (
                      <Display className="text-fluid display-sm">
                        <Counter
                          key={isInView ? 'in' : 'out'}
                          delay={250}
                          duration={2000}
                          value={metric.number}
                        />
                        {metric.decorator}
                      </Display>
                    )}
                  </InView>

                  <Stack className="gap-4">
                    <Title className="title-xl text-fluid font-semibold leading-none">
                      {metric.title}
                    </Title>
                    <Description className="text-fluid description-lg">
                      {metric.description}
                    </Description>
                  </Stack>
                </Stack>
              </MotionInView>
            ))}
          </Grid>
        </div>
      </Grid>
    </Section>
  );
}
