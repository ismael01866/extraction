import {
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogOverlay,
  AlertDialogPortal,
  AlertDialogRoot,
  AlertDialogSection,
  AlertDialogTitle,
  AlertDialogTrigger,
} from './alert-dialog';

export type {
  AlertDialogActionProps,
  AlertDialogCancelProps,
  AlertDialogContentProps,
  AlertDialogDescriptionProps,
  AlertDialogOverlayProps,
  AlertDialogPortalProps,
  AlertDialogProps,
  AlertDialogTitleProps,
  AlertDialogTriggerProps,
  AlertDialogSectionProps,
} from './alert-dialog.types';

export const AlertDialog = Object.assign(AlertDialogRoot, {
  Action: AlertDialogAction,
  Cancel: AlertDialogCancel,
  Content: AlertDialogContent,
  Description: AlertDialogDescription,
  Section: AlertDialogSection,
  Overlay: AlertDialogOverlay,
  Portal: AlertDialogPortal,
  Title: AlertDialogTitle,
  Trigger: AlertDialogTrigger,
});
