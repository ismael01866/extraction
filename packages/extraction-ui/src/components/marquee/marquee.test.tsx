import React from 'react';

import { beforeEach, describe, expect, it, vi } from 'vitest';

import { MarqueeItem, MarqueeRoot, MarqueeTrack } from './marquee';
import * as marqueeDrag from './use-marquee-drag';

import { render, screen } from '@testing-library/react';

vi.mock('./use-marquee-drag', () => ({
  useMarqueeDrag: vi.fn(() => ({
    onPointerDown: vi.fn(),
    onPointerMove: vi.fn(),
    onPointerUp: vi.fn(),
  })),
}));

const mockedUseMarqueeDrag = vi.mocked(marqueeDrag.useMarqueeDrag);

beforeEach(() => {
  mockedUseMarqueeDrag.mockClear();
});

describe('MarqueeRoot', () => {
  it('renders a div by default', () => {
    render(<MarqueeRoot data-testid="marquee">Content</MarqueeRoot>);

    const marquee = screen.getByTestId('marquee');

    expect(marquee).toBeInTheDocument();
    expect(marquee.tagName).toBe('DIV');
  });

  it('renders the custom element passed to as', () => {
    render(
      <MarqueeRoot as="section" data-testid="marquee">
        Content
      </MarqueeRoot>,
    );

    expect(screen.getByTestId('marquee').tagName).toBe('SECTION');
  });

  it('applies the default class', () => {
    render(<MarqueeRoot data-testid="marquee">Content</MarqueeRoot>);

    expect(screen.getByTestId('marquee')).toHaveClass('ex-marquee');
  });

  it('sets the default horizontal orientation', () => {
    render(<MarqueeRoot data-testid="marquee">Content</MarqueeRoot>);

    expect(screen.getByTestId('marquee')).toHaveAttribute('data-orientation', 'horizontal');
  });

  it('sets the vertical orientation', () => {
    render(
      <MarqueeRoot orientation="vertical" data-testid="marquee">
        Content
      </MarqueeRoot>,
    );

    expect(screen.getByTestId('marquee')).toHaveAttribute('data-orientation', 'vertical');
  });

  it('passes additional props to the root element', () => {
    render(
      <MarqueeRoot data-testid="marquee" id="marquee-id" aria-label="Marquee content">
        Content
      </MarqueeRoot>,
    );

    const marquee = screen.getByTestId('marquee');

    expect(marquee).toHaveAttribute('id', 'marquee-id');
    expect(marquee).toHaveAttribute('aria-label', 'Marquee content');
  });

  it('renders children', () => {
    render(<MarqueeRoot>Content</MarqueeRoot>);

    expect(screen.getByText('Content')).toBeInTheDocument();
  });

  it('has the correct displayName', () => {
    expect(MarqueeRoot.displayName).toBe('Marquee');
  });
});

describe('MarqueeTrack', () => {
  it('renders a div by default', () => {
    render(
      <MarqueeRoot>
        <MarqueeTrack>Content</MarqueeTrack>
      </MarqueeRoot>,
    );

    const track = document.querySelector('.ex-marquee-track');

    expect(track).toBeInTheDocument();
    expect(track?.tagName).toBe('DIV');
  });

  it('renders the custom element passed to as', () => {
    render(
      <MarqueeRoot>
        <MarqueeTrack as="section">Content</MarqueeTrack>
      </MarqueeRoot>,
    );

    const track = document.querySelector('.ex-marquee-track');

    expect(track?.tagName).toBe('SECTION');
  });

  it('applies the default class', () => {
    render(
      <MarqueeRoot>
        <MarqueeTrack>Content</MarqueeTrack>
      </MarqueeRoot>,
    );

    expect(document.querySelector('.ex-marquee-track')).toHaveClass('ex-marquee-track');
  });

  it('sets data-draggable when draggable is enabled', () => {
    render(
      <MarqueeRoot draggable>
        <MarqueeTrack>Content</MarqueeTrack>
      </MarqueeRoot>,
    );

    const track = document.querySelector('.ex-marquee-track');

    expect(track).toHaveAttribute('data-draggable', 'true');
  });

  it('passes additional props to the track', () => {
    render(
      <MarqueeRoot>
        <MarqueeTrack id="track-id" aria-label="Marquee track" data-custom="value">
          Content
        </MarqueeTrack>
      </MarqueeRoot>,
    );

    const track = document.querySelector('.ex-marquee-track');

    expect(track).toHaveAttribute('id', 'track-id');
    expect(track).toHaveAttribute('aria-label', 'Marquee track');
    expect(track).toHaveAttribute('data-custom', 'value');
  });

  it('has the correct displayName', () => {
    expect(MarqueeTrack.displayName).toBe('Marquee.Track');
  });
});

describe('MarqueeItem', () => {
  it('renders a div by default', () => {
    render(
      <MarqueeRoot>
        <MarqueeTrack>
          <MarqueeItem>Content</MarqueeItem>
        </MarqueeTrack>
      </MarqueeRoot>,
    );

    const items = document.querySelectorAll('.ex-marquee-item');

    expect(items[0].tagName).toBe('DIV');
  });

  it('renders the custom element passed to as', () => {
    render(
      <MarqueeRoot>
        <MarqueeTrack>
          <MarqueeItem as="span">Content</MarqueeItem>
        </MarqueeTrack>
      </MarqueeRoot>,
    );

    const items = document.querySelectorAll('.ex-marquee-item');

    expect(items[0].tagName).toBe('SPAN');
  });

  it('applies the default class', () => {
    render(
      <MarqueeRoot>
        <MarqueeTrack>
          <MarqueeItem>Content</MarqueeItem>
        </MarqueeTrack>
      </MarqueeRoot>,
    );

    const items = document.querySelectorAll('.ex-marquee-item');

    expect(items[0]).toHaveClass('ex-marquee-item');
  });

  it('merges additional classes', () => {
    render(
      <MarqueeRoot>
        <MarqueeTrack>
          <MarqueeItem className="custom-class">Content</MarqueeItem>
        </MarqueeTrack>
      </MarqueeRoot>,
    );

    const items = document.querySelectorAll('.ex-marquee-item');

    expect(items[0]).toHaveClass('ex-marquee-item');
    expect(items[0]).toHaveClass('custom-class');
  });

  it('passes additional props', () => {
    render(
      <MarqueeRoot>
        <MarqueeTrack>
          <MarqueeItem id="item-id" data-custom="value">
            Content
          </MarqueeItem>
        </MarqueeTrack>
      </MarqueeRoot>,
    );

    const items = document.querySelectorAll('.ex-marquee-item');

    expect(items).toHaveLength(2);
    expect(items[0]).toHaveAttribute('id', 'item-id');
    expect(items[0]).toHaveAttribute('data-custom', 'value');
  });

  it('renders children', () => {
    render(
      <MarqueeRoot>
        <MarqueeTrack>
          <MarqueeItem>Content</MarqueeItem>
        </MarqueeTrack>
      </MarqueeRoot>,
    );

    const items = document.querySelectorAll('.ex-marquee-item');

    expect(items).toHaveLength(2);
    expect(items[0]).toHaveTextContent('Content');
    expect(items[1]).toHaveTextContent('Content');
  });

  it('has the correct displayName', () => {
    expect(MarqueeItem.displayName).toBe('Marquee.Item');
  });
});
