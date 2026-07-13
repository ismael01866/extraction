import React from 'react';

import { render } from '@testing-library/react';

import {
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarRoot,
  MenubarSeparator,
  MenubarTrigger,
} from './menubar';

describe('MenubarRoot', () => {
  it('preserves displayName', () => {
    expect(MenubarRoot.displayName).toBe('Menubar');
  });
});

describe('MenubarTrigger and Menu', () => {
  it('renders trigger and menu inside root', () => {
    render(
      <MenubarRoot>
        <MenubarMenu>
          <MenubarTrigger>Menu</MenubarTrigger>
          <MenubarContent forceMount>
            <MenubarItem>Item</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </MenubarRoot>,
    );

    const trigger = document.querySelector('.ex-menubar-trigger');
    expect(trigger).toBeInTheDocument();
    expect(trigger?.tagName).toBe('BUTTON');
    expect(trigger).toHaveClass('ex-menubar-trigger');
  });
});

describe('MenubarContent', () => {
  it('renders content with proper classes', () => {
    render(
      <MenubarRoot>
        <MenubarMenu>
          <MenubarTrigger>Menu</MenubarTrigger>
          <MenubarContent forceMount>
            <MenubarItem>Item</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </MenubarRoot>,
    );

    const content = document.querySelector('.ex-menubar-content');
    expect(content).toBeInTheDocument();
    expect(content?.tagName).toBe('DIV');
    expect(content).toHaveClass('ex-menubar-content');
  });
});

describe('MenubarSeparator', () => {
  it('renders separator element when used', () => {
    render(
      <MenubarRoot>
        <MenubarMenu>
          <MenubarTrigger>Menu</MenubarTrigger>
          <MenubarContent forceMount>
            <MenubarItem>Item 1</MenubarItem>
            <MenubarSeparator />
            <MenubarItem>Item 2</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </MenubarRoot>,
    );

    const separator = document.querySelector('.ex-menubar-separator');
    expect(separator).toBeInTheDocument();
  });
});
