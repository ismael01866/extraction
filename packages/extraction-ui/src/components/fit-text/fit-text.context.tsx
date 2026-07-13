import { createContext } from 'react';

import { FitTextContextValue } from './fit-text.types';

export const FitTextContext = createContext<FitTextContextValue | null>(null);
