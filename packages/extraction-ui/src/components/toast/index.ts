import {
  ToastAction,
  ToastClose,
  ToastContent,
  ToastDescription,
  ToastIndicator,
  ToastProvider,
  ToastRoot,
  ToastTitle,
  ToastViewport,
} from './toast';

export type {
  ToastActionProps,
  ToastCloseProps,
  ToastContentProps,
  ToastDescriptionProps,
  ToastIndicatorProps,
  ToastPlacement,
  ToastProps,
  ToastProviderProps,
  ToastTitleProps,
  ToastViewportProps,
} from './toast.types';

export const Toast = Object.assign(ToastRoot, {
  Action: ToastAction,
  Close: ToastClose,
  Content: ToastContent,
  Description: ToastDescription,
  Indicator: ToastIndicator,
  Provider: ToastProvider,
  Title: ToastTitle,
  Viewport: ToastViewport,
});
