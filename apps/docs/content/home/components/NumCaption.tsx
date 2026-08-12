import { HStack } from 'extraction-ui';

export function NumCaption({ text }) {
  return (
    <div className="num-caption">
      <HStack>
        ■ <code className="text-xs">{text}</code>
      </HStack>
    </div>
  );
}
