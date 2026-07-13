import React from 'react';

import { render, screen } from '@testing-library/react';

import { Image } from './index';

describe('Image', () => {
  it('renders with an img by default', () => {
    render(<Image alt="Brand" />);

    const element = screen.getByRole('img', { name: /brand/i });
    expect(element.tagName).toBe('IMG');
  });

  it('applies the default class name', () => {
    render(<Image alt="Brand" />);

    const element = screen.getByRole('img', { name: /brand/i });
    expect(element).toHaveClass('ex-image');
  });

  it('supports a custom element via as prop', () => {
    render(<Image as="span">Brand</Image>);

    const element = screen.getByText(/brand/i);
    expect(element.tagName).toBe('SPAN');
  });

  it('passes additional props through', () => {
    render(<Image alt="Brand" id="image-id" />);

    const element = screen.getByRole('img', { name: /brand/i });
    expect(element).toHaveAttribute('id', 'image-id');
  });

  it('preserves display name for debugging', () => {
    expect(Image.displayName).toBe('Image');
  });
});
