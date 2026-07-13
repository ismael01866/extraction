import React, { ElementType } from 'react';

import { Element } from '../element';
import {
  BlockquoteCaptionProps,
  BlockquoteCiteProps,
  BlockquoteContentProps,
  BlockquoteDescriptionProps,
  BlockquoteIconProps,
  BlockquoteProps,
} from './blockquote.types';

export const BlockquoteRoot = <T extends ElementType = 'figure'>(props: BlockquoteProps<T>) => {
  const { as = 'figure', children, ...rest } = props;

  return (
    <Element as={as as ElementType<any>} cssClassName="ex-blockquote" {...rest}>
      {children}
    </Element>
  );
};

BlockquoteRoot.displayName = 'Blockquote';

export const BlockquoteContent = <T extends ElementType = 'div'>(
  props: BlockquoteContentProps<T>,
) => {
  const { as = 'div', children, ...rest } = props;

  return (
    <Element as={as as ElementType<any>} cssClassName="ex-blockquote-content" {...rest}>
      {children}
    </Element>
  );
};

BlockquoteContent.displayName = 'Blockquote.Content';

export const BlockquoteDescription = <T extends ElementType = 'blockquote'>(
  props: BlockquoteDescriptionProps<T>,
) => {
  const { as = 'blockquote', children, ...rest } = props;

  return (
    <Element as={as as ElementType<any>} cssClassName="ex-blockquote-description" {...rest}>
      {children}
    </Element>
  );
};

BlockquoteDescription.displayName = 'Blockquote.Description';

export const BlockquoteCaption = <T extends ElementType = 'figcaption'>(
  props: BlockquoteCaptionProps<T>,
) => {
  const { as = 'figcaption', children, ...rest } = props;

  return (
    <Element as={as as ElementType<any>} cssClassName="ex-blockquote-caption" {...rest}>
      {children}
    </Element>
  );
};

BlockquoteCaption.displayName = 'Blockquote.Caption';

export const BlockquoteCite = <T extends ElementType = 'cite'>(props: BlockquoteCiteProps<T>) => {
  const { as = 'cite', children, ...rest } = props;

  return (
    <Element as={as as ElementType<any>} cssClassName="ex-blockquote-cite" {...rest}>
      {children}
    </Element>
  );
};

BlockquoteCite.displayName = 'Blockquote.Cite';

export const BlockquoteIcon = <T extends ElementType = 'div'>(props: BlockquoteIconProps<T>) => {
  const { as = 'div', children, ...rest } = props;

  return (
    <Element as={as as ElementType<any>} cssClassName="ex-blockquote-icon" {...rest}>
      {children ?? (
        <svg viewBox="0 0 20 20" className="ex-blockquote-quotes" aria-hidden="true">
          <path d="M14 16C15.9 16 17.5 14.4 17.5 12.5C17.5 10.6 15.9 9 14 9C14 6.5 15.2 4.8 17.5 3.5L16.5 2.5C13.5 4 11.5 6.5 11.5 12.5C11.5 14.4 12.6 16 14 16Z" />
          <path d="M6 16C7.9 16 9.5 14.4 9.5 12.5C9.5 10.6 7.9 9 6 9C6 6.5 7.2 4.8 9.5 3.5L8.5 2.5C5.5 4 3.5 6.5 3.5 12.5C3.5 14.4 4.6 16 6 16Z" />
        </svg>
      )}
    </Element>
  );
};

BlockquoteIcon.displayName = 'Blockquote.Icon';
