import { createContext } from 'react';

import { RatingContextValue } from './rating.types';

export const RatingContext = createContext<RatingContextValue | null>(null);
