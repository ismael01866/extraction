import { Avatar, Card, HStack, Progress, Stack } from 'extraction-ui';

export function HomePanelDataDisplay() {
  return (
    <Card className="max-w-80">
      <Card.Content>
        <Card.Section>
          <HStack>
            <Avatar>
              <Avatar.Image src="/images/assets/avatar-0.jpg" alt="avatar" />
            </Avatar>
            <Stack className="gap-0">
              <Card.Title className="text-sm">Jhon Doe</Card.Title>
              <Card.Description>Product design lead</Card.Description>
            </Stack>
          </HStack>
        </Card.Section>
        <Card.Section className="pt-1">
          <Progress aria-label="progress">
            <Progress.Indicator className="max-w-[50%]" />
          </Progress>
        </Card.Section>
      </Card.Content>
    </Card>
  );
}
