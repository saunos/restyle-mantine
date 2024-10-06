/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from 'react';

import { css } from 'restyle';
import { MantineThemeContext } from '@mantine/core';

/** Create a `restyle` JSX props object that handles the `css` prop to generate atomic class names. */
export function createRestyleProps(
  type: React.ElementType,
  props: Record<string, any>
): [Record<string, any>, (() => React.ReactNode) | null] {
  const input =
    typeof props.css === 'function'
      ? props.css(React.use(MantineThemeContext))
      : props.css;
  const [classNames, Styles] = css(input);

  delete props.css;

  props.className = props.className
    ? `${props.className} ${classNames}`
    : classNames;

  return [props, Styles];
}
