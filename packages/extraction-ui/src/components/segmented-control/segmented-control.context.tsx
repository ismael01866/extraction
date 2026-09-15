import { createContext } from 'react';

import { SegmentedControlContextValue } from './segmented-control.types';

export const SegmentedControlContext = createContext<SegmentedControlContextValue | null>(null);
