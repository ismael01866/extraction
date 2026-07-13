import React from 'react';

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import {
  FieldError,
  FieldHelper,
  FieldLabel,
  FieldRequiredIndicator,
  FieldRoot,
  FieldSuccess,
} from './field';

describe('FieldRoot', () => {
  let user: ReturnType<typeof userEvent.setup>;

  beforeEach(() => {
    user = userEvent.setup();
  });

  it('renders default div and class', () => {
    render(<FieldRoot>Field</FieldRoot>);
    const el = screen.getByText(/field/i);
    expect(el.tagName).toBe('DIV');
    expect(el).toHaveClass('ex-field');
  });

  it('supports as prop and props/classes', () => {
    render(
      <FieldRoot as="section" id="f" className="x">
        F
      </FieldRoot>,
    );
    const el = screen.getByText(/f/i);
    expect(el.tagName).toBe('SECTION');
    expect(el).toHaveAttribute('id', 'f');
    expect(el).toHaveClass('ex-field x');
  });

  it('supports event handlers', async () => {
    const onClick = vi.fn();
    render(<FieldRoot onClick={onClick}>Click</FieldRoot>);
    const el = screen.getByText(/click/i);
    await user.click(el);
    expect(onClick).toHaveBeenCalled();
  });

  it('has displayName', () => {
    expect(FieldRoot.displayName).toBe('Field');
  });
});

describe('FieldLabel', () => {
  it('renders default label element and class', () => {
    render(<FieldLabel>Label</FieldLabel>);
    const el = screen.getByText(/label/i);
    expect(el.tagName).toBe('LABEL');
    expect(el).toHaveClass('ex-field-label');
  });
});

describe('FieldRequiredIndicator', () => {
  it('renders default span and default content', () => {
    render(<FieldRequiredIndicator />);
    const el = screen.getByText(/\*/i);
    expect(el.tagName).toBe('SPAN');
    expect(el).toHaveClass('ex-field-required-indicator');
  });
});

describe('FieldHelper', () => {
  it('renders default span and class', () => {
    render(<FieldHelper>Helper</FieldHelper>);
    const el = screen.getByText(/helper/i);
    expect(el.tagName).toBe('SPAN');
    expect(el).toHaveClass('ex-field-helper');
  });
});

describe('FieldError', () => {
  it('renders default span and class', () => {
    render(<FieldError>Error</FieldError>);
    const el = screen.getByText(/error/i);
    expect(el.tagName).toBe('SPAN');
    expect(el).toHaveClass('ex-field-error');
  });
});

describe('FieldSuccess', () => {
  it('renders default span and class', () => {
    render(<FieldSuccess>Success</FieldSuccess>);
    const el = screen.getByText(/success/i);
    expect(el.tagName).toBe('SPAN');
    expect(el).toHaveClass('ex-field-success');
  });
});
