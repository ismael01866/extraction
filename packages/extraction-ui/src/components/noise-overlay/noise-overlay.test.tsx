import React from 'react';

import { describe, expect, it } from 'vitest';

import { NoiseOverlay } from './noise-overlay';

import { render, screen } from '@testing-library/react';

vi.mock('./noise-overlay.png', () => ({ default: 'noise-overlay.png' }));

describe('NoiseOverlay', () => {
  it('renders as a div by default', () => {
    const { container } = render(<NoiseOverlay />);

    expect(container.querySelector('div.ex-noise-overlay')).toBeInTheDocument();
  });

  it('supports an `as` override', () => {
    const { container } = render(<NoiseOverlay as="section" />);

    expect(container.querySelector('section.ex-noise-overlay')).toBeInTheDocument();
  });

  it('renders children', () => {
    render(
      <NoiseOverlay>
        <span data-testid="content">Content</span>
      </NoiseOverlay>,
    );

    expect(screen.getByTestId('content')).toBeInTheDocument();
  });

  it('sets the noise overlay background image as a CSS variable', () => {
    const { container } = render(<NoiseOverlay />);

    const node = container.querySelector('.ex-noise-overlay') as HTMLElement;

    expect(node.style.getPropertyValue('--ex-bg-image-url')).toBe('url(noise-overlay.png)');
  });

  it('merges consumer styles alongside the background image variable', () => {
    const { container } = render(<NoiseOverlay style={{ opacity: 0.5 }} />);

    const node = container.querySelector('.ex-noise-overlay') as HTMLElement;

    expect(node.style.getPropertyValue('--ex-bg-image-url')).toBe('url(noise-overlay.png)');
    expect(node.style.opacity).toBe('0.5');
  });

  it('allows a consumer to override the background image variable', () => {
    const { container } = render(
      <NoiseOverlay style={{ '--ex-bg-image-url': 'url(custom.png)' } as React.CSSProperties} />,
    );

    const node = container.querySelector('.ex-noise-overlay') as HTMLElement;

    expect(node.style.getPropertyValue('--ex-bg-image-url')).toBe('url(custom.png)');
  });

  it('forwards additional props to the underlying element', () => {
    render(<NoiseOverlay data-testid="noise-overlay" aria-hidden />);

    const node = screen.getByTestId('noise-overlay');

    expect(node).toHaveAttribute('aria-hidden');
  });

  it('has the correct displayName', () => {
    expect(NoiseOverlay.displayName).toBe('NoiseOverlay');
  });
});
