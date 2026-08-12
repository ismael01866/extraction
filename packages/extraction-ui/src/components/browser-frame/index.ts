import {
  BrowserFrameActions,
  BrowserFrameAddress,
  BrowserFrameContent,
  BrowserFrameControls,
  BrowserFrameRoot,
  BrowserFrameToolbar,
} from './browser-frame';

export type {
  BrowserFrameActionsProps,
  BrowserFrameAddressProps,
  BrowserFrameContentProps,
  BrowserFrameControlsProps,
  BrowserFrameProps,
  BrowserFrameToolbarProps,
} from './browser-frame.types';

export const BrowserFrame = Object.assign(BrowserFrameRoot, {
  Toolbar: BrowserFrameToolbar,
  Controls: BrowserFrameControls,
  Address: BrowserFrameAddress,
  Actions: BrowserFrameActions,
  Content: BrowserFrameContent,
});
