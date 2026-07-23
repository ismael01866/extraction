import React from 'react';

import {
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerOverlay,
  DrawerRoot,
  DrawerSection,
  DrawerTitle,
  DrawerTrigger,
} from './drawer';

import { render, screen } from '@testing-library/react';

describe('DrawerRoot', () => {
  it('passes children through correctly', () => {
    render(
      <DrawerRoot>
        <div>Drawer child</div>
      </DrawerRoot>,
    );

    expect(screen.getByText(/drawer child/i)).toBeInTheDocument();
  });

  it('preserves displayName', () => {
    expect(DrawerRoot.displayName).toBe('Drawer');
  });
});

describe('DrawerTrigger', () => {
  it('renders default div and class', () => {
    render(
      <DrawerRoot>
        <DrawerTrigger>Trigger</DrawerTrigger>
      </DrawerRoot>,
    );

    const el = screen.getByText(/trigger/i);
    expect(el.tagName).toBe('DIV');
    expect(el).toHaveClass('ex-drawer-trigger');
  });

  it('supports custom element and props', () => {
    render(
      <DrawerRoot>
        <DrawerTrigger as="button" id="dlg-trigger" className="custom">
          Trigger
        </DrawerTrigger>
      </DrawerRoot>,
    );

    const el = screen.getByText(/trigger/i);
    expect(el.tagName).toBe('BUTTON');
    expect(el).toHaveAttribute('id', 'dlg-trigger');
    expect(el).toHaveClass('ex-drawer-trigger custom');
  });
});

describe('DrawerOverlay', () => {
  it('renders default div and class when forced', () => {
    const { container } = render(
      <DrawerRoot>
        <DrawerOverlay forceMount />
        <DrawerContent forceMount>Content</DrawerContent>
      </DrawerRoot>,
    );

    const el = container.querySelector('.ex-drawer-overlay');
    expect(el?.tagName).toBe('DIV');
    expect(el).toHaveClass('ex-drawer-overlay');
  });
});

describe('DrawerContent', () => {
  it('renders default div and class when forced', () => {
    render(
      <DrawerRoot>
        <DrawerContent forceMount>Content</DrawerContent>
      </DrawerRoot>,
    );

    const el = screen.getByText(/content/i);
    expect(el.tagName).toBe('DIV');
    expect(el).toHaveClass('ex-drawer-content');
  });
});

describe('DrawerSection', () => {
  it('renders default div and class', () => {
    render(<DrawerSection>Section</DrawerSection>);
    const el = screen.getByText(/section/i);
    expect(el.tagName).toBe('DIV');
    expect(el).toHaveClass('ex-drawer-section');
  });
});

describe('DrawerTitle', () => {
  it('renders default h4 and class when within drawer', () => {
    render(
      <DrawerRoot>
        <DrawerTitle>Title</DrawerTitle>
      </DrawerRoot>,
    );

    const el = screen.getByText(/title/i);
    expect(el.tagName).toBe('H4');
    expect(el).toHaveClass('ex-drawer-title');
  });
});

describe('DrawerDescription', () => {
  it('renders default p and class when within drawer', () => {
    render(
      <DrawerRoot>
        <DrawerDescription>Description</DrawerDescription>
      </DrawerRoot>,
    );

    const el = screen.getByText(/description/i);
    expect(el.tagName).toBe('P');
    expect(el).toHaveClass('ex-drawer-description');
  });
});

describe('DrawerClose', () => {
  it('renders default div and class with child content', () => {
    render(
      <DrawerRoot>
        <DrawerClose>Close</DrawerClose>
      </DrawerRoot>,
    );

    const el = screen.getByText(/close/i);
    expect(el.tagName).toBe('DIV');
    expect(el).toHaveClass('ex-drawer-close');
  });
});
