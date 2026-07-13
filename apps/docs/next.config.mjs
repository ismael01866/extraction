import nextra from 'nextra';

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

export default withNextra({});
