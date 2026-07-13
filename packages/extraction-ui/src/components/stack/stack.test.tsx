import React from 'react';

import { render, screen } from '@testing-library/react';

import { Stack } from './index';

describe('Stack', () => {
  it('renders with a div by default', () => {
    render(<Stack>Stack</Stack>);

    const element = screen.getByText(/stack/i);
    expect(element.tagName).toBe('DIV');
  });

  it('applies the default class name', () => {
    render(<Stack>Stack</Stack>);

    const element = screen.getByText(/stack/i);
    expect(element).toHaveClass('ex-stack');
  });

  it('supports a custom element via as prop', () => {
    render(<Stack as="section">Stack</Stack>);

    const element = screen.getByText(/stack/i);
    expect(element.tagName).toBe('SECTION');
  });

  it('renders separators when separator prop is provided', () => {
    render(
      <Stack separator={<span>·</span>}>
        <span>One</span>
        <span>Two</span>
      </Stack>,
    );

    expect(screen.getByText(/one/i)).toBeInTheDocument();
    expect(screen.getByText(/two/i)).toBeInTheDocument();
    expect(screen.getByText('·')).toBeInTheDocument();
  });

  it('passes additional props through', () => {
    render(<Stack id="stack-id">Stack</Stack>);

    const element = screen.getByText(/stack/i);
    expect(element).toHaveAttribute('id', 'stack-id');
  });

  it('preserves display name for debugging', () => {
    expect(Stack.displayName).toBe('Stack');
  });
});
