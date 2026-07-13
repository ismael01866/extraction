import { MarqueeItem, MarqueeRoot, MarqueeTrack } from './marquee';

export type { MarqueeItemProps, MarqueeProps, MarqueeTrackProps } from './marquee.types';

export const Marquee = Object.assign(MarqueeRoot, {
  Track: MarqueeTrack,
  Item: MarqueeItem,
});
