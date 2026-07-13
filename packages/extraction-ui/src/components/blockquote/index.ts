import {
  BlockquoteCaption,
  BlockquoteCite,
  BlockquoteContent,
  BlockquoteDescription,
  BlockquoteIcon,
  BlockquoteRoot,
} from './blockquote';

export type {
  BlockquoteCaptionProps,
  BlockquoteCiteProps,
  BlockquoteContentProps,
  BlockquoteDescriptionProps,
  BlockquoteIconProps,
  BlockquoteProps,
} from './blockquote.types';

export const Blockquote = Object.assign(BlockquoteRoot, {
  Caption: BlockquoteCaption,
  Content: BlockquoteContent,
  Cite: BlockquoteCite,
  Description: BlockquoteDescription,
  Icon: BlockquoteIcon,
});
