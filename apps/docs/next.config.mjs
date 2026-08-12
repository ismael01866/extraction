import nextra from 'nextra';

import bundleAnalyzer from '@next/bundle-analyzer';

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

const withNextra = nextra({
  defaultShowCopyCode: true,
  search: { codeblocks: false },
  mdxOptions: {
    rehypePrettyCodeOptions: {
      theme: {
        dark: 'github-dark-default',
        light: 'github-light-default',
      },
    },
  },
});

export default withBundleAnalyzer(
  withNextra({
    experimental: {
      inlineCss: true,
    },
  }),
);
