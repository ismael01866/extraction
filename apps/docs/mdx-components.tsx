import { useMDXComponents as getThemeComponents } from 'nextra-theme-docs';

import {
  Api,
  FontSize,
  Palette,
  Position,
  Shape,
  Size,
  Usage,
  Variants,
} from './app/snippets';

export function useMDXComponents(components = {}) {
  const themeComponents = getThemeComponents();

  return {
    ...themeComponents,
    ...components,

    Api,
    FontSize,
    Palette,
    Position,
    Shape,
    Size,
    Usage,
    Variants,

    wrapper: (props) => {
      const isHomepage = props?.metadata?.title === 'Extraction UI';
      const slug = props?.metadata?.id || props?.metadata?.filePath || 'page';

      const pageId = isHomepage
        ? 'homepage'
        : slug
            .toString()
            .toLowerCase()
            .replace(/\.[^/.]+$/, '')
            .replace(/[/\s]+/g, '-')
            .replace(/[^a-z0-9-_]/g, '');

      const ThemeWrapper = themeComponents.wrapper;

      return (
        <div id={pageId} className="nextra-page-context-wrapper">
          <ThemeWrapper {...props} />
        </div>
      );
    },
  };
}
