import React from 'react';

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import {
  BreadcrumbsCurrentLink,
  BreadcrumbsItem,
  BreadcrumbsLink,
  BreadcrumbsList,
  BreadcrumbsRoot,
  BreadcrumbsSeparator,
} from './breadcrumbs';

describe('BreadcrumbsRoot', () => {
  let user: ReturnType<typeof userEvent.setup>;

  beforeEach(() => {
    user = userEvent.setup();
  });

  it('renders with default nav element when no as prop is provided', () => {
    render(<BreadcrumbsRoot>Trail</BreadcrumbsRoot>);

    const el = screen.getByText(/trail/i);
    expect(el.tagName).toBe('NAV');
  });

  it('renders with custom element when as prop is provided', () => {
    render(<BreadcrumbsRoot as="div">Trail</BreadcrumbsRoot>);

    const el = screen.getByText(/trail/i);
    expect(el.tagName).toBe('DIV');
  });

  it('applies the default CSS class name', () => {
    render(<BreadcrumbsRoot>Trail</BreadcrumbsRoot>);

    const el = screen.getByText(/trail/i);
    expect(el).toHaveClass('ex-breadcrumbs');
  });

  it('passes additional props and classes', () => {
    render(
      <BreadcrumbsRoot id="bc-id" className="custom">
        Trail
      </BreadcrumbsRoot>,
    );

    const el = screen.getByText(/trail/i);
    expect(el).toHaveAttribute('id', 'bc-id');
    expect(el).toHaveClass('ex-breadcrumbs custom');
  });

  it('passes event handlers', async () => {
    const onClick = vi.fn();
    render(<BreadcrumbsRoot onClick={onClick}>Click</BreadcrumbsRoot>);

    const el = screen.getByText(/click/i);
    await user.click(el);
    expect(onClick).toHaveBeenCalled();
  });

  it('preserves displayName', () => {
    expect(BreadcrumbsRoot.displayName).toBe('Breadcrumbs');
  });
});

describe('BreadcrumbsList', () => {
  it('renders default div and class', () => {
    render(<BreadcrumbsList>List</BreadcrumbsList>);
    const el = screen.getByText(/list/i);
    expect(el.tagName).toBe('DIV');
    expect(el).toHaveClass('ex-breadcrumbs-list');
  });
});

describe('BreadcrumbsItem', () => {
  it('renders default div and class', () => {
    render(<BreadcrumbsItem>Item</BreadcrumbsItem>);
    const el = screen.getByText(/item/i);
    expect(el.tagName).toBe('DIV');
    expect(el).toHaveClass('ex-breadcrumbs-item');
  });
});

describe('BreadcrumbsLink', () => {
  it('renders default a and class', () => {
    render(<BreadcrumbsLink href="#">Link</BreadcrumbsLink>);
    const el = screen.getByText(/link/i);
    expect(el.tagName).toBe('A');
    expect(el).toHaveClass('ex-breadcrumbs-link');
  });

  it('passes href and props', () => {
    render(
      <BreadcrumbsLink href="/home" id="link-id">
        Home
      </BreadcrumbsLink>,
    );
    const el = screen.getByText(/home/i);
    expect(el).toHaveAttribute('href', '/home');
    expect(el).toHaveAttribute('id', 'link-id');
  });
});

describe('BreadcrumbsCurrentLink', () => {
  it('renders default a and class', () => {
    render(<BreadcrumbsCurrentLink href="#">Current</BreadcrumbsCurrentLink>);
    const el = screen.getByText(/current/i);
    expect(el.tagName).toBe('A');
    expect(el).toHaveClass('ex-breadcrumbs-current-link');
  });
});

describe('BreadcrumbsSeparator', () => {
  it('renders default div and class and fallback svg', () => {
    const { container } = render(<BreadcrumbsSeparator />);
    const el = container.querySelector('.ex-breadcrumbs-separator');
    expect(el?.tagName).toBe('DIV');
    expect(el).toHaveClass('ex-breadcrumbs-separator');
    expect(container.querySelector('.ex-breadcrumbs-caret')).toBeInTheDocument();
  });
});
