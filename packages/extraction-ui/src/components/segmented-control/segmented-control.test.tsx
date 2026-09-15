import React from 'react';

import { describe, expect, it, vi } from 'vitest';

import {
  SegmentedControlIndicator,
  SegmentedControlItem,
  SegmentedControlItems,
  SegmentedControlRoot,
} from './segmented-control';

import { fireEvent, render, screen } from '@testing-library/react';

describe('SegmentedControlRoot', () => {
  it('renders items from the `items` shorthand', () => {
    render(<SegmentedControlRoot items={['day', 'week', 'month']} />);

    expect(screen.getAllByRole('radio')).toHaveLength(3);
  });

  it('renders items from object form with labels', () => {
    render(
      <SegmentedControlRoot
        items={[
          { value: 'day', label: 'Day' },
          { value: 'week', label: 'Week' },
        ]}
      />,
    );

    expect(screen.getByRole('radio', { name: 'Day' })).toBeInTheDocument();
    expect(screen.getByRole('radio', { name: 'Week' })).toBeInTheDocument();
  });

  it('renders compound children', () => {
    render(
      <SegmentedControlRoot defaultValue="day">
        <SegmentedControlIndicator />
        <SegmentedControlItem value="day">Day</SegmentedControlItem>
        <SegmentedControlItem value="week">Week</SegmentedControlItem>
      </SegmentedControlRoot>,
    );

    expect(screen.getByRole('radio', { name: 'Day' })).toBeInTheDocument();
    expect(screen.getByRole('radio', { name: 'Week' })).toBeInTheDocument();
  });

  it('renders items via `SegmentedControlItems` as compound children', () => {
    render(
      <SegmentedControlRoot defaultValue="day">
        <SegmentedControlIndicator />
        <SegmentedControlItems items={['day', 'week', 'month']} />
      </SegmentedControlRoot>,
    );

    expect(screen.getAllByRole('radio')).toHaveLength(3);
  });

  it('supports a default value', () => {
    render(<SegmentedControlRoot items={['day', 'week', 'month']} defaultValue="week" />);

    expect(screen.getByRole('radio', { name: 'week' })).toHaveAttribute('data-state', 'checked');
    expect(screen.getByRole('radio', { name: 'day' })).toHaveAttribute('data-state', 'unchecked');
  });

  it('selects the first item when no defaultValue is given (items shorthand)', () => {
    render(<SegmentedControlRoot items={['day', 'week', 'month']} />);

    expect(screen.getByRole('radio', { name: 'day' })).toHaveAttribute('data-state', 'checked');
  });

  it('selects the first item when no defaultValue is given (object items)', () => {
    render(
      <SegmentedControlRoot
        items={[
          { value: 'day', label: 'Day' },
          { value: 'week', label: 'Week' },
        ]}
      />,
    );

    expect(screen.getByRole('radio', { name: 'Day' })).toHaveAttribute('data-state', 'checked');
  });

  it('selects the first item when no defaultValue is given (compound children)', () => {
    render(
      <SegmentedControlRoot>
        <SegmentedControlIndicator />
        <SegmentedControlItem value="day">Day</SegmentedControlItem>
        <SegmentedControlItem value="week">Week</SegmentedControlItem>
      </SegmentedControlRoot>,
    );

    expect(screen.getByRole('radio', { name: 'Day' })).toHaveAttribute('data-state', 'checked');
  });

  it('selects the first item when no defaultValue is given (nested SegmentedControlItems)', () => {
    render(
      <SegmentedControlRoot>
        <SegmentedControlIndicator />
        <SegmentedControlItems items={['day', 'week', 'month']} />
      </SegmentedControlRoot>,
    );

    expect(screen.getByRole('radio', { name: 'day' })).toHaveAttribute('data-state', 'checked');
  });

  it('updates when an item is clicked', () => {
    render(<SegmentedControlRoot items={['day', 'week', 'month']} defaultValue="day" />);

    fireEvent.click(screen.getByRole('radio', { name: 'month' }));

    expect(screen.getByRole('radio', { name: 'month' })).toHaveAttribute('data-state', 'checked');
    expect(screen.getByRole('radio', { name: 'day' })).toHaveAttribute('data-state', 'unchecked');
  });

  it('calls onValueChange when an item is selected', () => {
    const onValueChange = vi.fn();

    render(
      <SegmentedControlRoot
        items={['day', 'week', 'month']}
        defaultValue="day"
        onValueChange={onValueChange}
      />,
    );

    fireEvent.click(screen.getByRole('radio', { name: 'week' }));

    expect(onValueChange).toHaveBeenCalledWith('week');
  });

  it('supports controlled value', () => {
    const { rerender } = render(
      <SegmentedControlRoot
        items={['day', 'week', 'month']}
        value="day"
        onValueChange={() => {}}
      />,
    );

    expect(screen.getByRole('radio', { name: 'day' })).toHaveAttribute('data-state', 'checked');

    rerender(
      <SegmentedControlRoot
        items={['day', 'week', 'month']}
        value="month"
        onValueChange={() => {}}
      />,
    );

    expect(screen.getByRole('radio', { name: 'month' })).toHaveAttribute('data-state', 'checked');
  });

  it('sets data-orientation on the root', () => {
    const { container } = render(
      <SegmentedControlRoot items={['day', 'week']} orientation="vertical" />,
    );

    expect(container.querySelector('.ex-segmented-control')).toHaveAttribute(
      'data-orientation',
      'vertical',
    );
  });

  it('renders a hidden input when name is provided', () => {
    const { container } = render(
      <SegmentedControlRoot items={['day', 'week']} defaultValue="week" name="period" />,
    );

    const input = container.querySelector('input[type="hidden"][name="period"]');

    expect(input).toHaveValue('week');
  });

  describe('readOnly', () => {
    it('does not update the value when an item is clicked', () => {
      render(<SegmentedControlRoot items={['day', 'week', 'month']} defaultValue="day" readOnly />);

      fireEvent.click(screen.getByRole('radio', { name: 'month' }));

      expect(screen.getByRole('radio', { name: 'day' })).toHaveAttribute('data-state', 'checked');
      expect(screen.getByRole('radio', { name: 'month' })).toHaveAttribute(
        'data-state',
        'unchecked',
      );
    });

    it('does not call onValueChange', () => {
      const onValueChange = vi.fn();

      render(
        <SegmentedControlRoot
          items={['day', 'week', 'month']}
          defaultValue="day"
          onValueChange={onValueChange}
          readOnly
        />,
      );

      fireEvent.click(screen.getByRole('radio', { name: 'week' }));

      expect(onValueChange).not.toHaveBeenCalled();
    });

    it('renders items as spans instead of buttons', () => {
      const { container } = render(
        <SegmentedControlRoot items={['day', 'week']} defaultValue="day" readOnly />,
      );

      expect(container.querySelectorAll('.ex-segmented-control-item')).toHaveLength(2);
      expect(container.querySelectorAll('button.ex-segmented-control-item')).toHaveLength(0);
    });

    it('sets data-readonly on the root and items', () => {
      const { container } = render(
        <SegmentedControlRoot items={['day', 'week']} defaultValue="day" readOnly />,
      );

      expect(container.querySelector('.ex-segmented-control')).toHaveAttribute(
        'data-readonly',
        'true',
      );
      expect(container.querySelector('.ex-segmented-control-item')).toHaveAttribute(
        'data-readonly',
        'true',
      );
    });

    it('sets aria-readonly on the root', () => {
      const { container } = render(
        <SegmentedControlRoot items={['day', 'week']} defaultValue="day" readOnly />,
      );

      expect(container.querySelector('.ex-segmented-control')).toHaveAttribute(
        'aria-readonly',
        'true',
      );
    });
  });
});

describe('SegmentedControlItem', () => {
  it('throws when used outside SegmentedControlRoot', () => {
    const spy = vi.spyOn(console, 'error').mockImplementation(() => {});

    expect(() => render(<SegmentedControlItem value="day">Day</SegmentedControlItem>)).toThrow(
      'SegmentedControl.Item must be used within SegmentedControl',
    );

    spy.mockRestore();
  });

  it('renders as a button by default', () => {
    const { container } = render(
      <SegmentedControlRoot defaultValue="day">
        <SegmentedControlItem value="day">Day</SegmentedControlItem>
      </SegmentedControlRoot>,
    );

    expect(container.querySelector('button.ex-segmented-control-item')).toBeInTheDocument();
  });

  it('supports an `as` override', () => {
    const { container } = render(
      <SegmentedControlRoot defaultValue="day">
        <SegmentedControlItem value="day" as="a">
          Day
        </SegmentedControlItem>
      </SegmentedControlRoot>,
    );

    expect(container.querySelector('a.ex-segmented-control-item')).toBeInTheDocument();
  });
});

describe('SegmentedControlIndicator', () => {
  it('throws when used outside SegmentedControlRoot', () => {
    const spy = vi.spyOn(console, 'error').mockImplementation(() => {});

    expect(() => render(<SegmentedControlIndicator />)).toThrow(
      'SegmentedControl.Indicator must be used within SegmentedControl',
    );

    spy.mockRestore();
  });

  it('renders and is hidden from the accessibility tree', () => {
    const { container } = render(
      <SegmentedControlRoot items={['day', 'week']} defaultValue="day">
        <SegmentedControlIndicator />
        <SegmentedControlItems items={['day', 'week']} />
      </SegmentedControlRoot>,
    );

    const indicator = container.querySelector('.ex-segmented-control-indicator');

    expect(indicator).toBeInTheDocument();
    expect(indicator).toHaveAttribute('aria-hidden');
  });
});
