# @saunos/restyle-mantine

`@saunos/restyle-mantine` is a library that provides jsx transform to expose `css` prop from [Restyle](https://github.com/souporserious/restyle) for [Mantine](https://github.com/mantinedev/mantine) components.

## Features

- 🎨 Use ReStyle's css prop with Mantine components
- 🚀 Add Mantine theme as a css prop parameter

## Installation

```bash
npm install @saunos/restyle-mantine restyle @mantine/core
```

## Setup

1. Update your `tsconfig.json` to use the custom JSX transform:

```json
{
  "compilerOptions": {
    "jsx": "react-jsx",
    "jsxImportSource": "@saunos/restyle-mantine"
  }
}
```

2. If you prefer per-file configuration, add this comment at the top of your `.tsx` files:

```tsx
/** @jsxImportSource @saunos/restyle-mantine */
```

## Usage

Here's a basic example of how to use `@saunos/restyle-mantine`:

```tsx
import React from 'react';
import { Button, Text } from '@mantine/core';

function App() {
  return (
    <div>
      <Button
        css={(theme) => ({
          backgroundColor: theme.colors.primary,
          marginBottom: theme.spacing.m,
        })}
      >
        Styled Button
      </Button>
      <Text
        css={{
          fontSize: 18,
        }}
      >
        Styled Text
      </Text>
    </div>
  );
}
```

## API Reference

### `css` prop

Please refer to [Restyle's docs](https://github.com/souporserious/restyle/blob/main/README.md) for more details.

### `css` with callback function

`theme: MantineTheme` is passed as an argument to the callback function.

```tsx
<Button
  css={(theme) => ({
    backgroundColor: theme.colors.primary,
    padding: theme.spacing.m,
  })}
>
  Click me
</Button>
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License.
