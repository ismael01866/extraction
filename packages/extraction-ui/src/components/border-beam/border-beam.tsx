import React, { ElementType } from 'react';

import './border-beam.css';

import { Element } from '../element';
import { BorderBeamProps, BorderBeamPulseProps, BorderBeamTrackProps } from './border-beam.types';

export const BorderBeamRoot = <T extends ElementType = 'div'>(props: BorderBeamProps<T>) => {
  const { as = 'div', children, ...rest } = props;

  const isCompound = React.Children.toArray(children).some(
    (child) => React.isValidElement(child) && child.type === BorderBeamTrack,
  );

  return (
    <Element as={as as ElementType<any>} cssClassName="ex-border-beam" {...rest}>
      {isCompound ? (
        children
      ) : (
        <>
          {children}
          <BorderBeamTrack>
            <BorderBeamPulse />
          </BorderBeamTrack>
        </>
      )}
    </Element>
  );
};

BorderBeamRoot.displayName = 'BorderBeam';

export const BorderBeamTrack = <T extends ElementType = 'div'>(props: BorderBeamTrackProps<T>) => {
  const { as = 'div', children, ...rest } = props;

  return (
    <Element as={as as ElementType<any>} cssClassName="ex-border-beam-track" {...rest}>
      {children}
    </Element>
  );
};

BorderBeamTrack.displayName = 'BorderBeam.Track';

export const BorderBeamPulse = <T extends ElementType = 'div'>(props: BorderBeamPulseProps<T>) => {
  const { as = 'div', children, ...rest } = props;

  return (
    <Element as={as as ElementType<any>} cssClassName="ex-border-beam-pulse" {...rest}>
      {children}
    </Element>
  );
};

BorderBeamPulse.displayName = 'BorderBeam.Pulse';
