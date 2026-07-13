import { CardContent, CardDescription, CardRoot, CardSection, CardTitle } from './card';

export type {
  CardContentProps,
  CardProps,
  CardSectionProps,
  CardDescriptionProps,
  CardTitleProps,
} from './card.types';

export const Card = Object.assign(CardRoot, {
  Content: CardContent,
  Section: CardSection,
  Title: CardTitle,
  Description: CardDescription,
});
