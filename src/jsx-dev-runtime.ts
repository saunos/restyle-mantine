/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from 'react';
import ReactJSXRuntimeDev from 'react/jsx-dev-runtime';

import { createRestyleProps } from './create-restyle-props';
import { ForwardRefWrapper } from './forward-ref-wrapper';

export const Fragment = ReactJSXRuntimeDev.Fragment;

/** Create a JSX element that accepts a `css` prop to generate atomic class names. */
export function jsxDEV(
  type: React.ElementType,
  props: Record<string, any>,
  key: string,
  isStaticChildren: boolean,
  source: any,
  self: any
): React.JSX.Element {
  if (props.css) {
    const [parsedProps, Styles] = createRestyleProps(type, props);

    if (Styles) {
      return ReactJSXRuntimeDev.jsxDEV(
        ForwardRefWrapper,
        {
          Fragment,
          element: ReactJSXRuntimeDev.jsxDEV(
            type,
            parsedProps,
            key,
            isStaticChildren,
            source,
            self
          ),
          styles: ReactJSXRuntimeDev.jsxDEV(
            Styles,
            {},
            undefined,
            true,
            source,
            self
          ),
        },
        key,
        true,
        source,
        self
      );
    }

    return ReactJSXRuntimeDev.jsxDEV(
      type,
      parsedProps,
      key,
      isStaticChildren,
      source,
      self
    );
  }

  return ReactJSXRuntimeDev.jsxDEV(
    type,
    props,
    key,
    isStaticChildren,
    source,
    self
  );
}
