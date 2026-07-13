import {
  Callout,
  HStack,
  IconButton,
  Loader,
  Skeleton,
  VStack,
} from 'extraction-ui';

export function HomePanelFeedback() {
  return (
    <VStack className="gap-4">
      <HStack className="w-full">
        <IconButton aria-label="icon-button" className="icon-button-sm">
          <Loader />
        </IconButton>
        <VStack className="w-full">
          <Skeleton className="h-4" />
          <Skeleton className="h-4" />
        </VStack>
      </HStack>
      <HStack className="w-full">
        <Callout className="callout-sm w-full">
          <Callout.Indicator />
          <Callout.Title>Service update completed</Callout.Title>
        </Callout>
      </HStack>
    </VStack>
  );
}
