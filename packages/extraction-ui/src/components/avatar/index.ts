import { AvatarFallback, AvatarImage, AvatarRoot } from './avatar';

export type {
  AvatarFallbackProps,
  AvatarImageProps,
  AvatarProps,
} from './avatar.types';

export const Avatar = Object.assign(AvatarRoot, {
  Fallback: AvatarFallback,
  Image: AvatarImage,
});
