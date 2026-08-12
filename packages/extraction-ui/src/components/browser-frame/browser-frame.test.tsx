import React from 'react';

import {
  BrowserFrameActions,
  BrowserFrameAddress,
  BrowserFrameContent,
  BrowserFrameControls,
  BrowserFrameRoot,
  BrowserFrameToolbar,
} from './browser-frame';

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('BrowserFrame subcomponents share Element passthrough behavior', () => {
  let user: ReturnType<typeof userEvent.setup>;

  beforeEach(() => {
    user = userEvent.setup();
  });

  it('renders with default div element when no as prop is provided', () => {
    render(<BrowserFrameRoot>Content</BrowserFrameRoot>);

    expect(screen.getByText(/content/i).tagName).toBe('DIV');
  });

  it('renders with custom element when as prop is provided', () => {
    render(<BrowserFrameRoot as="section">Content</BrowserFrameRoot>);

    expect(screen.getByText(/content/i).tagName).toBe('SECTION');
  });

  it('passes children through correctly', () => {
    render(
      <BrowserFrameRoot>
        <div>Child 1</div>
        <span>Child 2</span>
      </BrowserFrameRoot>,
    );

    expect(screen.getByText(/child 1/i)).toBeInTheDocument();
    expect(screen.getByText(/child 2/i)).toBeInTheDocument();
  });

  it('merges additional classes with the default class name', () => {
    render(<BrowserFrameRoot className="custom-class">Content</BrowserFrameRoot>);

    const el = screen.getByText(/content/i);

    expect(el).toHaveClass('ex-browser-frame');
    expect(el).toHaveClass('custom-class');
  });

  it('passes additional props to the element', () => {
    render(<BrowserFrameRoot id="my-root">Content</BrowserFrameRoot>);

    expect(screen.getByText(/content/i)).toHaveAttribute('id', 'my-root');
  });

  it('passes event handlers to the element', async () => {
    const onClick = vi.fn();

    render(<BrowserFrameRoot onClick={onClick}>Click me</BrowserFrameRoot>);

    await user.click(screen.getByText(/click me/i));

    expect(onClick).toHaveBeenCalled();
  });

  it('passes style attributes to the element', () => {
    render(
      <BrowserFrameRoot style={{ color: '#ff0000', fontSize: '16px' }}>Content</BrowserFrameRoot>,
    );

    expect(screen.getByText(/content/i)).toHaveStyle({
      color: '#ff0000',
      fontSize: '16px',
    });
  });
});

describe('BrowserFrameRoot', () => {
  it('applies the default CSS class name', () => {
    render(<BrowserFrameRoot>Content</BrowserFrameRoot>);

    expect(screen.getByText(/content/i)).toHaveClass('ex-browser-frame');
  });

  it('preserves display name for debugging', () => {
    expect(BrowserFrameRoot.displayName).toBe('BrowserFrame');
  });
});

describe('BrowserFrameToolbar', () => {
  it('applies the default CSS class name', () => {
    render(<BrowserFrameToolbar>Toolbar</BrowserFrameToolbar>);

    expect(screen.getByText(/toolbar/i)).toHaveClass('ex-browser-frame-toolbar');
  });

  it('preserves display name for debugging', () => {
    expect(BrowserFrameToolbar.displayName).toBe('BrowserFrame.Toolbar');
  });
});

describe('BrowserFrameControls', () => {
  it('applies the default CSS class name', () => {
    render(<BrowserFrameControls />);

    expect(document.querySelector('.ex-browser-frame-controls')).toHaveClass(
      'ex-browser-frame-controls',
    );
  });

  it('renders default browser control icons when no children are provided', () => {
    render(<BrowserFrameControls />);

    expect(document.querySelectorAll('.ex-browser-frame-controls-icon')).toHaveLength(3);
  });

  it('renders custom children instead of default controls', () => {
    render(
      <BrowserFrameControls>
        <span>Custom controls</span>
      </BrowserFrameControls>,
    );

    expect(screen.getByText(/custom controls/i)).toBeInTheDocument();
    expect(document.querySelectorAll('.ex-browser-frame-controls-icon')).toHaveLength(0);
  });

  it('preserves display name for debugging', () => {
    expect(BrowserFrameControls.displayName).toBe('BrowserFrame.Controls');
  });
});

describe('BrowserFrameActions', () => {
  it('applies the default CSS class name', () => {
    render(<BrowserFrameActions>Actions</BrowserFrameActions>);

    expect(screen.getByText(/actions/i)).toHaveClass('ex-browser-frame-actions');
  });

  it('renders default action icon when no children are provided', () => {
    render(<BrowserFrameActions />);

    expect(document.querySelectorAll('.ex-browser-frame-actions-icon')).toHaveLength(1);
  });

  it('renders custom children instead of the default action icon', () => {
    render(
      <BrowserFrameActions>
        <span>Custom actions</span>
      </BrowserFrameActions>,
    );

    expect(screen.getByText(/custom actions/i)).toBeInTheDocument();
    expect(document.querySelectorAll('.ex-browser-frame-actions-icon')).toHaveLength(0);
  });

  it('preserves display name for debugging', () => {
    expect(BrowserFrameActions.displayName).toBe('BrowserFrame.Actions');
  });
});

describe('BrowserFrameAddress', () => {
  it('applies the default CSS class name', () => {
    render(<BrowserFrameAddress>Address</BrowserFrameAddress>);

    expect(screen.getByText(/address/i)).toHaveClass('ex-browser-frame-address');
  });

  it('preserves display name for debugging', () => {
    expect(BrowserFrameAddress.displayName).toBe('BrowserFrame.Address');
  });
});

describe('BrowserFrameContent', () => {
  it('applies the default CSS class name', () => {
    render(<BrowserFrameContent>Content</BrowserFrameContent>);

    expect(screen.getByText(/content/i)).toHaveClass('ex-browser-frame-content');
  });

  it('preserves display name for debugging', () => {
    expect(BrowserFrameContent.displayName).toBe('BrowserFrame.Content');
  });
});
