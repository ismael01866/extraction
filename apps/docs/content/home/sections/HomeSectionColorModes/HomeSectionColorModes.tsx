import { MotionInView } from '@/app/components/motion-in-view';

import {
  Avatar,
  Badge,
  BgImage,
  Button,
  Card,
  Description,
  Display,
  Grid,
  HStack,
  Icon,
  IconButton,
  Overlay,
  Section,
  Stack,
  Text,
} from 'extraction-ui';
import { BiSolidStar } from 'react-icons/bi';
import { LuBookMarked, LuMapPin } from 'react-icons/lu';

import { ColorModeButton } from './ColorModeButton';
import { ColorThemeSelect } from './ColorThemeSelect';

export function HomeSectionColorModes() {
  return (
    <Section>
      <Grid className="grid-cols-1 items-center gap-y-12 xl:grid-cols-2 xl:gap-x-24">
        <MotionInView className="delay-150">
          <Card className="relative overflow-hidden rounded-xl">
            <Card.Content>
              <Card.Section className="relative h-64 text-white">
                <div className="contents">
                  <BgImage src="/images/assets/sample-1.jpg" />
                  <Overlay className="bg-linear-to-t bg-transparent from-black/75 via-transparent to-black/75" />
                </div>

                <HStack className="relative justify-between">
                  <HStack className="gap-3">
                    <Avatar className="avatar-md">
                      <Avatar.Image alt="John Doe" src="/images/assets/avatar-1.jpg" />
                    </Avatar>
                    <Stack className="gap-0">
                      <span className="opacity-subtle">Hosted by</span>
                      <span className="">Maria Fernandez</span>
                    </Stack>
                  </HStack>

                  <div>
                    <IconButton aria-label="icon-button" className="tonal-white rounded-full">
                      <Icon as={LuBookMarked} />
                    </IconButton>
                  </div>
                </HStack>
              </Card.Section>

              <Card.Section>
                <HStack className="justify-between">
                  <div>
                    <Card.Title>Villa in Tulum</Card.Title>
                    <HStack>
                      <Icon as={LuMapPin} />
                      <Card.Description>
                        <span className="text-primary">Yucatan</span>, Mexico
                      </Card.Description>
                    </HStack>
                  </div>

                  <Stack className="items-end">
                    <Badge className="variant-surface">
                      <Icon as={BiSolidStar} className="text-primary" />
                      4.92
                    </Badge>
                    <Text className="opacity-subtle text-sm">(58 reviews)</Text>
                  </Stack>
                </HStack>
              </Card.Section>
              <Card.Section className="mbs-auto pt-0">
                <Button className="button-lg rounded-full">Reserve</Button>
              </Card.Section>
            </Card.Content>
          </Card>
        </MotionInView>

        <Stack>
          <MotionInView>
            <div>
              <Stack className="gap-4">
                <Display className="text-fluid">Consistent UI</Display>
                <Description className="text-fluid description-2xl">
                  Define your color tokens once and let every component adapt seamlessly across
                  modes.
                </Description>
              </Stack>
              <Grid className="mbs-8 grid-cols-1 gap-3 xl:grid-cols-2">
                <ColorThemeSelect />
                <ColorModeButton />
              </Grid>
            </div>
          </MotionInView>
        </Stack>
      </Grid>
    </Section>
  );
}
