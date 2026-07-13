import React from 'react';

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import {
  AppLayoutAside,
  AppLayoutBody,
  AppLayoutFooter,
  AppLayoutHeader,
  AppLayoutMain,
  AppLayoutRoot,
  AppLayoutSection,
  AppLayoutSidenav,
} from './app-layout';

describe('AppLayoutRoot', () => {
  let user: ReturnType<typeof userEvent.setup>;

  beforeEach(() => {
    user = userEvent.setup();
  });

  it('renders with default div element when no as prop is provided', () => {
    render(<AppLayoutRoot>Content</AppLayoutRoot>);

    const el = screen.getByText(/content/i);
    expect(el.tagName).toBe('DIV');
  });

  it('renders with custom element when as prop is provided', () => {
    render(<AppLayoutRoot as="section">Content</AppLayoutRoot>);

    const el = screen.getByText(/content/i);
    expect(el.tagName).toBe('SECTION');
  });

  it('passes children through correctly', () => {
    render(
      <AppLayoutRoot>
        <div>Child 1</div>
        <span>Child 2</span>
      </AppLayoutRoot>,
    );

    expect(screen.getByText(/child 1/i)).toBeInTheDocument();
    expect(screen.getByText(/child 2/i)).toBeInTheDocument();
  });

  it('applies the default CSS class name', () => {
    render(<AppLayoutRoot>Content</AppLayoutRoot>);

    const el = screen.getByText(/content/i);
    expect(el).toHaveClass('ex-app-layout');
  });

  it('passes additional classes properly to the element', () => {
    render(<AppLayoutRoot className="custom-class">Content</AppLayoutRoot>);

    const el = screen.getByText(/content/i);
    expect(el).toHaveClass('ex-app-layout custom-class');
  });

  it('passes additional props to the element', () => {
    render(<AppLayoutRoot id="my-root">Content</AppLayoutRoot>);

    const el = screen.getByText(/content/i);
    expect(el).toHaveAttribute('id', 'my-root');
  });

  it('passes event handlers to the element', async () => {
    const onClick = vi.fn();

    render(<AppLayoutRoot onClick={onClick}>Click me</AppLayoutRoot>);

    const el = screen.getByText(/click me/i);
    await user.click(el);

    expect(onClick).toHaveBeenCalled();
  });

  it('passes style attributes to the element', () => {
    render(<AppLayoutRoot style={{ color: '#ff0000', fontSize: '16px' }}>Content</AppLayoutRoot>);

    const el = screen.getByText(/content/i);
    expect(el).toHaveStyle({ color: '#ff0000', fontSize: '16px' });
  });

  it('preserves display name for debugging', () => {
    expect(AppLayoutRoot.displayName).toBe('AppLayout');
  });
});

describe('AppLayoutHeader', () => {
  let user: ReturnType<typeof userEvent.setup>;

  beforeEach(() => {
    user = userEvent.setup();
  });

  it('renders with default header element when no as prop is provided', () => {
    render(<AppLayoutHeader>Header</AppLayoutHeader>);

    const el = screen.getByText(/header/i);
    expect(el.tagName).toBe('HEADER');
  });

  it('renders with custom element when as prop is provided', () => {
    render(<AppLayoutHeader as="div">Header</AppLayoutHeader>);

    const el = screen.getByText(/header/i);
    expect(el.tagName).toBe('DIV');
  });

  it('passes children through correctly', () => {
    render(
      <AppLayoutHeader>
        <div>Child 1</div>
        <span>Child 2</span>
      </AppLayoutHeader>,
    );

    expect(screen.getByText(/child 1/i)).toBeInTheDocument();
    expect(screen.getByText(/child 2/i)).toBeInTheDocument();
  });

  it('applies the default CSS class name', () => {
    render(<AppLayoutHeader>Header</AppLayoutHeader>);

    const el = screen.getByText(/header/i);
    expect(el).toHaveClass('ex-app-layout-header');
  });

  it('passes additional classes properly to the element', () => {
    render(<AppLayoutHeader className="custom-class">Header</AppLayoutHeader>);

    const el = screen.getByText(/header/i);
    expect(el).toHaveClass('ex-app-layout-header custom-class');
  });

  it('passes additional props to the element', () => {
    render(<AppLayoutHeader id="my-header">Header</AppLayoutHeader>);

    const el = screen.getByText(/header/i);
    expect(el).toHaveAttribute('id', 'my-header');
  });

  it('passes event handlers to the element', async () => {
    const onClick = vi.fn();

    render(<AppLayoutHeader onClick={onClick}>Click me</AppLayoutHeader>);

    const el = screen.getByText(/click me/i);
    await user.click(el);

    expect(onClick).toHaveBeenCalled();
  });

  it('passes style attributes to the element', () => {
    render(
      <AppLayoutHeader style={{ color: '#00ff00', fontSize: '14px' }}>Header</AppLayoutHeader>,
    );

    const el = screen.getByText(/header/i);
    expect(el).toHaveStyle({ color: '#00ff00', fontSize: '14px' });
  });

  it('preserves display name for debugging', () => {
    expect(AppLayoutHeader.displayName).toBe('AppLayout.Header');
  });
});

describe('AppLayoutBody', () => {
  let user: ReturnType<typeof userEvent.setup>;

  beforeEach(() => {
    user = userEvent.setup();
  });

  it('renders with default div element when no as prop is provided', () => {
    render(<AppLayoutBody>Body</AppLayoutBody>);

    const el = screen.getByText(/body/i);
    expect(el.tagName).toBe('DIV');
  });

  it('renders with custom element when as prop is provided', () => {
    render(<AppLayoutBody as="section">Body</AppLayoutBody>);

    const el = screen.getByText(/body/i);
    expect(el.tagName).toBe('SECTION');
  });

  it('passes children through correctly', () => {
    render(
      <AppLayoutBody>
        <div>Child 1</div>
        <span>Child 2</span>
      </AppLayoutBody>,
    );

    expect(screen.getByText(/child 1/i)).toBeInTheDocument();
    expect(screen.getByText(/child 2/i)).toBeInTheDocument();
  });

  it('applies the default CSS class name', () => {
    render(<AppLayoutBody>Body</AppLayoutBody>);

    const el = screen.getByText(/body/i);
    expect(el).toHaveClass('ex-app-layout-body');
  });

  it('passes additional classes properly to the element', () => {
    render(<AppLayoutBody className="custom-class">Body</AppLayoutBody>);

    const el = screen.getByText(/body/i);
    expect(el).toHaveClass('ex-app-layout-body custom-class');
  });

  it('passes additional props to the element', () => {
    render(<AppLayoutBody id="my-body">Body</AppLayoutBody>);

    const el = screen.getByText(/body/i);
    expect(el).toHaveAttribute('id', 'my-body');
  });

  it('passes event handlers to the element', async () => {
    const onClick = vi.fn();

    render(<AppLayoutBody onClick={onClick}>Click me</AppLayoutBody>);

    const el = screen.getByText(/click me/i);
    await user.click(el);

    expect(onClick).toHaveBeenCalled();
  });

  it('passes style attributes to the element', () => {
    render(<AppLayoutBody style={{ color: '#0000ff', fontSize: '10px' }}>Body</AppLayoutBody>);

    const el = screen.getByText(/body/i);
    expect(el).toHaveStyle({ color: '#0000ff', fontSize: '10px' });
  });

  it('preserves display name for debugging', () => {
    expect(AppLayoutBody.displayName).toBe('AppLayout.Body');
  });
});

describe('AppLayoutSidenav', () => {
  let user: ReturnType<typeof userEvent.setup>;

  beforeEach(() => {
    user = userEvent.setup();
  });

  it('renders with default nav element when no as prop is provided', () => {
    render(<AppLayoutSidenav>Nav</AppLayoutSidenav>);

    const el = screen.getByText(/nav/i);
    expect(el.tagName).toBe('NAV');
  });

  it('renders with custom element when as prop is provided', () => {
    render(<AppLayoutSidenav as="div">Nav</AppLayoutSidenav>);

    const el = screen.getByText(/nav/i);
    expect(el.tagName).toBe('DIV');
  });

  it('passes children through correctly', () => {
    render(
      <AppLayoutSidenav>
        <div>Child 1</div>
        <span>Child 2</span>
      </AppLayoutSidenav>,
    );

    expect(screen.getByText(/child 1/i)).toBeInTheDocument();
    expect(screen.getByText(/child 2/i)).toBeInTheDocument();
  });

  it('applies the default CSS class name', () => {
    render(<AppLayoutSidenav>Nav</AppLayoutSidenav>);

    const el = screen.getByText(/nav/i);
    expect(el).toHaveClass('ex-app-layout-sidenav');
  });

  it('passes additional classes properly to the element', () => {
    render(<AppLayoutSidenav className="custom-class">Nav</AppLayoutSidenav>);

    const el = screen.getByText(/nav/i);
    expect(el).toHaveClass('ex-app-layout-sidenav custom-class');
  });

  it('passes additional props to the element', () => {
    render(<AppLayoutSidenav id="my-nav">Nav</AppLayoutSidenav>);

    const el = screen.getByText(/nav/i);
    expect(el).toHaveAttribute('id', 'my-nav');
  });

  it('passes event handlers to the element', async () => {
    const onClick = vi.fn();

    render(<AppLayoutSidenav onClick={onClick}>Click me</AppLayoutSidenav>);

    const el = screen.getByText(/click me/i);
    await user.click(el);

    expect(onClick).toHaveBeenCalled();
  });

  it('passes style attributes to the element', () => {
    render(<AppLayoutSidenav style={{ color: '#101010', fontSize: '11px' }}>Nav</AppLayoutSidenav>);

    const el = screen.getByText(/nav/i);
    expect(el).toHaveStyle({ color: '#101010', fontSize: '11px' });
  });

  it('preserves display name for debugging', () => {
    expect(AppLayoutSidenav.displayName).toBe('AppLayout.Sidenav');
  });
});

describe('AppLayoutMain', () => {
  let user: ReturnType<typeof userEvent.setup>;

  beforeEach(() => {
    user = userEvent.setup();
  });

  it('renders with default main element when no as prop is provided', () => {
    render(<AppLayoutMain>Main</AppLayoutMain>);

    const el = screen.getByText(/main/i);
    expect(el.tagName).toBe('MAIN');
  });

  it('renders with custom element when as prop is provided', () => {
    render(<AppLayoutMain as="div">Main</AppLayoutMain>);

    const el = screen.getByText(/main/i);
    expect(el.tagName).toBe('DIV');
  });

  it('passes children through correctly', () => {
    render(
      <AppLayoutMain>
        <div>Child 1</div>
        <span>Child 2</span>
      </AppLayoutMain>,
    );

    expect(screen.getByText(/child 1/i)).toBeInTheDocument();
    expect(screen.getByText(/child 2/i)).toBeInTheDocument();
  });

  it('applies the default CSS class name', () => {
    render(<AppLayoutMain>Main</AppLayoutMain>);

    const el = screen.getByText(/main/i);
    expect(el).toHaveClass('ex-app-layout-main');
  });

  it('passes additional classes properly to the element', () => {
    render(<AppLayoutMain className="custom-class">Main</AppLayoutMain>);

    const el = screen.getByText(/main/i);
    expect(el).toHaveClass('ex-app-layout-main custom-class');
  });

  it('passes additional props to the element', () => {
    render(<AppLayoutMain id="my-main">Main</AppLayoutMain>);

    const el = screen.getByText(/main/i);
    expect(el).toHaveAttribute('id', 'my-main');
  });

  it('passes event handlers to the element', async () => {
    const onClick = vi.fn();

    render(<AppLayoutMain onClick={onClick}>Click me</AppLayoutMain>);

    const el = screen.getByText(/click me/i);
    await user.click(el);

    expect(onClick).toHaveBeenCalled();
  });

  it('passes style attributes to the element', () => {
    render(<AppLayoutMain style={{ color: '#222222', fontSize: '13px' }}>Main</AppLayoutMain>);

    const el = screen.getByText(/main/i);
    expect(el).toHaveStyle({ color: '#222222', fontSize: '13px' });
  });

  it('preserves display name for debugging', () => {
    expect(AppLayoutMain.displayName).toBe('AppLayout.Main');
  });
});

describe('AppLayoutAside', () => {
  let user: ReturnType<typeof userEvent.setup>;

  beforeEach(() => {
    user = userEvent.setup();
  });

  it('renders with default aside element when no as prop is provided', () => {
    render(<AppLayoutAside>Aside</AppLayoutAside>);

    const el = screen.getByText(/aside/i);
    expect(el.tagName).toBe('ASIDE');
  });

  it('renders with custom element when as prop is provided', () => {
    render(<AppLayoutAside as="div">Aside</AppLayoutAside>);

    const el = screen.getByText(/aside/i);
    expect(el.tagName).toBe('DIV');
  });

  it('passes children through correctly', () => {
    render(
      <AppLayoutAside>
        <div>Child 1</div>
        <span>Child 2</span>
      </AppLayoutAside>,
    );

    expect(screen.getByText(/child 1/i)).toBeInTheDocument();
    expect(screen.getByText(/child 2/i)).toBeInTheDocument();
  });

  it('applies the default CSS class name', () => {
    render(<AppLayoutAside>Aside</AppLayoutAside>);

    const el = screen.getByText(/aside/i);
    expect(el).toHaveClass('ex-app-layout-aside');
  });

  it('passes additional classes properly to the element', () => {
    render(<AppLayoutAside className="custom-class">Aside</AppLayoutAside>);

    const el = screen.getByText(/aside/i);
    expect(el).toHaveClass('ex-app-layout-aside custom-class');
  });

  it('passes additional props to the element', () => {
    render(<AppLayoutAside id="my-aside">Aside</AppLayoutAside>);

    const el = screen.getByText(/aside/i);
    expect(el).toHaveAttribute('id', 'my-aside');
  });

  it('passes event handlers to the element', async () => {
    const onClick = vi.fn();

    render(<AppLayoutAside onClick={onClick}>Click me</AppLayoutAside>);

    const el = screen.getByText(/click me/i);
    await user.click(el);

    expect(onClick).toHaveBeenCalled();
  });

  it('passes style attributes to the element', () => {
    render(<AppLayoutAside style={{ color: '#333333', fontSize: '9px' }}>Aside</AppLayoutAside>);

    const el = screen.getByText(/aside/i);
    expect(el).toHaveStyle({ color: '#333333', fontSize: '9px' });
  });

  it('preserves display name for debugging', () => {
    expect(AppLayoutAside.displayName).toBe('AppLayout.Aside');
  });
});

describe('AppLayoutFooter', () => {
  let user: ReturnType<typeof userEvent.setup>;

  beforeEach(() => {
    user = userEvent.setup();
  });

  it('renders with default footer element when no as prop is provided', () => {
    render(<AppLayoutFooter>Footer</AppLayoutFooter>);

    const el = screen.getByText(/footer/i);
    expect(el.tagName).toBe('FOOTER');
  });

  it('renders with custom element when as prop is provided', () => {
    render(<AppLayoutFooter as="div">Footer</AppLayoutFooter>);

    const el = screen.getByText(/footer/i);
    expect(el.tagName).toBe('DIV');
  });

  it('passes children through correctly', () => {
    render(
      <AppLayoutFooter>
        <div>Child 1</div>
        <span>Child 2</span>
      </AppLayoutFooter>,
    );

    expect(screen.getByText(/child 1/i)).toBeInTheDocument();
    expect(screen.getByText(/child 2/i)).toBeInTheDocument();
  });

  it('applies the default CSS class name', () => {
    render(<AppLayoutFooter>Footer</AppLayoutFooter>);

    const el = screen.getByText(/footer/i);
    expect(el).toHaveClass('ex-app-layout-footer');
  });

  it('passes additional classes properly to the element', () => {
    render(<AppLayoutFooter className="custom-class">Footer</AppLayoutFooter>);

    const el = screen.getByText(/footer/i);
    expect(el).toHaveClass('ex-app-layout-footer custom-class');
  });

  it('passes additional props to the element', () => {
    render(<AppLayoutFooter id="my-footer">Footer</AppLayoutFooter>);

    const el = screen.getByText(/footer/i);
    expect(el).toHaveAttribute('id', 'my-footer');
  });

  it('passes event handlers to the element', async () => {
    const onClick = vi.fn();

    render(<AppLayoutFooter onClick={onClick}>Click me</AppLayoutFooter>);

    const el = screen.getByText(/click me/i);
    await user.click(el);

    expect(onClick).toHaveBeenCalled();
  });

  it('passes style attributes to the element', () => {
    render(
      <AppLayoutFooter style={{ color: '#444444', fontSize: '15px' }}>Footer</AppLayoutFooter>,
    );

    const el = screen.getByText(/footer/i);
    expect(el).toHaveStyle({ color: '#444444', fontSize: '15px' });
  });

  it('preserves display name for debugging', () => {
    expect(AppLayoutFooter.displayName).toBe('AppLayout.Footer');
  });
});

describe('AppLayoutSection', () => {
  let user: ReturnType<typeof userEvent.setup>;

  beforeEach(() => {
    user = userEvent.setup();
  });

  it('renders with default section element when no as prop is provided', () => {
    render(<AppLayoutSection>Section</AppLayoutSection>);

    const el = screen.getByText(/section/i);
    expect(el.tagName).toBe('SECTION');
  });

  it('renders with custom element when as prop is provided', () => {
    render(<AppLayoutSection as="div">Section</AppLayoutSection>);

    const el = screen.getByText(/section/i);
    expect(el.tagName).toBe('DIV');
  });

  it('passes children through correctly', () => {
    render(
      <AppLayoutSection>
        <div>Child 1</div>
        <span>Child 2</span>
      </AppLayoutSection>,
    );

    expect(screen.getByText(/child 1/i)).toBeInTheDocument();
    expect(screen.getByText(/child 2/i)).toBeInTheDocument();
  });

  it('applies the default CSS class name', () => {
    render(<AppLayoutSection>Section</AppLayoutSection>);

    const el = screen.getByText(/section/i);
    expect(el).toHaveClass('ex-app-layout-section');
  });

  it('passes additional classes properly to the element', () => {
    render(<AppLayoutSection className="custom-class">Section</AppLayoutSection>);

    const el = screen.getByText(/section/i);
    expect(el).toHaveClass('ex-app-layout-section custom-class');
  });

  it('passes additional props to the element', () => {
    render(<AppLayoutSection id="my-section">Section</AppLayoutSection>);

    const el = screen.getByText(/section/i);
    expect(el).toHaveAttribute('id', 'my-section');
  });

  it('passes event handlers to the element', async () => {
    const onClick = vi.fn();

    render(<AppLayoutSection onClick={onClick}>Click me</AppLayoutSection>);

    const el = screen.getByText(/click me/i);
    await user.click(el);

    expect(onClick).toHaveBeenCalled();
  });

  it('passes style attributes to the element', () => {
    render(
      <AppLayoutSection style={{ color: '#555555', fontSize: '18px' }}>Section</AppLayoutSection>,
    );

    const el = screen.getByText(/section/i);
    expect(el).toHaveStyle({ color: '#555555', fontSize: '18px' });
  });

  it('preserves display name for debugging', () => {
    expect(AppLayoutSection.displayName).toBe('AppLayout.Section');
  });
});
