import React from 'react';

import { CardContent, CardDescription, CardRoot, CardSection, CardTitle } from './card';

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('CardRoot', () => {
  let user: ReturnType<typeof userEvent.setup>;

  beforeEach(() => {
    user = userEvent.setup();
  });

  it('renders default div and class', () => {
    render(<CardRoot>Card</CardRoot>);
    const el = screen.getByText(/card/i);
    expect(el.tagName).toBe('DIV');
    expect(el).toHaveClass('ex-card');
  });

  it('supports as prop and props/classes', () => {
    render(
      <CardRoot as="section" id="c" className="x">
        C
      </CardRoot>,
    );
    const el = screen.getByText(/c/i);
    expect(el.tagName).toBe('SECTION');
    expect(el).toHaveAttribute('id', 'c');
    expect(el).toHaveClass('ex-card x');
  });

  it('supports event handlers', async () => {
    const onClick = vi.fn();
    render(<CardRoot onClick={onClick}>Click</CardRoot>);
    const el = screen.getByText(/click/i);
    await user.click(el);
    expect(onClick).toHaveBeenCalled();
  });

  it('has displayName', () => {
    expect(CardRoot.displayName).toBe('Card');
  });
});

describe('CardContent', () => {
  it('renders default div and class', () => {
    render(<CardContent>Content</CardContent>);
    const el = screen.getByText(/content/i);
    expect(el.tagName).toBe('DIV');
    expect(el).toHaveClass('ex-card-content');
  });
});

describe('CardSection', () => {
  it('renders default div and class', () => {
    render(<CardSection>Section</CardSection>);
    const el = screen.getByText(/section/i);
    expect(el.tagName).toBe('DIV');
    expect(el).toHaveClass('ex-card-section');
  });
});

describe('CardTitle', () => {
  it('renders default h4 and class', () => {
    render(<CardTitle>Title</CardTitle>);
    const el = screen.getByText(/title/i);
    expect(el.tagName).toBe('H4');
    expect(el).toHaveClass('ex-card-title');
  });
});

describe('CardDescription', () => {
  it('renders default p and class', () => {
    render(<CardDescription>Description</CardDescription>);
    const el = screen.getByText(/description/i);
    expect(el.tagName).toBe('P');
    expect(el).toHaveClass('ex-card-description');
  });
});
