import { AppLayout, Center, Tooltip } from 'extraction-ui';

import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/')({ component: App });

function App() {
  return (
    <AppLayout>
      <AppLayout.Body>
        <AppLayout.Main>
          <Center>
            <Tooltip.Provider>
              <Tooltip delayDuration={0}>
                <Tooltip.Trigger>☕</Tooltip.Trigger>
                <Tooltip.Portal>
                  <Tooltip.Content>
                    Made with cofee energy
                    <Tooltip.Arrow />
                  </Tooltip.Content>
                </Tooltip.Portal>
              </Tooltip>
            </Tooltip.Provider>
          </Center>
        </AppLayout.Main>
      </AppLayout.Body>
    </AppLayout>
  );
}
