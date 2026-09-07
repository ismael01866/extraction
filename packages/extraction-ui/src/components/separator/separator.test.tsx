import React from 'react';

import { Separator } from './index';

import { render, screen } from '@testing-library/react';

describe('Separator', () => {
  it('renders with a div by default', () => {
    render(<Separator />);

    const separator = screen.getByRole('separator');
    expect(separator.tagName).toBe('DIV');
  });

  it('applies the default class name', () => {
    render(<Separator />);

    const separator = screen.getByRole('separator');
    expect(separator).toHaveClass('ex-separator');
  });

  it('supports a custom element via as prop', () => {
    render(<Separator as="span" />);

    const separator = screen.getByRole('separator');
    expect(separator.tagName).toBe('SPAN');
  });

  it('passes additional props through', () => {
    render(<Separator id="separator-id" />);

    const separator = screen.getByRole('separator');
    expect(separator).toHaveAttribute('id', 'separator-id');
  });

  it('preserves display name for debugging', () => {
    expect(Separator.displayName).toBe('Separator');
  });

  describe('content support', () => {
    it('does not set data-has-content when no children are passed', () => {
      render(<Separator />);

      const separator = screen.getByRole('separator');
      expect(separator).not.toHaveAttribute('data-has-content');
      expect(separator).not.toHaveAttribute('data-align');
    });

    it('renders content content when children are passed', () => {
      render(<Separator>Or</Separator>);

      expect(screen.getByText('Or')).toBeInTheDocument();
    });

    it('sets data-has-content when children are passed', () => {
      render(<Separator>Or</Separator>);

      const separator = screen.getByRole('separator');
      expect(separator).toHaveAttribute('data-has-content', 'true');
    });

    it('wraps the content text in ex-separator-content', () => {
      render(<Separator>Or</Separator>);

      const content = screen.getByText('Or');
      expect(content).toHaveClass('ex-separator-content');
    });

    it('renders two line elements around the content', () => {
      render(<Separator>Or</Separator>);

      const separator = screen.getByRole('separator');
      const lines = separator.getElementsByClassName('ex-separator-line');
      expect(lines).toHaveLength(2);
    });

    it('defaults align to center when a content is passed without an align prop', () => {
      render(<Separator>Or</Separator>);

      const separator = screen.getByRole('separator');
      expect(separator).toHaveAttribute('data-align', 'center');
    });

    it.each(['start', 'center', 'end'] as const)(
      'sets data-align="%s" when align="%s" is passed',
      (align) => {
        render(<Separator align={align}>Label</Separator>);

        const separator = screen.getByRole('separator');
        expect(separator).toHaveAttribute('data-align', align);
      },
    );
  });

  describe('orientation', () => {
    it('defaults to horizontal orientation', () => {
      render(<Separator />);

      const separator = screen.getByRole('separator');
      expect(separator).toHaveAttribute('data-orientation', 'horizontal');
    });

    it('supports vertical orientation', () => {
      render(<Separator orientation="vertical" />);

      const separator = screen.getByRole('separator');
      expect(separator).toHaveAttribute('data-orientation', 'vertical');
    });

    it('propagates orientation to the line elements when a content is present', () => {
      render(<Separator orientation="vertical">Or</Separator>);

      const separator = screen.getByRole('separator');
      const lines = separator.getElementsByClassName('ex-separator-line');

      expect(lines).toHaveLength(2);
      Array.from(lines).forEach((line) => {
        expect(line).toHaveAttribute('data-orientation', 'vertical');
      });
    });
  });
});
