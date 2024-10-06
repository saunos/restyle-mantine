import { MantineTheme } from '@mantine/core';
import { CSSObject } from 'restyle';

type CSSProp = CSSObject | ((theme: MantineTheme) => CSSObject);

declare global {
  // namespace JSX {
  //   interface IntrinsicAttributes {
  //     css?: CSSProp;
  //   }
  // }

  namespace React {
    interface Attributes {
      css?: CSSProp;
    }
  }
}
