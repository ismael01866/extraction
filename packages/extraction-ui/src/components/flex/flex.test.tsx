import React from 'react';

import { render, screen } from '@testing-library/react';

import { Flex } from './index';

describe('Flex', () => {
  it('renders with a div by default', () => {
    render(<Flex>Flex</Flex>);

    const element = screen.getByText(/flex/i);
    expect(element.tagName).toBe('DIV');
  });

  it('applies the default class name', () => {
    render(<Flex>Flex</Flex>);

    const element = screen.getByText(/flex/i);
    expect(element).toHaveClass('ex-flex');
  });

  it('supports a custom element via as prop', () => {
    render(<Flex as="section">Flex</Flex>);

    const element = screen.getByText(/flex/i);
    expect(element.tagName).toBe('SECTION');
  });

  it('passes additional props through', () => {
    render(<Flex id="flex-id">Flex</Flex>);

    const element = screen.getByText(/flex/i);
    expect(element).toHaveAttribute('id', 'flex-id');
  });

  it('preserves display name for debugging', () => {
    expect(Flex.displayName).toBe('Flex');
  });
});
