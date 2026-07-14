import React from 'react';

export const cloneWithClass = (element, className) =>
  React.cloneElement(element, {
    className: `${element.props.className ?? ''} ${className}`.trim(),
  });

export const unwrap = (node) => {
  if (node.type === React.Fragment) {
    return React.Children.toArray(node.props.children);
  }
  return node;
};

export const getDisplayName = (element) => {
  const explicitClientRefDisplayNameMap = {};
  const partSuffixes = [
    'ScrollUpButton',
    'ScrollDownButton',
    'ItemIndicator',
    'ItemText',
    'SubTrigger',
    'SubContent',
    'CheckboxItem',
    'RadioItem',
    'RadioGroup',
    'SwitchThumb',
    'ToggleGroup',
    'ViewportAnchor',
    'Root',
    'Item',
    'Header',
    'Trigger',
    'Content',
    'Section',
    'Icon',
    'Viewport',
    'Scrollbar',
    'Thumb',
    'Indicator',
    'Label',
    'Control',
    'Description',
    'Title',
    'Footer',
    'Input',
    'Password',
    'Textarea',
    'Select',
    'Option',
    'Value',
    'Group',
    'Separator',
    'Portal',
    'Overlay',
    'Close',
    'Open',
    'Arrow',
    'Image',
    'Fallback',
    'Link',
    'List',
    'Range',
    'Track',
    'Handle',
    'Toggle',
    'Action',
    'Cancel',
    'Aside',
    'Body',
    'Main',
    'Sidenav',
    'Caption',
    'Cite',
    'Sub',
    'Error',
    'Helper',
    'Success',
    'Box',
    'Button',
    'Bg',
    'Addon',
    'Menu',
    'Field',
    'Anchor',
    'Text',
    'Provider',
    'Command',
  ];

  const formatClientRefExportName = (exportName) => {
    if (explicitClientRefDisplayNameMap[exportName]) {
      return explicitClientRefDisplayNameMap[exportName];
    }

    const suffix = partSuffixes.find(
      (part) => exportName.endsWith(part) && exportName.length > part.length,
    );

    if (!suffix) return exportName;

    const namespace = exportName.slice(0, -suffix.length);
    if (!namespace) return exportName;

    if (suffix === 'Root') return namespace;

    return `${namespace}.${suffix}`;
  };

  const type = element?.type ?? element;

  if (typeof type === 'string') return type;

  const directName = type?.displayName || type?.render?.displayName || type?.type?.displayName;

  if (directName) return directName;

  const refId =
    type?.$$id || type?._payload?.value?.$$id || type?._payload?._result?.$$id || type?._init?.$$id;

  if (typeof refId === 'string') {
    const hashIndex = refId.lastIndexOf('#');
    if (hashIndex >= 0 && hashIndex < refId.length - 1) {
      const exportName = refId.slice(hashIndex + 1);
      return formatClientRefExportName(exportName);
    }
  }

  if (type?.name && typeof type.name === 'string' && type.name.length > 1) {
    return type.name;
  }

  return undefined;
};

export const buildVariantClass = ({ colorClass, color, variantClass, variant }) =>
  `${colorClass}-${color} ${variantClass ? `${variantClass}:variant-${variant}` : `variant-${variant}`}`.trim();

export const wrapUsageElement = ({ usage, wrapper }) => {
  const element = typeof usage === 'function' ? usage() : usage;

  if (!wrapper) return element;

  try {
    const out = wrapper({
      children:
        element?.props?.children !== undefined
          ? element
          : React.cloneElement(element, element.props),
    });

    if (Array.isArray(out)) {
      return out.length === 1 ? out[0] : React.createElement(React.Fragment, null, ...out);
    }

    return out;
  } catch {
    return React.createElement(wrapper, null, element);
  }
};

export const interpolate = (text: string, values: Record<string, string>) => {
  return text.replace(/\{(\w+)\}/g, (_, key) => values[key] ?? `{${key}}`);
};
