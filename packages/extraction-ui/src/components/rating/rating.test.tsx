import React from 'react';

import { beforeEach, describe, expect, it, vi } from 'vitest';

import { RatingControl, RatingIndicator, RatingRoot } from './rating';
import * as ratingUtils from './rating.utils';

import { fireEvent, render, screen } from '@testing-library/react';

vi.mock('./rating.utils', async () => {
  const actual = await vi.importActual<typeof import('./rating.utils')>('./rating.utils');

  return {
    ...actual,
    getFractionFromPointer: vi.fn(actual.getFractionFromPointer),
  };
});

const mockedGetFractionFromPointer = vi.mocked(ratingUtils.getFractionFromPointer);

beforeEach(() => {
  mockedGetFractionFromPointer.mockReset();
});

describe('RatingRoot', () => {
  it('renders count controls', () => {
    render(<RatingRoot count={5} />);

    expect(screen.getAllByRole('radio')).toHaveLength(5);
  });

  it('renders explicit children', () => {
    render(
      <RatingRoot>
        <RatingControl value="1" aria-label="one">
          <RatingIndicator />
        </RatingControl>
        <RatingControl value="2" aria-label="two">
          <RatingIndicator />
        </RatingControl>
      </RatingRoot>,
    );

    expect(screen.getByRole('radio', { name: 'one' })).toBeInTheDocument();
    expect(screen.getByRole('radio', { name: 'two' })).toBeInTheDocument();
  });

  it('supports a default value', () => {
    render(<RatingRoot count={5} defaultValue="3" />);

    expect(screen.getByRole('radio', { name: '1' })).toHaveAttribute('data-filled', 'true');
    expect(screen.getByRole('radio', { name: '2' })).toHaveAttribute('data-filled', 'true');
    expect(screen.getByRole('radio', { name: '3' })).toHaveAttribute('data-filled', 'true');
    expect(screen.getByRole('radio', { name: '4' })).toHaveAttribute('data-filled', 'false');
  });

  it('updates when a control is clicked', () => {
    render(<RatingRoot count={5} defaultValue="1" />);

    fireEvent.click(screen.getByRole('radio', { name: '4' }));

    expect(screen.getByRole('radio', { name: '4' })).toHaveAttribute('data-filled', 'true');
    expect(screen.getByRole('radio', { name: '1' })).toHaveAttribute('data-filled', 'true');
  });

  it('calls onValueChange when a control is selected', () => {
    const onValueChange = vi.fn();

    render(<RatingRoot count={5} defaultValue="1" onValueChange={onValueChange} />);

    fireEvent.click(screen.getByRole('radio', { name: '4' }));

    expect(onValueChange).toHaveBeenCalledWith('4');
  });
});

describe('RatingControl', () => {
  it('previews a value on hover', () => {
    render(<RatingRoot count={5} defaultValue="1" />);

    const item = screen.getByRole('radio', { name: '4' });

    fireEvent.mouseMove(item);

    expect(item).toHaveAttribute('data-filled', 'true');
  });

  it('clears the hover preview when leaving the root', () => {
    const { container } = render(<RatingRoot count={5} defaultValue="1" />);

    const item = screen.getByRole('radio', { name: '4' });

    fireEvent.mouseMove(item);
    fireEvent.mouseLeave(container.querySelector('.ex-rating')!);

    expect(item).toHaveAttribute('data-filled', 'false');
    expect(screen.getByRole('radio', { name: '1' })).toHaveAttribute('data-filled', 'true');
  });

  it('supports single mode with non-numeric values', () => {
    render(
      <RatingRoot defaultValue="🍋" single>
        <RatingControl value="🍋" aria-label="🍋">
          <RatingIndicator>🍋</RatingIndicator>
        </RatingControl>

        <RatingControl value="🍊" aria-label="🍊">
          <RatingIndicator>🍊</RatingIndicator>
        </RatingControl>

        <RatingControl value="🍎" aria-label="🍎">
          <RatingIndicator>🍎</RatingIndicator>
        </RatingControl>
      </RatingRoot>,
    );

    expect(screen.getByRole('radio', { name: '🍋' })).toHaveAttribute('data-filled', 'true');

    fireEvent.mouseMove(screen.getByRole('radio', { name: '🍎' }));

    expect(screen.getByRole('radio', { name: '🍎' })).toHaveAttribute('data-filled', 'true');

    expect(screen.getByRole('radio', { name: '🍋' })).toHaveAttribute('data-filled', 'false');
  });
});

describe('RatingControl fractions', () => {
  it('sets the fill from the active fraction', () => {
    render(<RatingRoot count={5} defaultValue="2" fractions={2} />);

    expect(screen.getByRole('radio', { name: '2' }).style.getPropertyValue('--ex-fill')).toBe('1');

    expect(screen.getByRole('radio', { name: '3' }).style.getPropertyValue('--ex-fill')).toBe('0');
  });

  it('updates the fill from pointer position', () => {
    mockedGetFractionFromPointer.mockReturnValue(0.5);

    render(<RatingRoot count={5} defaultValue="1" fractions={2} />);

    const item = screen.getByRole('radio', { name: '3' });

    fireEvent.mouseMove(item);

    expect(mockedGetFractionFromPointer).toHaveBeenCalledWith(expect.anything(), 2);

    expect(item.style.getPropertyValue('--ex-fill')).toBe('0.5');
  });

  it('commits a fractional value on click', () => {
    mockedGetFractionFromPointer.mockReturnValue(0.5);

    const onValueChange = vi.fn();

    render(<RatingRoot count={5} defaultValue="1" fractions={2} onValueChange={onValueChange} />);

    fireEvent.click(screen.getByRole('radio', { name: '3' }), { detail: 1 });

    expect(onValueChange).toHaveBeenCalledWith('2.5');
  });

  it('commits the whole value for keyboard activation', () => {
    const onValueChange = vi.fn();

    render(<RatingRoot count={5} defaultValue="1" fractions={2} onValueChange={onValueChange} />);

    fireEvent.click(screen.getByRole('radio', { name: '3' }), { detail: 0 });

    expect(onValueChange).toHaveBeenCalledWith('3');
    expect(mockedGetFractionFromPointer).not.toHaveBeenCalled();
  });
});

describe('RatingIndicator', () => {
  it('renders the default indicator', () => {
    render(
      <RatingRoot count={1}>
        <RatingControl value="1">
          <RatingIndicator />
        </RatingControl>
      </RatingRoot>,
    );

    expect(document.querySelector('.ex-rating-indicator-bg')).toBeInTheDocument();

    expect(document.querySelector('.ex-rating-indicator-fg')).toBeInTheDocument();
  });

  it('renders custom children in both layers', () => {
    render(
      <RatingRoot count={1}>
        <RatingControl value="1">
          <RatingIndicator>
            <span data-testid="emoji">🍋</span>
          </RatingIndicator>
        </RatingControl>
      </RatingRoot>,
    );

    expect(screen.getAllByTestId('emoji')).toHaveLength(2);
  });
});
