import React from 'react';

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import {
  CalloutContent,
  CalloutDescription,
  CalloutIndicator,
  CalloutRoot,
  CalloutTitle,
} from './callout';

describe('CalloutRoot', () => {
  let user: ReturnType<typeof userEvent.setup>;

  beforeEach(() => {
    user = userEvent.setup();
  });

  it('renders default div and class', () => {
    render(<CalloutRoot>Callout</CalloutRoot>);
    const el = screen.getByText(/callout/i);
    expect(el.tagName).toBe('DIV');
    expect(el).toHaveClass('ex-callout');
  });

  it('supports as prop and props/classes', () => {
    render(
      <CalloutRoot as="section" id="c-id" className="x">
        C
      </CalloutRoot>,
    );
    const el = screen.getByText(/c/i);
    expect(el.tagName).toBe('SECTION');
    expect(el).toHaveAttribute('id', 'c-id');
    expect(el).toHaveClass('ex-callout x');
  });

  it('supports event handlers', async () => {
    const onClick = vi.fn();
    render(<CalloutRoot onClick={onClick}>Click</CalloutRoot>);
    const el = screen.getByText(/click/i);
    await user.click(el);
    expect(onClick).toHaveBeenCalled();
  });

  it('has displayName', () => {
    expect(CalloutRoot.displayName).toBe('Callout');
  });
});

describe('CalloutContent', () => {
  it('renders default div and class', () => {
    render(<CalloutContent>Content</CalloutContent>);
    const el = screen.getByText(/content/i);
    expect(el.tagName).toBe('DIV');
    expect(el).toHaveClass('ex-callout-content');
  });
});

describe('CalloutIndicator', () => {
  it('renders default div and fallback svg', () => {
    const { container } = render(<CalloutIndicator />);
    const el = container.querySelector('.ex-callout-indicator');
    expect(el?.tagName).toBe('DIV');
    expect(container.querySelector('.ex-callout-indicator-icon')).toBeInTheDocument();
  });
});

describe('CalloutTitle', () => {
  it('renders default h3 and class', () => {
    render(<CalloutTitle>Title</CalloutTitle>);
    const el = screen.getByText(/title/i);
    expect(el.tagName).toBe('H3');
    expect(el).toHaveClass('ex-callout-title');
  });
});

describe('CalloutDescription', () => {
  it('renders default p and class', () => {
    render(<CalloutDescription>Description</CalloutDescription>);
    const el = screen.getByText(/description/i);
    expect(el.tagName).toBe('P');
    expect(el).toHaveClass('ex-callout-description');
  });
});
