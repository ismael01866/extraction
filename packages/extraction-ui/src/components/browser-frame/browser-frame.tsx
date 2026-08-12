import React, { ElementType } from 'react';

import './browser-frame.css';

import { Element } from '../element';
import {
  BrowserFrameActionsProps,
  BrowserFrameAddressProps,
  BrowserFrameContentProps,
  BrowserFrameControlsProps,
  BrowserFrameProps,
  BrowserFrameToolbarProps,
} from './browser-frame.types';

export const BrowserFrameRoot = <T extends ElementType = 'div'>(props: BrowserFrameProps<T>) => {
  const { as = 'div', children, ...rest } = props;

  return (
    <Element as={as as ElementType<any>} cssClassName="ex-browser-frame" {...rest}>
      {children}
    </Element>
  );
};

BrowserFrameRoot.displayName = 'BrowserFrame';

export const BrowserFrameToolbar = <T extends ElementType = 'div'>(
  props: BrowserFrameToolbarProps<T>,
) => {
  const { as = 'div', children, ...rest } = props;

  return (
    <Element as={as as ElementType<any>} cssClassName="ex-browser-frame-toolbar" {...rest}>
      {children}
    </Element>
  );
};

BrowserFrameToolbar.displayName = 'BrowserFrame.Toolbar';

export const BrowserFrameControls = <T extends ElementType = 'div'>(
  props: BrowserFrameControlsProps<T>,
) => {
  const { as = 'div', children, ...rest } = props;

  return (
    <Element as={as as ElementType<any>} cssClassName="ex-browser-frame-controls" {...rest}>
      {children ?? (
        <>
          <svg className="ex-browser-frame-controls-svg" viewBox="0 0 24 24">
            <path d="m12 19-7-7 7-7"></path>
            <path d="M19 12H5"></path>
          </svg>

          <svg className="ex-browser-frame-controls-svg" viewBox="0 0 24 24">
            <path d="M5 12h14"></path>
            <path d="m12 5 7 7-7 7"></path>
          </svg>

          <svg className="ex-browser-frame-controls-svg" viewBox="0 0 24 24">
            <path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8"></path>
            <path d="M21 3v5h-5"></path>
          </svg>
        </>
      )}
    </Element>
  );
};

BrowserFrameControls.displayName = 'BrowserFrame.Controls';

export const BrowserFrameActions = <T extends ElementType = 'div'>(
  props: BrowserFrameActionsProps<T>,
) => {
  const { as = 'div', children, ...rest } = props;

  return (
    <Element as={as as ElementType<any>} cssClassName="ex-browser-frame-actions" {...rest}>
      {children ?? (
        <svg className="ex-browser-frame-actions-svg" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="1"></circle>
          <circle cx="12" cy="5" r="1"></circle>
          <circle cx="12" cy="19" r="1"></circle>
        </svg>
      )}
    </Element>
  );
};

BrowserFrameActions.displayName = 'BrowserFrame.Actions';

export const BrowserFrameAddress = <T extends ElementType = 'div'>(
  props: BrowserFrameAddressProps<T>,
) => {
  const { as = 'div', children, ...rest } = props;

  return (
    <Element as={as as ElementType<any>} cssClassName="ex-browser-frame-address" {...rest}>
      {children}
    </Element>
  );
};

BrowserFrameAddress.displayName = 'BrowserFrame.Address';

export const BrowserFrameContent = <T extends ElementType = 'div'>(
  props: BrowserFrameContentProps<T>,
) => {
  const { as = 'div', children, ...rest } = props;

  return (
    <Element as={as as ElementType<any>} cssClassName="ex-browser-frame-content" {...rest}>
      {children}
    </Element>
  );
};

BrowserFrameContent.displayName = 'BrowserFrame.Content';
