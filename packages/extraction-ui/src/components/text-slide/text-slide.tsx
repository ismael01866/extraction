import React, { ElementType } from 'react';

import { Element } from '../element';
import { TextSlideItemProps, TextSlideProps, TextSlideTrackProps } from './text-slide.types';

export const TextSlideRoot = <T extends ElementType = 'div'>(props: TextSlideProps<T>) => {
  const { as = 'div', children, ...rest } = props;

  const isCompound = React.Children.toArray(children).some(
    (child) => React.isValidElement(child) && child.type === TextSlideTrack,
  );

  return (
    <Element as={as as ElementType<any>} cssClassName="ex-text-slide" {...rest}>
      {isCompound ? (
        children
      ) : (
        <TextSlideTrack>
          <TextSlideItem>{children}</TextSlideItem>
          <TextSlideItem aria-hidden="true">{children}</TextSlideItem>
        </TextSlideTrack>
      )}
    </Element>
  );
};

TextSlideRoot.displayName = 'TextSlide';

export const TextSlideTrack = <T extends ElementType = 'div'>(props: TextSlideTrackProps<T>) => {
  const { as = 'div', children, ...rest } = props;

  return (
    <Element as={as as ElementType<any>} cssClassName="ex-text-slide-track" {...rest}>
      {children}
    </Element>
  );
};

TextSlideTrack.displayName = 'TextSlide.Track';

export const TextSlideItem = <T extends ElementType = 'div'>(props: TextSlideItemProps<T>) => {
  const { as = 'div', children, ...rest } = props;

  return (
    <Element as={as as ElementType<any>} cssClassName="ex-text-slide-item" {...rest}>
      {children}
    </Element>
  );
};

TextSlideItem.displayName = 'TextSlide.Item';
