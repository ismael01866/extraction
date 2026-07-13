import { Card, HStack, Icon } from 'extraction-ui';

export function HomeFeatureCard({
  icon,
  title,
  description,
  children,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  children?: React.ReactNode;
}) {
  return (
    <Card>
      <Card.Content>
        <Card.Section>
          <Card.Title className="text-sm">
            <HStack>
              <Icon>{icon}</Icon>
              {title}
            </HStack>
          </Card.Title>
          <Card.Description>{description}</Card.Description>
        </Card.Section>
        <Card.Section className="pt-0">{children}</Card.Section>
      </Card.Content>
    </Card>
  );
}
