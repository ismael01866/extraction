import { createContext } from 'react';

import { MarqueeContextValue } from './marquee.types';

export const MarqueeContext = createContext<MarqueeContextValue>({
  draggable: false,
  orientation: 'horizontal',
});
