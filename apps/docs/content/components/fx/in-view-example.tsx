'use client';

import { Counter, InView, ScrollArea } from 'extraction-ui';

export const InViewRenderPropExample = () => {
  return (
    <ScrollArea className="h-20 max-h-40 w-full" type="always">
      <ScrollArea.Viewport>
        <ScrollArea.Content>
          <div>
            <div className="mb-20">Scroll to reveal animation</div>
            <InView>
              {({ isInView }) => <Counter key={isInView ? 'in' : 'out'} value={1000} />}
            </InView>
          </div>
        </ScrollArea.Content>
      </ScrollArea.Viewport>
      <ScrollArea.Scrollbar>
        <ScrollArea.Thumb />
      </ScrollArea.Scrollbar>
    </ScrollArea>
  );
};
