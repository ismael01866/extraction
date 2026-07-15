import React from 'react';

import {
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogOverlay,
  AlertDialogRoot,
  AlertDialogSection,
  AlertDialogTitle,
  AlertDialogTrigger,
} from './alert-dialog';

import { render, screen } from '@testing-library/react';

describe('AlertDialogRoot', () => {
  it('passes children through correctly', () => {
    render(
      <AlertDialogRoot>
        <div>Alert child</div>
      </AlertDialogRoot>,
    );

    expect(screen.getByText(/alert child/i)).toBeInTheDocument();
  });

  it('preserves displayName', () => {
    expect(AlertDialogRoot.displayName).toBe('AlertDialog');
  });
});

describe('AlertDialogTrigger', () => {
  it('renders default div and class', () => {
    render(
      <AlertDialogRoot>
        <AlertDialogTrigger>Trigger</AlertDialogTrigger>
      </AlertDialogRoot>,
    );

    const el = screen.getByText(/trigger/i);
    expect(el.tagName).toBe('DIV');
    expect(el).toHaveClass('ex-alert-dialog-trigger');
  });

  it('supports custom element and props', () => {
    render(
      <AlertDialogRoot>
        <AlertDialogTrigger as="button" id="alert-trigger" className="custom">
          Trigger
        </AlertDialogTrigger>
      </AlertDialogRoot>,
    );

    const el = screen.getByText(/trigger/i);
    expect(el.tagName).toBe('BUTTON');
    expect(el).toHaveAttribute('id', 'alert-trigger');
    expect(el).toHaveClass('ex-alert-dialog-trigger custom');
  });
});

describe('AlertDialogOverlay', () => {
  it('renders default div and class when forced', () => {
    const { container } = render(
      <AlertDialogRoot>
        <AlertDialogOverlay forceMount />
        <AlertDialogContent forceMount>Content</AlertDialogContent>
      </AlertDialogRoot>,
    );

    const el = container.querySelector('.ex-alert-dialog-overlay');
    expect(el?.tagName).toBe('DIV');
    expect(el).toHaveClass('ex-alert-dialog-overlay');
  });
});

describe('AlertDialogContent', () => {
  it('renders default div and class when forced', () => {
    render(
      <AlertDialogRoot>
        <AlertDialogContent forceMount>Content</AlertDialogContent>
      </AlertDialogRoot>,
    );

    const el = screen.getByText(/content/i);
    expect(el.tagName).toBe('DIV');
    expect(el).toHaveClass('ex-alert-dialog-content');
  });
});

describe('AlertDialogSection', () => {
  it('renders default div and class', () => {
    render(<AlertDialogSection>Section</AlertDialogSection>);
    const el = screen.getByText(/section/i);
    expect(el.tagName).toBe('DIV');
    expect(el).toHaveClass('ex-alert-dialog-section');
  });
});

describe('AlertDialogCancel', () => {
  it('renders default div and class with child inside content', () => {
    render(
      <AlertDialogRoot>
        <AlertDialogOverlay forceMount />
        <AlertDialogContent forceMount>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
        </AlertDialogContent>
      </AlertDialogRoot>,
    );

    const el = screen.getByText(/cancel/i);
    expect(el.tagName).toBe('DIV');
    expect(el).toHaveClass('ex-alert-dialog-cancel');
  });
});

describe('AlertDialogAction', () => {
  it('renders default div and class with child', () => {
    render(
      <AlertDialogRoot>
        <AlertDialogAction>Action</AlertDialogAction>
      </AlertDialogRoot>,
    );

    const el = screen.getByText(/action/i);
    expect(el.tagName).toBe('DIV');
    expect(el).toHaveClass('ex-alert-dialog-action');
  });
});

describe('AlertDialogTitle', () => {
  it('renders default h2 and class when within alert-dialog', () => {
    render(
      <AlertDialogRoot>
        <AlertDialogTitle>Title</AlertDialogTitle>
      </AlertDialogRoot>,
    );

    const el = screen.getByText(/title/i);
    expect(el.tagName).toBe('H2');
    expect(el).toHaveClass('ex-alert-dialog-title');
  });
});

describe('AlertDialogDescription', () => {
  it('renders default p and class when within alert-dialog', () => {
    render(
      <AlertDialogRoot>
        <AlertDialogDescription>Description</AlertDialogDescription>
      </AlertDialogRoot>,
    );

    const el = screen.getByText(/description/i);
    expect(el.tagName).toBe('P');
    expect(el).toHaveClass('ex-alert-dialog-description');
  });
});
