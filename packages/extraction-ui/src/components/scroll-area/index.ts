import {
  ScrollAreaContent,
  ScrollAreaCorner,
  ScrollAreaRoot,
  ScrollAreaScrollbar,
  ScrollAreaThumb,
  ScrollAreaViewport,
} from './scroll-area';

export type {
  ScrollAreaContentProps,
  ScrollAreaCornerProps,
  ScrollAreaProps,
  ScrollAreaScrollbarProps,
  ScrollAreaThumbProps,
  ScrollAreaViewportProps,
} from './scroll-area.types';

export const ScrollArea = Object.assign(ScrollAreaRoot, {
  Content: ScrollAreaContent,
  Corner: ScrollAreaCorner,
  Scrollbar: ScrollAreaScrollbar,
  Thumb: ScrollAreaThumb,
  Viewport: ScrollAreaViewport,
});
