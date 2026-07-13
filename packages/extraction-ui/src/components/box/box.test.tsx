import React from 'react';

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Box } from './index';

describe('Box', () => {
  let user: ReturnType<typeof userEvent.setup>;

  beforeEach(() => {
    user = userEvent.setup();
  });

  it('renders with default div element when no as prop is provided', () => {
    render(<Box>Content</Box>);

    const boxElement = screen.getByText(/content/i);
    expect(boxElement.tagName).toBe('DIV');
  });

  it('renders with custom element when as prop is provided', () => {
    render(<Box as="span">Content</Box>);

    const boxElement = screen.getByText(/content/i);
    expect(boxElement.tagName).toBe('SPAN');
  });

  it('passes children through correctly', () => {
    render(
      <Box>
        <div>Child 1</div>
        <span>Child 2</span>
      </Box>,
    );

    expect(screen.getByText(/child 1/i)).toBeInTheDocument();
    expect(screen.getByText(/child 2/i)).toBeInTheDocument();
  });

  it('applies the default CSS class name', () => {
    render(<Box>Content</Box>);

    const boxElement = screen.getByText(/content/i);
    expect(boxElement).toHaveClass('ex-box');
  });

  it('passes additional classes properly to the element', () => {
    render(<Box className="custom-class">Content</Box>);

    const boxElement = screen.getByText(/content/i);
    expect(boxElement).toHaveClass('ex-box custom-class');
  });

  it('passes additional props to the element', () => {
    render(<Box id="my-box">Content</Box>);

    const boxElement = screen.getByText(/content/i);
    expect(boxElement).toHaveAttribute('id', 'my-box');
  });

  it('passes event handlers to the element', async () => {
    const onClick = vi.fn();

    render(<Box onClick={onClick}>Click me</Box>);

    const boxElement = screen.getByText(/click me/i);
    await user.click(boxElement);

    expect(onClick).toHaveBeenCalled();
  });

  it('passes style attributes to the element', () => {
    render(<Box style={{ color: '#ff0000', fontSize: '16px' }}>Content</Box>);

    const boxElement = screen.getByText(/content/i);
    expect(boxElement).toHaveStyle({ color: '#ff0000', fontSize: '16px' });
  });

  it('preserves display name for debugging', () => {
    expect(Box.displayName).toBe('Box');
  });
});
