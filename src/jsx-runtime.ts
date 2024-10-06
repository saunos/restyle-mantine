/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from 'react';
import ReactJSXRuntime from 'react/jsx-runtime';

import { createRestyleProps } from './create-restyle-props';
import { ForwardRefWrapper } from './forward-ref-wrapper';

export const Fragment = ReactJSXRuntime.Fragment;

export function jsx(
  type: React.ElementType,
  props: Record<string, any>,
  key: string
) {
  if (props.css) {
    const [parsedProps, Styles] = createRestyleProps(type, props);

    if (Styles) {
      return ReactJSXRuntime.jsx(
        ForwardRefWrapper,
        {
          Fragment,
          element: React.createElement(type, parsedProps),
          styles: React.createElement(Styles),
        },
        key
      );
    }

    return ReactJSXRuntime.jsx(type, parsedProps, key);
  }

  return ReactJSXRuntime.jsx(type, props, key);
}

export function jsxs(type: any, props: Record<string, any>, key: string) {
  if (props.css) {
    const [parsedProps, Styles] = createRestyleProps(type, props);

    if (Styles) {
      return ReactJSXRuntime.jsx(
        ForwardRefWrapper,
        {
          Fragment,
          element: React.createElement(type, parsedProps),
          styles: React.createElement(Styles),
        },
        key
      );
    }

    return ReactJSXRuntime.jsxs(type, parsedProps, key);
  }

  return ReactJSXRuntime.jsxs(type, props, key);
}
