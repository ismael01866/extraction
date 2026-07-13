import React from 'react';

import { render, screen } from '@testing-library/react';

import { Overlay } from './index';

describe('Overlay', () => {
  it('renders with a div by default', () => {
    render(<Overlay>Overlay</Overlay>);

    const element = screen.getByText(/overlay/i);
    expect(element.tagName).toBe('DIV');
  });

  it('applies the default class name', () => {
    render(<Overlay>Overlay</Overlay>);

    const element = screen.getByText(/overlay/i);
    expect(element).toHaveClass('ex-overlay');
  });

  it('supports a custom element via as prop', () => {
    render(<Overlay as="section">Overlay</Overlay>);

    const element = screen.getByText(/overlay/i);
    expect(element.tagName).toBe('SECTION');
  });

  it('passes additional props through', () => {
    render(<Overlay id="overlay-id">Overlay</Overlay>);

    const element = screen.getByText(/overlay/i);
    expect(element).toHaveAttribute('id', 'overlay-id');
  });

  it('preserves display name for debugging', () => {
    expect(Overlay.displayName).toBe('Overlay');
  });
});
