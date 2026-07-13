import React from 'react';

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { SwitchRoot, SwitchThumb } from './switch';

describe('SwitchRoot', () => {
  it('renders button with default class', () => {
    render(<SwitchRoot>Switch</SwitchRoot>);
    const el = screen.getByRole('switch');
    expect(el.tagName).toBe('BUTTON');
    expect(el).toHaveClass('ex-switch');
  });

  it('supports custom props and classes', async () => {
    const user = userEvent.setup();
    const onClick = vi.fn();

    render(
      <SwitchRoot id="switch" className="custom" onClick={onClick}>
        Switch
      </SwitchRoot>,
    );

    const el = screen.getByRole('switch');
    expect(el).toHaveAttribute('id', 'switch');
    expect(el).toHaveClass('ex-switch custom');
    await user.click(el);
    expect(onClick).toHaveBeenCalled();
  });

  it('preserves displayName', () => {
    expect(SwitchRoot.displayName).toBe('Switch');
  });
});

describe('SwitchThumb', () => {
  it('renders span with default class inside SwitchRoot', () => {
    render(
      <SwitchRoot>
        <SwitchThumb>Thumb</SwitchThumb>
      </SwitchRoot>,
    );

    const el = screen.getByText(/thumb/i);
    expect(el.tagName).toBe('SPAN');
    expect(el).toHaveClass('ex-switch-thumb');
  });
});
