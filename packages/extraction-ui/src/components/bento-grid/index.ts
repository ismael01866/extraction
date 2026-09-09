import { BentoGridCol, BentoGridItem, BentoGridRoot, BentoGridRow } from './bento-grid';

export type { BentoGridItemProps, BentoGridProps } from './bento-grid.types';

export const BentoGrid = Object.assign(BentoGridRoot, {
  Col: BentoGridCol,
  Row: BentoGridRow,
  Item: BentoGridItem,
});
