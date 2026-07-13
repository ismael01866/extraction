import React from 'react';

import { render, screen } from '@testing-library/react';

import { IconBox } from './index';

describe('IconBox', () => {
  it('renders with a div by default', () => {
    render(<IconBox>Icon</IconBox>);

    const element = screen.getByText(/icon/i);
    expect(element.tagName).toBe('DIV');
  });

  it('applies the default class name', () => {
    render(<IconBox>Icon</IconBox>);

    const element = screen.getByText(/icon/i);
    expect(element).toHaveClass('ex-icon-box');
  });

  it('supports a custom element via as prop', () => {
    render(<IconBox as="span">Icon</IconBox>);

    const element = screen.getByText(/icon/i);
    expect(element.tagName).toBe('SPAN');
  });

  it('passes additional props through', () => {
    render(<IconBox id="icon-box-id">Icon</IconBox>);

    const element = screen.getByText(/icon/i);
    expect(element).toHaveAttribute('id', 'icon-box-id');
  });

  it('preserves display name for debugging', () => {
    expect(IconBox.displayName).toBe('IconBox');
  });
});
