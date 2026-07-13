import React from 'react';

import { render, screen } from '@testing-library/react';

import { AbsoluteCenter } from './index';

describe('AbsoluteCenter', () => {
  it('renders with a div by default', () => {
    render(<AbsoluteCenter>Centered</AbsoluteCenter>);

    const element = screen.getByText(/centered/i);
    expect(element.tagName).toBe('DIV');
  });

  it('applies the default class name', () => {
    render(<AbsoluteCenter>Centered</AbsoluteCenter>);

    const element = screen.getByText(/centered/i);
    expect(element).toHaveClass('ex-absolute-center');
  });

  it('supports a custom element via as prop', () => {
    render(<AbsoluteCenter as="section">Centered</AbsoluteCenter>);

    const element = screen.getByText(/centered/i);
    expect(element.tagName).toBe('SECTION');
  });

  it('passes arbitrary props through', () => {
    render(
      <AbsoluteCenter id="center-id" data-test="abc">
        Centered
      </AbsoluteCenter>,
    );

    const element = screen.getByText(/centered/i);
    expect(element).toHaveAttribute('id', 'center-id');
    expect(element).toHaveAttribute('data-test', 'abc');
  });

  it('preserves display name for debugging', () => {
    expect(AbsoluteCenter.displayName).toBe('AbsoluteCenter');
  });
});
