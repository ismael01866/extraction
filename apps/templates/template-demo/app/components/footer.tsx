import {
  Container,
  Description,
  Grid,
  HStack,
  Link,
  Logo,
  Stack,
  Title,
  VStack,
} from 'extraction-ui';

const FOOTER_LINK_SECTIONS = [
  {
    title: 'Product',
    links: ['Features', 'Integrations', 'Release Notes'],
  },
  {
    title: 'Resources',
    links: ['Documentation', 'Discover', 'Collections'],
  },
  {
    title: 'Developers',
    links: ['API', 'SDK', 'Community'],
  },
  {
    title: 'Legal',
    links: ['Privacy Policy', 'Terms of Service'],
  },
];

export const Footer = () => (
  <VStack>
    <Container className="text-sm">
      <HStack>
        <Stack className="gap-6">
          <Logo src="/images/assets/logo.svg" alt="logo" className="size-8" />
          <Description>© 2024 Extraction UI</Description>
        </Stack>

        <Grid className="ml-auto w-auto grid-cols-4 gap-24">
          {FOOTER_LINK_SECTIONS.map(({ title, links }) => (
            <Stack key={title} className="gap-4">
              <Title className="title-sm">{title}</Title>
              {links.map((item) => (
                <Link key={item} href="#" className="opacity-subtle text-current hover:opacity-100">
                  {item}
                </Link>
              ))}
            </Stack>
          ))}
        </Grid>
      </HStack>
    </Container>
  </VStack>
);
