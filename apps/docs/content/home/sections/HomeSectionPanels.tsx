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

import {
  HomePanelButtons,
  HomePanelDataDisplay,
  HomePanelFeedback,
  HomePanelForms,
  HomePanelLayout,
  HomePanelNavigation,
  HomePanelOverlays,
  HomePanelTypography,
} from '../panels';
import { HomeFeatureCard } from './HomeFeatureCard';

const PANELS = [
  {
    icon: <LuLayoutGrid />,
    title: 'Layout',
    description: 'Responsive layouts with spacing system',
    Panel: HomePanelLayout,
  },
  {
    icon: <LuSquare />,
    title: 'Buttons',
    description: 'Clear actionable elements',
    Panel: HomePanelButtons,
  },
  {
    icon: <LuKeyboard />,
    title: 'Forms',
    description: 'Capture user input with ease',
    Panel: HomePanelForms,
  },
  {
    icon: <LuLayers />,
    title: 'Overlays',
    description: 'Support for contextual tasks',
    Panel: HomePanelOverlays,
  },
  {
    icon: <LuHouse />,
    title: 'Navigation',
    description: 'Apply patterns for wayfinding',
    Panel: HomePanelNavigation,
  },
  {
    icon: <LuUser />,
    title: 'Data Display',
    description: 'Show details with clean visuals',
    Panel: HomePanelDataDisplay,
  },
  {
    icon: <LuMessageCircle />,
    title: 'Feedback',
    description: 'Communicate informative signals',
    Panel: HomePanelFeedback,
  },
  {
    icon: <LuText />,
    title: 'Typography',
    description: 'Apply readable text styles',
    Panel: HomePanelTypography,
  },
];

export function HomeSectionPanels() {
  return (
    <Section>
      <Grid className="grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-4">
        {PANELS.map(({ icon, title, description, Panel }, index) => (
          <MotionInView
            key={title}
            animationClassName="scale-75"
            className={`transition-[transform,opacity,filter]`}
            style={{
              transitionDelay: `${(index + 4) * 50}ms`,
            }}
          >
            <HomeFeatureCard icon={icon} title={title} description={description}>
              <Panel />
            </HomeFeatureCard>
          </MotionInView>
        ))}
      </Grid>
    </Section>
  );
}
