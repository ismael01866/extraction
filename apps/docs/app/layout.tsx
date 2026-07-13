import { Geist, Geist_Mono } from 'next/font/google';

import { ColorModeButton } from 'components';
import {
  Description,
  Flex,
  HStack,
  IconButton,
  List,
  Logo,
  Stack,
  Text,
  Title,
} from 'extraction-ui';
import { Metadata } from 'next';
import { Footer, Layout, Navbar } from 'nextra-theme-docs';
import { Head } from 'nextra/components';
import { getPageMap } from 'nextra/page-map';
import { LuGithub, LuSun } from 'react-icons/lu';

import './globals.css';

import { LenisProvider } from './components/lenis-provider';
import { NavigationEvents } from './components/navigation-events';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Extraction UI Docs',
  description: 'Documentation for Extraction UI',
};

const DOCUMENTATION = [
  {
    label: 'Get Started',
    href: '/get-started/overview/installation',
  },
  {
    label: 'Components',
    href: '/components/overview/introduction',
  },
  {
    label: 'Theming',
    href: '/theming/overview/introduction',
  },
];

const ABOUT = [
  {
    label: 'Changelog',
    href: '/get-started/overview/changelog',
  },
  {
    label: 'Browser Support',
    href: '/get-started/overview/browser',
  },
  {
    label: 'Github Repository',
    href: 'https://github.com/ismael01866',
  },
];

const navbar = (
  <Navbar
    logo={
      <HStack className="gap-3">
        <Logo
          src="/images/assets/xui.svg"
          alt="Extraction UI Logo"
          className="size-7"
        />
        <Title className="[font-family:var(--font-geist-sans)] font-extrabold">
          Extraction UI
        </Title>
      </HStack>
    }
  >
    <HStack className="gap-1">
      <IconButton
        className="variant-ghost palette-neutral icon-button-sm size-8"
        aria-label="Github Repository"
      >
        <LuGithub />
      </IconButton>

      <IconButton
        className="variant-ghost palette-neutral icon-button-sm size-8"
        aria-label="Toggle Color Mode"
        asChild
      >
        <ColorModeButton
          useNativeClassList={false}
          useNextThemes
          propagateToIFrame
        >
          <LuSun />
        </ColorModeButton>
      </IconButton>
    </HStack>
  </Navbar>
);

const footer = (
  <Footer>
    <Flex className="w-full flex-col text-sm sm:flex-row">
      <Stack>
        <Text>MIT {new Date().getFullYear()} © Extraction UI</Text>
        <Description>
          <Text className="opacity-muted">Built and mantained by </Text>
          <a
            target="_blank"
            href="https://github.com/ismael01866"
            className="underline"
            rel="noreferrer"
          >
            ismael
          </a>
        </Description>
      </Stack>

      <Flex className="mb-8 hidden gap-20 sm:ms-auto sm:flex">
        <Stack className="gap-4">
          <Title>Documentation</Title>
          <List className="list-none gap-3">
            {DOCUMENTATION.map(({ label, href }, i) => (
              <List.Item key={i}>
                <a href={href}>{label}</a>
              </List.Item>
            ))}
          </List>
        </Stack>

        <Stack className="gap-4">
          <Title>About</Title>
          <List className="list-none gap-3">
            {ABOUT.map(({ label, href }, i) => (
              <List.Item key={i}>
                <a href={href}>{label}</a>
              </List.Item>
            ))}
          </List>
        </Stack>
      </Flex>
    </Flex>
  </Footer>
);

export default async function RootLayout({ children }) {
  const pageMap = await getPageMap();

  return (
    <html
      lang="en"
      dir="ltr"
      className={`${geistSans.variable} ${geistMono.variable}`}
      suppressHydrationWarning
    >
      <Head>
        {/* <Script
          src="//unpkg.com/react-scan/dist/auto.global.js"
          crossOrigin="anonymous"
          strategy="beforeInteractive"
        /> */}
      </Head>
      <body>
        <Layout
          navbar={navbar}
          pageMap={pageMap}
          footer={footer}
          darkMode={false}
          copyPageButton={false}
          sidebar={{
            toggleButton: false,
          }}
        >
          {children}
          <LenisProvider />
          <NavigationEvents />
        </Layout>
      </body>
    </html>
  );
}
