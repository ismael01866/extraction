import React from 'react';

import { render, screen } from '@testing-library/react';

import { TabsContent, TabsList, TabsRoot, TabsTrigger } from './tabs';

describe('TabsRoot', () => {
  it('renders default div and class', () => {
    render(<TabsRoot>Tabs</TabsRoot>);
    const el = screen.getByText(/tabs/i);
    expect(el.tagName).toBe('DIV');
    expect(el).toHaveClass('ex-tabs');
  });

  it('supports custom element and props', () => {
    render(
      <TabsRoot as="section" id="tabs" className="custom">
        Tabs
      </TabsRoot>,
    );

    const el = screen.getByText(/tabs/i);
    expect(el.tagName).toBe('SECTION');
    expect(el).toHaveAttribute('id', 'tabs');
    expect(el).toHaveClass('ex-tabs custom');
  });
});

describe('TabsList', () => {
  it('renders default div and class inside TabsRoot', () => {
    render(
      <TabsRoot>
        <TabsList>List</TabsList>
      </TabsRoot>,
    );

    const el = screen.getByText(/list/i);
    expect(el.tagName).toBe('DIV');
    expect(el).toHaveClass('ex-tabs-list');
  });
});

describe('TabsTrigger', () => {
  it('renders default button and class inside TabsRoot', () => {
    render(
      <TabsRoot>
        <TabsList>
          <TabsTrigger value="tab-1">Trigger</TabsTrigger>
        </TabsList>
      </TabsRoot>,
    );

    const el = screen.getByText(/trigger/i);
    expect(el.tagName).toBe('BUTTON');
    expect(el).toHaveClass('ex-tabs-trigger');
  });
});

describe('TabsContent', () => {
  it('renders default div and class inside TabsRoot', () => {
    render(
      <TabsRoot defaultValue="tab-1">
        <TabsList>
          <TabsTrigger value="tab-1">Trigger</TabsTrigger>
        </TabsList>
        <TabsContent value="tab-1">Content</TabsContent>
      </TabsRoot>,
    );

    const el = screen.getByText(/content/i);
    expect(el.tagName).toBe('DIV');
    expect(el).toHaveClass('ex-tabs-content');
  });
});
