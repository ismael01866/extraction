import {
  Avatar,
  Box,
  Button,
  Description,
  Flex,
  Float,
  HStack,
  HoverCard,
  Icon,
  IconButton,
  Input,
  Logo,
  NavLink,
  Separator,
  Stack,
  Status,
  Title,
} from 'extraction-ui';
import {
  LuBookText,
  LuChevronDown,
  LuCircleHelp,
  LuCompass,
  LuFolderOpen,
  LuMessageCircle,
  LuPalette,
  LuSearch,
  LuSettings,
} from 'react-icons/lu';

import { ColorModeButton } from './color-mode-button';

const GET_STARTED_ITEMS = [
  {
    icon: LuBookText,
    title: 'Documentation',
    description: 'Learn how to get started',
  },
  {
    icon: LuCompass,
    title: 'Discover',
    description: 'Explore trending projects',
  },
  {
    icon: LuFolderOpen,
    title: 'Collections',
    description: 'Curated lists of your items',
  },
];

export const Header = () => (
  <HStack className="w-full">
    <Logo src="/images/assets/logo.svg" alt="logo" className="size-8" />

    <Box className="absolute left-1/2 -translate-x-1/2">
      <Box className="variant-subtle rounded-full p-0">
        <HStack>
          <Input className="variant-plain w-100 rounded-full" placeholder="Search for anything" />
          <IconButton className="rounded-full">
            <Icon as={LuSearch} />
          </IconButton>
        </HStack>
      </Box>
    </Box>

    <HStack className="ml-auto gap-4">
      <HoverCard openDelay={0} closeDelay={100}>
        <HoverCard.Trigger asChild>
          <Button className="variant-link font-semibold text-current">
            Get Started
            <Icon as={LuChevronDown} className="ml-2" />
          </Button>
        </HoverCard.Trigger>
        <HoverCard.Portal>
          <HoverCard.Content>
            <HoverCard.Section className="gap-0 p-4">
              {GET_STARTED_ITEMS.map(({ icon, title, description }) => (
                <Box key={title} as="a" className="variant-ghost interactive" href="#">
                  <Flex className="gap-3">
                    <Icon as={icon} className="mt-0.5 text-lg" />
                    <Stack>
                      <Title className="title-sm">{title}</Title>
                      <Description>{description}</Description>
                    </Stack>
                  </Flex>
                </Box>
              ))}
            </HoverCard.Section>
            <HoverCard.Arrow />
          </HoverCard.Content>
        </HoverCard.Portal>
      </HoverCard>

      <HStack className="gap-0">
        <IconButton className="variant-ghost palette-neutral rounded-full">
          <Icon as={LuPalette} />
        </IconButton>

        <ColorModeButton />
      </HStack>

      <HoverCard openDelay={0} closeDelay={100}>
        <HoverCard.Trigger className="relative">
          <Avatar className="avatar-sm">
            <Avatar.Image src="/images/assets/avatar.jpg" />
            <Avatar.Fallback>S</Avatar.Fallback>
          </Avatar>
          <Float className="pos-bottom-end">
            <Status className="outline-match-bg bg-green-500 outline-2" />
          </Float>
        </HoverCard.Trigger>
        <HoverCard.Portal>
          <HoverCard.Content align="end" className="w-56">
            <HoverCard.Section>
              <Title className="title-sm">user@email.com</Title>
            </HoverCard.Section>
            <Separator />

            <HoverCard.Section className="px-0 py-2">
              <NavLink className="palette-surface">
                <Icon as={LuSettings} />
                Settings
              </NavLink>
            </HoverCard.Section>
            <Separator />

            <HoverCard.Section className="px-0 py-2">
              <Stack className="gap-0">
                <NavLink className="palette-surface">
                  <Icon as={LuMessageCircle} />
                  Send Feedback
                </NavLink>
                <NavLink className="palette-surface">
                  <Icon as={LuCircleHelp} />
                  Help & Support
                </NavLink>
              </Stack>
            </HoverCard.Section>
            <HoverCard.Arrow />
          </HoverCard.Content>
        </HoverCard.Portal>
      </HoverCard>
    </HStack>
  </HStack>
);
