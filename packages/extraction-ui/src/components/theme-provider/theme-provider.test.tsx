import React from 'react';

import { render, screen } from '@testing-library/react';

import { ThemeProvider } from './index';

describe('ThemeProvider', () => {
  it('passes children through correctly', () => {
    render(
      <ThemeProvider>
        <div>Child 1</div>
        <span>Child 2</span>
      </ThemeProvider>,
    );

    expect(screen.getByText(/child 1/i)).toBeInTheDocument();
    expect(screen.getByText(/child 2/i)).toBeInTheDocument();
  });

  it('applies the default CSS class name', () => {
    render(<ThemeProvider>Content</ThemeProvider>);

    const element = screen.getByText(/content/i);
    expect(element).toHaveClass('ex-theme-provider');
  });

  it('passes additional classes properly to the element', () => {
    render(<ThemeProvider className="custom-class">Content</ThemeProvider>);

    const element = screen.getByText(/content/i);
    expect(element).toHaveClass('ex-theme-provider custom-class');
  });

  it('preserves display name for debugging', () => {
    expect(ThemeProvider.displayName).toBe('ThemeProvider');
  });
});
