import React from 'react';

import { render, screen } from '@testing-library/react';

import { Skeleton } from './skeleton';

describe('Skeleton', () => {
  it('renders default div and classes when loading', () => {
    render(<Skeleton>Content</Skeleton>);
    const el = screen.getByText(/content/i);
    expect(el.tagName).toBe('DIV');
    expect(el).toHaveClass('ex-skeleton ex-skeleton-loading');
  });

  it('supports custom element and loading false', () => {
    render(
      <Skeleton as="span" loading={false} className="custom">
        Content
      </Skeleton>,
    );

    const el = screen.getByText(/content/i);
    expect(el.tagName).toBe('SPAN');
    expect(el).toHaveClass('ex-skeleton custom');
  });
});
