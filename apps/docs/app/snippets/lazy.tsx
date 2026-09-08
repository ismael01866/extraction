import type { ComponentProps } from 'react';

export async function Api(props: ComponentProps<(typeof import('./api.mdx'))['default']>) {
  const { default: Snippet } = await import('./api.mdx');
  return <Snippet {...props} />;
}

export async function FontSize(
  props: ComponentProps<(typeof import('./font-size.mdx'))['default']>,
) {
  const { default: Snippet } = await import('./font-size.mdx');
  return <Snippet {...props} />;
}

export async function Palette(props: ComponentProps<(typeof import('./palette.mdx'))['default']>) {
  const { default: Snippet } = await import('./palette.mdx');
  return <Snippet {...props} />;
}

export async function Position(
  props: ComponentProps<(typeof import('./position.mdx'))['default']>,
) {
  const { default: Snippet } = await import('./position.mdx');
  return <Snippet {...props} />;
}

export async function Shape(props: ComponentProps<(typeof import('./shape.mdx'))['default']>) {
  const { default: Snippet } = await import('./shape.mdx');
  return <Snippet {...props} />;
}

export async function Size(props: ComponentProps<(typeof import('./size.mdx'))['default']>) {
  const { default: Snippet } = await import('./size.mdx');
  return <Snippet {...props} />;
}

export async function Usage(props: ComponentProps<(typeof import('./usage.mdx'))['default']>) {
  const { default: Snippet } = await import('./usage.mdx');
  return <Snippet {...props} />;
}

export async function Variants(
  props: ComponentProps<(typeof import('./variants.mdx'))['default']>,
) {
  const { default: Snippet } = await import('./variants.mdx');
  return <Snippet {...props} />;
}
