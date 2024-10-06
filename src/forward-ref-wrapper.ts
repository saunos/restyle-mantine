import React from 'react';

export const ForwardRefWrapper = React.forwardRef<
  React.ElementType,
  {
    Fragment: React.ElementType;
    element: React.ReactElement;
    styles: React.ReactElement;
  }
>(({ element, styles, Fragment }, ref) => {
  const elementWithRef = React.isValidElement(element)
    ? React.cloneElement(element, { ref } as never)
    : element;

  return React.createElement(Fragment, null, elementWithRef, styles);
});
ForwardRefWrapper.displayName = 'ForwardRefWrapper';
