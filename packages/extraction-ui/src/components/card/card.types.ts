import { ElementType } from 'react';

import { ElementProps } from '../element';

export type CardProps<T extends ElementType> = ElementProps<T>;
export type CardContentProps<T extends ElementType> = ElementProps<T>;
export type CardSectionProps<T extends ElementType> = ElementProps<T>;

export type CardTitleProps<T extends ElementType> = ElementProps<T>;
export type CardDescriptionProps<T extends ElementType> = ElementProps<T>;
