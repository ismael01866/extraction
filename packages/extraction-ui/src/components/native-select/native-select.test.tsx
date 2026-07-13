import React from 'react';

import { render } from '@testing-library/react';

import { NativeSelectField, NativeSelectIcon, NativeSelectRoot } from './native-select';

describe('NativeSelectRoot', () => {
  it('preserves displayName', () => {
    expect(NativeSelectRoot.displayName).toBe('NativeSelect');
  });
});

describe('NativeSelectField', () => {
  it('renders field with proper classes', () => {
    render(
      <NativeSelectRoot>
        <NativeSelectField as="select">
          <option value="1">Option 1</option>
          <option value="2">Option 2</option>
        </NativeSelectField>
      </NativeSelectRoot>,
    );

    const field = document.querySelector('.ex-native-select-field');
    expect(field).toBeInTheDocument();
    expect(field?.tagName).toBe('SELECT');
    expect(field).toHaveClass('ex-native-select-field');
  });
});

describe('NativeSelectIcon', () => {
  it('renders icon with proper classes and default caret', () => {
    render(
      <NativeSelectRoot>
        <NativeSelectField as="select">
          <option value="1">Option 1</option>
          <NativeSelectIcon />
        </NativeSelectField>
      </NativeSelectRoot>,
    );

    const icon = document.querySelector('.ex-native-select-icon');
    expect(icon).toBeInTheDocument();
    expect(icon?.tagName).toBe('DIV');
    expect(icon).toHaveClass('ex-native-select-icon');
  });
});
