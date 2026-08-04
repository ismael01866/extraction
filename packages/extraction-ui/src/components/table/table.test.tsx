import React from 'react';

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

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

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
    expect(el).toHaveClass('ex-table', 'x');
  });

  it('supports event handlers', async () => {
    const onClick = vi.fn();

    render(
      <TableRoot onClick={onClick}>
        <tbody>
          <tr>
            <td>Click</td>
          </tr>
        </tbody>
      </TableRoot>,
    );

    const el = screen.getByRole('table');
    await user.click(el);

    expect(onClick).toHaveBeenCalled();
  });

  it('has displayName', () => {
    expect(TableRoot.displayName).toBe('Table');
  });
});

describe('TableCaption', () => {
  it('renders default caption and class', () => {
    render(
      <table>
        <TableCaption>Caption</TableCaption>
      </table>,
    );

    const el = screen.getByText(/caption/i);
    expect(el.tagName).toBe('CAPTION');
    expect(el).toHaveClass('ex-table-caption');
  });
});

describe('TableHead', () => {
  it('renders default thead and class', () => {
    render(
      <table>
        <TableHead>
          <tr>
            <th>Head</th>
          </tr>
        </TableHead>
      </table>,
    );

    const el = screen.getByText(/head/i).closest('thead');
    expect(el?.tagName).toBe('THEAD');
    expect(el).toHaveClass('ex-table-head');
  });
});

describe('TableBody', () => {
  it('renders default tbody and class', () => {
    render(
      <table>
        <TableBody>
          <tr>
            <td>Body</td>
          </tr>
        </TableBody>
      </table>,
    );

    const el = screen.getByText(/body/i).closest('tbody');
    expect(el?.tagName).toBe('TBODY');
    expect(el).toHaveClass('ex-table-body');
  });
});

describe('TableFoot', () => {
  it('renders default tfoot and class', () => {
    render(
      <table>
        <TableFoot>
          <tr>
            <td>Foot</td>
          </tr>
        </TableFoot>
      </table>,
    );

    const el = screen.getByText(/foot/i).closest('tfoot');
    expect(el?.tagName).toBe('TFOOT');
    expect(el).toHaveClass('ex-table-foot');
  });
});

describe('TableRow', () => {
  it('renders default tr and class', () => {
    render(
      <table>
        <tbody>
          <TableRow>
            <td>Row</td>
          </TableRow>
        </tbody>
      </table>,
    );

    const el = screen.getByRole('row');
    expect(el.tagName).toBe('TR');
    expect(el).toHaveClass('ex-table-row');
  });
});

describe('TableHeader', () => {
  it('renders default th and class', () => {
    render(
      <table>
        <thead>
          <tr>
            <TableHeader>Header</TableHeader>
          </tr>
        </thead>
      </table>,
    );

    const el = screen.getByRole('columnheader');
    expect(el.tagName).toBe('TH');
    expect(el).toHaveClass('ex-table-header');
  });
});

describe('TableCell', () => {
  it('renders default td and class', () => {
    render(
      <table>
        <tbody>
          <tr>
            <TableCell>Cell</TableCell>
          </tr>
        </tbody>
      </table>,
    );

    const el = screen.getByRole('cell');
    expect(el.tagName).toBe('TD');
    expect(el).toHaveClass('ex-table-cell');
  });
});
