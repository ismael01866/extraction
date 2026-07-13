import React from 'react';

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import {
  TableBody,
  TableCaption,
  TableCell,
  TableFoot,
  TableHead,
  TableHeader,
  TableRoot,
  TableRow,
} from './table';

describe('TableRoot', () => {
  let user: ReturnType<typeof userEvent.setup>;

  beforeEach(() => {
    user = userEvent.setup();
  });

  it('renders default table and class', () => {
    render(
      <TableRoot>
        <tbody />
      </TableRoot>,
    );
    const el = screen.getByRole('table');
    expect(el.tagName).toBe('TABLE');
    expect(el).toHaveClass('ex-table');
  });

  it('supports as prop and props/classes', () => {
    render(
      <TableRoot as="div" id="t" className="x">
        T
      </TableRoot>,
    );
    const el = screen.getByText(/t/i);
    expect(el.tagName).toBe('DIV');
    expect(el).toHaveAttribute('id', 't');
    expect(el).toHaveClass('ex-table x');
  });

  it('supports event handlers', async () => {
    const onClick = vi.fn();
    render(<TableRoot onClick={onClick}>Click</TableRoot>);
    const el = screen.getByText(/click/i);
    await user.click(el);
    expect(onClick).toHaveBeenCalled();
  });

  it('has displayName', () => {
    expect(TableRoot.displayName).toBe('Table');
  });
});

describe('TableCaption', () => {
  it('renders default caption and class', () => {
    render(<TableCaption>Caption</TableCaption>);
    const el = screen.getByText(/caption/i);
    expect(el.tagName).toBe('CAPTION');
    expect(el).toHaveClass('ex-table-caption');
  });
});

describe('TableHead', () => {
  it('renders default thead and class', () => {
    render(<TableHead>Head</TableHead>);
    const el = screen.getByText(/head/i);
    expect(el.tagName).toBe('THEAD');
    expect(el).toHaveClass('ex-table-head');
  });
});

describe('TableBody', () => {
  it('renders default tbody and class', () => {
    render(<TableBody>Body</TableBody>);
    const el = screen.getByText(/body/i);
    expect(el.tagName).toBe('TBODY');
    expect(el).toHaveClass('ex-table-body');
  });
});

describe('TableFoot', () => {
  it('renders default tfoot and class', () => {
    render(<TableFoot>Foot</TableFoot>);
    const el = screen.getByText(/foot/i);
    expect(el.tagName).toBe('TFOOT');
    expect(el).toHaveClass('ex-table-foot');
  });
});

describe('TableRow', () => {
  it('renders default tr and class', () => {
    render(<TableRow>Row</TableRow>);
    const el = screen.getByText(/row/i);
    expect(el.tagName).toBe('TR');
    expect(el).toHaveClass('ex-table-row');
  });
});

describe('TableHeader', () => {
  it('renders default th and class', () => {
    render(<TableHeader>Header</TableHeader>);
    const el = screen.getByText(/header/i);
    expect(el.tagName).toBe('TH');
    expect(el).toHaveClass('ex-table-header');
  });
});

describe('TableCell', () => {
  it('renders default td and class', () => {
    render(<TableCell>Cell</TableCell>);
    const el = screen.getByText(/cell/i);
    expect(el.tagName).toBe('TD');
    expect(el).toHaveClass('ex-table-cell');
  });
});
