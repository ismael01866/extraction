import React from 'react';

import {
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogOverlay,
  DialogRoot,
  DialogSection,
  DialogTitle,
  DialogTrigger,
} from './dialog';

import { render, screen } from '@testing-library/react';

describe('DialogRoot', () => {
  it('passes children through correctly', () => {
    render(
      <DialogRoot>
        <div>Dialog child</div>
      </DialogRoot>,
    );

    expect(screen.getByText(/dialog child/i)).toBeInTheDocument();
  });

  it('preserves displayName', () => {
    expect(DialogRoot.displayName).toBe('Dialog');
  });
});

describe('DialogTrigger', () => {
  it('renders default div and class', () => {
    render(
      <DialogRoot>
        <DialogTrigger>Trigger</DialogTrigger>
      </DialogRoot>,
    );

    const el = screen.getByText(/trigger/i);
    expect(el.tagName).toBe('DIV');
    expect(el).toHaveClass('ex-dialog-trigger');
  });

  it('supports custom element and props', () => {
    render(
      <DialogRoot>
        <DialogTrigger as="button" id="dlg-trigger" className="custom">
          Trigger
        </DialogTrigger>
      </DialogRoot>,
    );

    const el = screen.getByText(/trigger/i);
    expect(el.tagName).toBe('BUTTON');
    expect(el).toHaveAttribute('id', 'dlg-trigger');
    expect(el).toHaveClass('ex-dialog-trigger custom');
  });
});

describe('DialogOverlay', () => {
  it('renders default div and class when forced', () => {
    const { container } = render(
      <DialogRoot>
        <DialogOverlay forceMount />
        <DialogContent forceMount>Content</DialogContent>
      </DialogRoot>,
    );

    const el = container.querySelector('.ex-dialog-overlay');
    expect(el?.tagName).toBe('DIV');
    expect(el).toHaveClass('ex-dialog-overlay');
  });
});

describe('DialogContent', () => {
  it('renders default div and class when forced', () => {
    render(
      <DialogRoot>
        <DialogContent forceMount>Content</DialogContent>
      </DialogRoot>,
    );

    const el = screen.getByText(/content/i);
    expect(el.tagName).toBe('DIV');
    expect(el).toHaveClass('ex-dialog-content');
  });
});

describe('DialogSection', () => {
  it('renders default div and class', () => {
    render(<DialogSection>Section</DialogSection>);
    const el = screen.getByText(/section/i);
    expect(el.tagName).toBe('DIV');
    expect(el).toHaveClass('ex-dialog-section');
  });
});

describe('DialogTitle', () => {
  it('renders default h4 and class when within dialog', () => {
    render(
      <DialogRoot>
        <DialogTitle>Title</DialogTitle>
      </DialogRoot>,
    );

    const el = screen.getByText(/title/i);
    expect(el.tagName).toBe('H4');
    expect(el).toHaveClass('ex-dialog-title');
  });
});

describe('DialogDescription', () => {
  it('renders default p and class when within dialog', () => {
    render(
      <DialogRoot>
        <DialogDescription>Description</DialogDescription>
      </DialogRoot>,
    );

    const el = screen.getByText(/description/i);
    expect(el.tagName).toBe('P');
    expect(el).toHaveClass('ex-dialog-description');
  });
});

describe('DialogClose', () => {
  it('renders default div and class with child content', () => {
    render(
      <DialogRoot>
        <DialogClose>Close</DialogClose>
      </DialogRoot>,
    );

    const el = screen.getByText(/close/i);
    expect(el.tagName).toBe('DIV');
    expect(el).toHaveClass('ex-dialog-close');
  });
});
