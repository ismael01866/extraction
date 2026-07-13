import React from 'react';

import { render, screen } from '@testing-library/react';

import { Highlight } from './index';

describe('Highlight', () => {
  it('renders with a mark by default', () => {
    render(<Highlight>Highlighted</Highlight>);

    const element = screen.getByText(/highlighted/i);
    expect(element.tagName).toBe('MARK');
  });

  it('applies the default class name', () => {
    render(<Highlight>Highlighted</Highlight>);

    const element = screen.getByText(/highlighted/i);
    expect(element).toHaveClass('ex-highlight');
  });

  it('supports a custom element via as prop', () => {
    render(<Highlight as="em">Highlighted</Highlight>);

    const element = screen.getByText(/highlighted/i);
    expect(element.tagName).toBe('EM');
  });

  it('passes additional props through', () => {
    render(<Highlight id="highlight-id">Highlighted</Highlight>);

    const element = screen.getByText(/highlighted/i);
    expect(element).toHaveAttribute('id', 'highlight-id');
  });

  it('preserves display name for debugging', () => {
    expect(Highlight.displayName).toBe('Highlight');
  });
});
