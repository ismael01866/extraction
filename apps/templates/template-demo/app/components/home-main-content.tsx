import {
  Avatar,
  Badge,
  Button,
  Flex,
  Grid,
  HStack,
  // Heading,
  Icon,
  IconButton,
  Image,
  Link,
  Overlay,
  Stack,
  Title,
} from 'extraction-ui';
import { LuBookmark, LuDownload, LuHeart, LuLayers } from 'react-icons/lu';

import { faker } from '@faker-js/faker';

const formatter = new Intl.NumberFormat('en-US', {
  notation: 'compact',
});

const FilterBar = () => (
  <HStack className="mx-auto">
    <Button className="tonal-black">All</Button>
    {['Music', 'Design', 'Live', 'News', 'Business', 'Food', 'Gaming'].map((name) => (
      <Button key={name} className="palette-neutral variant-subtle">
        {name}
      </Button>
    ))}
  </HStack>
);

const ItemImage = ({ i }: { i: number }) => (
  <Link href="#" className="relative overflow-hidden rounded-md">
    <Image className="aspect-3/2" src={`/images/shots/${i + 1}.jpg`} alt={`img-${i}`} />

    <Overlay className="p-4 opacity-0 transition group-hover:opacity-100">
      <HStack className="justify-between">
        <Title className="text-white">{faker.commerce.productName()}</Title>
        <HStack>
          {[{ icon: LuBookmark }, { icon: LuHeart }].map(({ icon }) => (
            <IconButton
              key={icon.name}
              className="palette-neutral variant-subtle icon-button-sm rounded-full"
            >
              <Icon as={icon} />
            </IconButton>
          ))}
        </HStack>
      </HStack>
    </Overlay>
  </Link>
);

const ItemInfo = ({ i, isPro }: { i: number; isPro: boolean }) => {
  const fullname = faker.person.fullName();

  return (
    <Flex className="justify-between">
      <HStack>
        <Avatar className="size-6">
          <Avatar.Image src={`/images/avatars/${i + 1}.jpg`} />
          <Avatar.Fallback>{fullname[0]}</Avatar.Fallback>
        </Avatar>

        <Link href="#" className="text-sm font-semibold text-current">
          {fullname}
        </Link>

        {isPro && <Badge className="palette-accent">PRO</Badge>}
      </HStack>

      <Flex className="text-xs">
        {[{ icon: LuLayers }, { icon: LuDownload }].map(({ icon }) => (
          <HStack key={icon.name}>
            <Icon as={icon} />
            {formatter.format(
              faker.number.float({
                min: 10,
                max: 10000000,
                fractionDigits: 0,
              }),
            )}
          </HStack>
        ))}
      </Flex>
    </Flex>
  );
};
export const HomeMainContent = () => (
  <Stack className="gap-4">
    <FilterBar />

    <Grid className="-mx-2 grid-cols-[repeat(auto-fill,minmax(24rem,1fr))] gap-3">
      {Array.from({ length: 18 }, (_, i) => {
        return (
          <Stack
            key={i + 1}
            className="variant-plain palette-neutral hover:variant-subtle group gap-4 rounded-md p-3"
          >
            <ItemImage i={i} />
            <ItemInfo i={i} isPro={faker.datatype.boolean({ probability: 0.2 })} />
          </Stack>
        );
      })}
    </Grid>
  </Stack>
);
