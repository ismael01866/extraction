import React from 'react';

import { BentoGrid } from './index';

import { render, screen } from '@testing-library/react';

describe('BentoGrid', () => {
  it('renders with a div by default', () => {
    render(<BentoGrid>BentoGrid</BentoGrid>);

    const element = screen.getByText(/grid/i);
    expect(element.tagName).toBe('DIV');
  });

  it('applies the default class name', () => {
    render(<BentoGrid>BentoGrid</BentoGrid>);

    const element = screen.getByText(/grid/i);
    expect(element).toHaveClass('ex-bento-grid');
  });

  it('supports a custom element via as prop', () => {
    render(<BentoGrid as="section">BentoGrid</BentoGrid>);

    const element = screen.getByText(/grid/i);
    expect(element.tagName).toBe('SECTION');
  });

  it('passes additional props through', () => {
    render(<BentoGrid id="grid-id">BentoGrid</BentoGrid>);

    const element = screen.getByText(/grid/i);
    expect(element).toHaveAttribute('id', 'grid-id');
  });

  it('applies the minChildWidth prop', () => {
    render(<BentoGrid minChildWidth="16rem">BentoGrid</BentoGrid>);

    const element = screen.getByText(/grid/i);
    expect(element).toHaveStyle('--ex-bento-grid-min-child-width: 16rem');
  });

  it('preserves display name for debugging', () => {
    expect(BentoGrid.displayName).toBe('BentoGrid');
  });
});

describe('BentoGrid.Item', () => {
  it('renders with a div by default', () => {
    render(<BentoGrid.Item>BentoGrid Item</BentoGrid.Item>);

    const element = screen.getByText(/item/i);
    expect(element.tagName).toBe('DIV');
  });

  it('applies the default class name', () => {
    render(<BentoGrid.Item>BentoGrid Item</BentoGrid.Item>);

    const element = screen.getByText(/item/i);
    expect(element).toHaveClass('ex-bento-grid-item');
  });

  it('supports a custom element via as prop', () => {
    render(<BentoGrid.Item as="article">BentoGrid Item</BentoGrid.Item>);

    const element = screen.getByText(/item/i);
    expect(element.tagName).toBe('ARTICLE');
  });

  it('passes additional props through', () => {
    render(<BentoGrid.Item id="item-id">BentoGrid Item</BentoGrid.Item>);

    const element = screen.getByText(/item/i);
    expect(element).toHaveAttribute('id', 'item-id');
  });

  it('preserves display name for debugging', () => {
    expect(BentoGrid.Item.displayName).toBe('BentoGrid.Item');
  });
});
