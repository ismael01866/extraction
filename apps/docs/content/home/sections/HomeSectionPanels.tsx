import { MotionInView } from '@/app/components/motion-in-view';

import { Grid, Section } from 'extraction-ui';
import {
  LuHouse,
  LuKeyboard,
  LuLayers,
  LuLayoutGrid,
  LuMessageCircle,
  LuSquare,
  LuText,
  LuUser,
} from 'react-icons/lu';

import { HomePanelLoader, PanelName } from '../components/HomePanelLoader';
import { HomeFeatureCard } from './HomeFeatureCard';

const PANELS: Array<{
  icon: React.ReactNode;
  title: string;
  description: string;
  name: PanelName;
}> = [
  {
    icon: <LuLayoutGrid />,
    title: 'Layout',
    description: 'Responsive layouts with spacing system',
    name: 'layout',
  },
  {
    icon: <LuSquare />,
    title: 'Buttons',
    description: 'Clear actionable elements',
    name: 'buttons',
  },
  {
    icon: <LuKeyboard />,
    title: 'Forms',
    description: 'Capture user input with ease',
    name: 'forms',
  },
  {
    icon: <LuLayers />,
    title: 'Overlays',
    description: 'Support for contextual tasks',
    name: 'overlays',
  },
  {
    icon: <LuHouse />,
    title: 'Navigation',
    description: 'Apply patterns for wayfinding',
    name: 'navigation',
  },
  {
    icon: <LuUser />,
    title: 'Data Display',
    description: 'Show details with clean visuals',
    name: 'data-display',
  },
  {
    icon: <LuMessageCircle />,
    title: 'Feedback',
    description: 'Communicate informative signals',
    name: 'feedback',
  },
  {
    icon: <LuText />,
    title: 'Typography',
    description: 'Apply readable text styles',
    name: 'typography',
  },
];

export function HomeSectionPanels() {
  return (
    <Section>
      <Grid className="grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-4">
        {PANELS.map(({ icon, title, description, name }, index) => (
          <MotionInView
            key={title}
            animationClassName="scale-75"
            className="transition-[transform,opacity,filter]"
            style={{
              transitionDelay: `${(index + 4) * 50}ms`,
            }}
          >
            <HomeFeatureCard icon={icon} title={title} description={description}>
              <HomePanelLoader name={name} />
            </HomeFeatureCard>
          </MotionInView>
        ))}
      </Grid>
    </Section>
  );
}
