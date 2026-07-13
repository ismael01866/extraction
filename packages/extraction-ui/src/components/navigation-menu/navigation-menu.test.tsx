import React from 'react';

import { render } from '@testing-library/react';

import {
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuRoot,
  NavigationMenuSection,
  NavigationMenuSub,
  NavigationMenuTrigger,
} from './navigation-menu';

describe('NavigationMenuRoot', () => {
  it('preserves displayName', () => {
    expect(NavigationMenuRoot.displayName).toBe('NavigationMenu');
  });
});

describe('NavigationMenuList and Item', () => {
  it('renders list and item with proper classes', () => {
    render(
      <NavigationMenuRoot>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Item</NavigationMenuTrigger>
            <NavigationMenuLink href="/">Link</NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenuRoot>,
    );

    const list = document.querySelector('.ex-navigation-menu-list');
    expect(list).toBeInTheDocument();
    expect(list?.tagName).toBe('DIV');
    expect(list).toHaveClass('ex-navigation-menu-list');

    const item = document.querySelector('.ex-navigation-menu-item');
    expect(item).toBeInTheDocument();
    expect(item?.tagName).toBe('DIV');
    expect(item).toHaveClass('ex-navigation-menu-item');
  });
});

describe('NavigationMenuTrigger', () => {
  it('renders trigger with proper classes', () => {
    render(
      <NavigationMenuRoot>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Item</NavigationMenuTrigger>
            <NavigationMenuLink href="/">Link</NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenuRoot>,
    );

    const trigger = document.querySelector('.ex-navigation-menu-trigger');
    expect(trigger).toBeInTheDocument();
    expect(trigger?.tagName).toBe('BUTTON');
    expect(trigger).toHaveClass('ex-navigation-menu-trigger');
  });
});

describe('NavigationMenuLink', () => {
  it('renders link with proper classes', () => {
    render(
      <NavigationMenuRoot>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Item</NavigationMenuTrigger>
            <NavigationMenuLink href="/">Link</NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenuRoot>,
    );

    const link = document.querySelector('.ex-navigation-menu-link');
    expect(link).toBeInTheDocument();
    expect(link?.tagName).toBe('A');
    expect(link).toHaveClass('ex-navigation-menu-link');
  });
});

describe('NavigationMenuSection', () => {
  it('renders section with proper classes', () => {
    render(
      <NavigationMenuRoot>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Item</NavigationMenuTrigger>
            <NavigationMenuSection title="Section Title">
              <NavigationMenuLink href="/">Link</NavigationMenuLink>
            </NavigationMenuSection>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenuRoot>,
    );

    const section = document.querySelector('.ex-navigation-menu-section');
    expect(section).toBeInTheDocument();
  });
});

describe('NavigationMenuSub', () => {
  it('renders sub menu with proper classes', () => {
    render(
      <NavigationMenuRoot>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Item</NavigationMenuTrigger>
            <NavigationMenuSub>
              <NavigationMenuLink href="/sub">Sub Item</NavigationMenuLink>
            </NavigationMenuSub>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenuRoot>,
    );

    const sub = document.querySelector('.ex-navigation-menu-sub');
    expect(sub).toBeInTheDocument();
  });
});
