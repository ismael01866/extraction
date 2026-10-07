import React from 'react';

import { Prose } from './index';

import { render, screen } from '@testing-library/react';

describe('Prose', () => {
  it('renders with a div by default', () => {
    render(<Prose>Prose</Prose>);

    const element = screen.getByText('Prose');
    expect(element.tagName).toBe('DIV');
  });

  it('applies the default class names', () => {
    render(<Prose>Prose</Prose>);

    const element = screen.getByText('Prose');
    expect(element).toHaveClass('ex-prose');
    expect(element).toHaveClass('prose');
  });

  it('supports a custom element via as prop', () => {
    render(<Prose as="article">Prose</Prose>);

    const element = screen.getByText('Prose');
    expect(element.tagName).toBe('ARTICLE');
  });

  it('passes additional props through', () => {
    render(<Prose id="prose-id">Prose</Prose>);

    const element = screen.getByText('Prose');
    expect(element).toHaveAttribute('id', 'prose-id');
  });

  it('renders children', () => {
    render(
      <Prose>
        <h1>Heading</h1>
        <p>Paragraph</p>
      </Prose>,
    );

    expect(screen.getByText('Heading').tagName).toBe('H1');
    expect(screen.getByText('Paragraph').tagName).toBe('P');
  });

  it('preserves display name for debugging', () => {
    expect(Prose.displayName).toBe('Prose');
  });
});
