import React from 'react';

import { Title } from './index';

import { render, screen } from '@testing-library/react';

describe('Title', () => {
  it('renders with a p by default', () => {
    render(<Title>Title</Title>);

    const element = screen.getByText('Title');
    expect(element.tagName).toBe('P');
  });

  it('applies the default class name', () => {
    render(<Title>Title</Title>);

    const element = screen.getByText('Title');
    expect(element).toHaveClass('ex-title');
  });

  it('supports a custom element via as prop', () => {
    render(<Title as="div">Title</Title>);

    const element = screen.getByText('Title');
    expect(element.tagName).toBe('DIV');
  });

  it('passes additional props through', () => {
    render(<Title id="title-id">Title</Title>);

    const element = screen.getByText('Title');
    expect(element).toHaveAttribute('id', 'title-id');
  });

  it('preserves display name for debugging', () => {
    expect(Title.displayName).toBe('Title');
  });
});
