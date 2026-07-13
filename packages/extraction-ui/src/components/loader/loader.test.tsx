import React from 'react';

import { render } from '@testing-library/react';

import { Loader } from './index';

describe('Loader', () => {
  it('renders with a span by default', () => {
    const { container } = render(<Loader />);

    const element = container.querySelector('.ex-loader');
    expect(element?.tagName).toBe('SPAN');
  });

  it('applies the default class name', () => {
    const { container } = render(<Loader />);

    const element = container.querySelector('.ex-loader');
    expect(element).toHaveClass('ex-loader');
  });

  it('supports a custom element via as prop', () => {
    const { container } = render(<Loader as="div" />);

    const element = container.querySelector('.ex-loader');
    expect(element?.tagName).toBe('DIV');
  });

  it('passes additional props through', () => {
    const { container } = render(<Loader id="loader-id" />);

    const element = container.querySelector('.ex-loader');
    expect(element).toHaveAttribute('id', 'loader-id');
  });

  it('preserves display name for debugging', () => {
    expect(Loader.displayName).toBe('Loader');
  });
});
