import React from 'react';

import {
  EmptyStateContent,
  EmptyStateDescription,
  EmptyStateIndicator,
  EmptyStateRoot,
  EmptyStateSection,
  EmptyStateTitle,
} from './empty-state';

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('EmptyStateRoot', () => {
  let user: ReturnType<typeof userEvent.setup>;

  beforeEach(() => {
    user = userEvent.setup();
  });

  it('renders default div and class', () => {
    render(<EmptyStateRoot>Empty</EmptyStateRoot>);
    const el = screen.getByText(/empty/i);
    expect(el.tagName).toBe('DIV');
    expect(el).toHaveClass('ex-empty-state');
  });

  it('supports as prop and props/classes', () => {
    render(
      <EmptyStateRoot as="section" id="e" className="x">
        E
      </EmptyStateRoot>,
    );
    const el = screen.getByText(/e/i);
    expect(el.tagName).toBe('SECTION');
    expect(el).toHaveAttribute('id', 'e');
    expect(el).toHaveClass('ex-empty-state x');
  });

  it('supports event handlers', async () => {
    const onClick = vi.fn();
    render(<EmptyStateRoot onClick={onClick}>Click</EmptyStateRoot>);
    const el = screen.getByText(/click/i);
    await user.click(el);
    expect(onClick).toHaveBeenCalled();
  });

  it('has displayName', () => {
    expect(EmptyStateRoot.displayName).toBe('EmptyState');
  });
});

describe('EmptyStateContent', () => {
  it('renders default div and class', () => {
    render(<EmptyStateContent>Content</EmptyStateContent>);
    const el = screen.getByText(/content/i);
    expect(el.tagName).toBe('DIV');
    expect(el).toHaveClass('ex-empty-state-content');
  });
});

describe('EmptyStateSection', () => {
  it('renders default div and class', () => {
    render(<EmptyStateSection>Section</EmptyStateSection>);
    const el = screen.getByText(/section/i);
    expect(el.tagName).toBe('DIV');
    expect(el).toHaveClass('ex-empty-state-section');
  });
});

describe('EmptyStateTitle', () => {
  it('renders default h4 and class', () => {
    render(<EmptyStateTitle>Title</EmptyStateTitle>);
    const el = screen.getByText(/title/i);
    expect(el.tagName).toBe('H4');
    expect(el).toHaveClass('ex-empty-state-title');
  });
});

describe('EmptyStateDescription', () => {
  it('renders default p and class', () => {
    render(<EmptyStateDescription>Description</EmptyStateDescription>);
    const el = screen.getByText(/description/i);
    expect(el.tagName).toBe('P');
    expect(el).toHaveClass('ex-empty-state-description');
  });
});

describe('EmptyStateIndicator', () => {
  it('renders default div and class', () => {
    render(<EmptyStateIndicator>Icon</EmptyStateIndicator>);
    const el = screen.getByText(/icon/i);
    expect(el.tagName).toBe('DIV');
    expect(el).toHaveClass('ex-empty-state-indicator');
  });
});
