import { TextareaField, TextareaRoot } from './textarea';

export type { TextareaFieldProps, TextareaProps } from './textarea.types';

export const Textarea = Object.assign(TextareaRoot, {
  Field: TextareaField,
});
