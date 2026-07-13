import React from 'react';

import { render, screen } from '@testing-library/react';

import { Section } from './index';

describe('Section', () => {
  it('renders with a section by default', () => {
    render(<Section>Section</Section>);

    const element = screen.getByText(/section/i);
    expect(element.tagName).toBe('SECTION');
  });

  it('applies the default class name', () => {
    render(<Section>Section</Section>);

    const element = screen.getByText(/section/i);
    expect(element).toHaveClass('ex-section');
  });

  it('supports a custom element via as prop', () => {
    render(<Section as="div">Section</Section>);

    const element = screen.getByText(/section/i);
    expect(element.tagName).toBe('DIV');
  });

  it('passes additional props through', () => {
    render(<Section id="section-id">Section</Section>);

    const element = screen.getByText(/section/i);
    expect(element).toHaveAttribute('id', 'section-id');
  });

  it('preserves display name for debugging', () => {
    expect(Section.displayName).toBe('Section');
  });
});
