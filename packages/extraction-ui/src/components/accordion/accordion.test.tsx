import React from 'react';

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import {
  AccordionContent,
  AccordionHeader,
  AccordionIcon,
  AccordionItem,
  AccordionRoot,
  AccordionSection,
  AccordionTrigger,
} from './accordion';

describe('AccordionRoot', () => {
  let user: ReturnType<typeof userEvent.setup>;

  beforeEach(() => {
    user = userEvent.setup();
  });

  it('renders default div and class', () => {
    render(<AccordionRoot type="single">Accordion</AccordionRoot>);
    const el = screen.getByText(/accordion/i);
    expect(el.tagName).toBe('DIV');
    expect(el).toHaveClass('ex-accordion');
  });

  it('supports as prop and props/classes', () => {
    render(
      <AccordionRoot as="section" id="a" className="x" type="single">
        A
      </AccordionRoot>,
    );
    const el = screen.getByText(/a/i);
    expect(el.tagName).toBe('SECTION');
    expect(el).toHaveAttribute('id', 'a');
    expect(el).toHaveClass('ex-accordion x');
  });

  it('supports event handlers', async () => {
    const onClick = vi.fn();
    render(
      <AccordionRoot onClick={onClick} type="single">
        Click
      </AccordionRoot>,
    );
    const el = screen.getByText(/click/i);
    await user.click(el);
    expect(onClick).toHaveBeenCalled();
  });

  it('preserves displayName', () => {
    expect(AccordionRoot.displayName).toBe('Accordion');
  });
});

describe('AccordionItem', () => {
  it('renders default div and class', () => {
    render(
      <AccordionRoot type="single">
        <AccordionItem value="item-1">Item</AccordionItem>
      </AccordionRoot>,
    );

    const el = screen.getByText(/item/i);
    expect(el.tagName).toBe('DIV');
    expect(el).toHaveClass('ex-accordion-item');
  });
});

describe('AccordionHeader', () => {
  it('renders default div and class', () => {
    render(
      <AccordionRoot type="single">
        <AccordionItem value="item-1">
          <AccordionHeader>Header</AccordionHeader>
        </AccordionItem>
      </AccordionRoot>,
    );

    const el = screen.getByText(/header/i);
    expect(el.tagName).toBe('DIV');
    expect(el).toHaveClass('ex-accordion-header');
  });
});

describe('AccordionTrigger', () => {
  it('renders default button and class and handles clicks', async () => {
    const user = userEvent.setup();
    const onClick = vi.fn();

    render(
      <AccordionRoot type="single">
        <AccordionItem value="item-1">
          <AccordionHeader>
            <AccordionTrigger onClick={onClick}>Toggle</AccordionTrigger>
          </AccordionHeader>
        </AccordionItem>
      </AccordionRoot>,
    );

    const el = screen.getByText(/toggle/i);
    expect(el.tagName).toBe('BUTTON');
    expect(el).toHaveClass('ex-accordion-trigger');
    await user.click(el);
    expect(onClick).toHaveBeenCalled();
  });
});

describe('AccordionContent', () => {
  it('renders default div and class', () => {
    render(
      <AccordionRoot type="single">
        <AccordionItem value="item-1">
          <AccordionContent forceMount>Content</AccordionContent>
        </AccordionItem>
      </AccordionRoot>,
    );

    const el = screen.getByText(/content/i);
    expect(el.tagName).toBe('DIV');
    expect(el).toHaveClass('ex-accordion-content');
  });
});

describe('AccordionSection', () => {
  it('renders default div and class', () => {
    render(<AccordionSection>Section</AccordionSection>);
    const el = screen.getByText(/section/i);
    expect(el.tagName).toBe('DIV');
    expect(el).toHaveClass('ex-accordion-section');
  });
});

describe('AccordionIcon', () => {
  it('renders default div, class and fallback svg', () => {
    const { container } = render(<AccordionIcon />);
    const el = container.querySelector('.ex-accordion-icon');
    expect(el?.tagName).toBe('DIV');
    expect(el).toHaveClass('ex-accordion-icon');
    expect(container.querySelector('.ex-accordion-caret')).toBeInTheDocument();
  });
});
