import React from 'react';

import { ProgressiveBlur } from './index';

import { render, screen } from '@testing-library/react';

describe('ProgressiveBlur', () => {
  it('renders with a div by default', () => {
    render(<ProgressiveBlur data-testid="blur" />);

    const element = screen.getByTestId('blur');
    expect(element.tagName).toBe('DIV');
  });

  it('applies the default class name', () => {
    render(<ProgressiveBlur data-testid="blur" />);

    const element = screen.getByTestId('blur');
    expect(element).toHaveClass('ex-progressive-blur');
  });

  it('is hidden from assistive technology', () => {
    render(<ProgressiveBlur data-testid="blur" />);

    const element = screen.getByTestId('blur');
    expect(element).toHaveAttribute('aria-hidden', 'true');
  });

  it('defaults to the bottom side', () => {
    render(<ProgressiveBlur data-testid="blur" />);

    const element = screen.getByTestId('blur');
    expect(element).toHaveAttribute('data-side', 'bottom');
  });

  it('supports a custom side', () => {
    render(<ProgressiveBlur data-testid="blur" side="top" />);

    const element = screen.getByTestId('blur');
    expect(element).toHaveAttribute('data-side', 'top');
  });

  it('renders 6 layers by default', () => {
    render(<ProgressiveBlur data-testid="blur" />);

    const element = screen.getByTestId('blur');
    expect(element.children).toHaveLength(6);
    expect(element.style.getPropertyValue('--ex-layers')).toBe('6');
  });

  it('renders a custom number of layers', () => {
    render(<ProgressiveBlur data-testid="blur" layers={3} />);

    const element = screen.getByTestId('blur');
    expect(element.children).toHaveLength(3);
    expect(element.style.getPropertyValue('--ex-layers')).toBe('3');
  });

  it('assigns an index css variable to each layer', () => {
    render(<ProgressiveBlur data-testid="blur" layers={4} />);

    const element = screen.getByTestId('blur');
    const indexes = Array.from(element.children).map((child) =>
      (child as HTMLElement).style.getPropertyValue('--ex-i'),
    );

    expect(indexes).toEqual(['0', '1', '2', '3']);
  });

  it('merges custom styles with the layers variable', () => {
    render(<ProgressiveBlur data-testid="blur" layers={5} style={{ height: '100px' }} />);

    const element = screen.getByTestId('blur');
    expect(element.style.height).toBe('100px');
    expect(element.style.getPropertyValue('--ex-layers')).toBe('5');
  });

  it('supports a custom element via as prop', () => {
    render(<ProgressiveBlur as="section" data-testid="blur" />);

    const element = screen.getByTestId('blur');
    expect(element.tagName).toBe('SECTION');
  });

  it('passes additional props through', () => {
    render(<ProgressiveBlur data-testid="blur" id="blur-id" />);

    const element = screen.getByTestId('blur');
    expect(element).toHaveAttribute('id', 'blur-id');
  });

  it('preserves display name for debugging', () => {
    expect(ProgressiveBlur.displayName).toBe('ProgressiveBlur');
  });
});
