import { BentoGridItem, BentoGridRoot } from './bento-grid';

export type { BentoGridItemProps, BentoGridProps } from './bento-grid.types';

export const BentoGrid = Object.assign(BentoGridRoot, {
  Item: BentoGridItem,
});
