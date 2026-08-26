import { createContext } from 'react';

import { NumberInputContextValue } from './number-input.types';

export const NumberInputContext = createContext<NumberInputContextValue | null>(null);
