import React from 'react';

import { render, screen } from '@testing-library/react';

import { ProgressRoot } from './progress';

describe('ProgressRoot', () => {
  it('renders default div and class', () => {
    render(<ProgressRoot>Progress</ProgressRoot>);
    const el = screen.getByText(/progress/i);
    expect(el.tagName).toBe('DIV');
    expect(el).toHaveClass('ex-progress');
  });
});

describe('ProgressIndicator', () => {
  it('renders default element class', () => {
    render(<div className="ex-progress-indicator">Indicator</div>);
    const el = screen.getByText(/indicator/i);
    expect(el).toHaveClass('ex-progress-indicator');
  });
});
