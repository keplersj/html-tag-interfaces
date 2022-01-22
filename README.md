# html-tag-interfaces

[![npm](https://img.shields.io/npm/v/html-tag-interfaces)](https://www.npmjs.com/package/html-tag-interfaces)
[![npm](https://img.shields.io/npm/dw/html-tag-interfaces)](https://www.npmjs.com/package/html-tag-interfaces)
[![Codecov](https://img.shields.io/codecov/c/github/keplersj/html-tag-interfaces)](https://app.codecov.io/gh/keplersj/html-tag-interfaces)
[![Bundle Size](https://img.shields.io/bundlephobia/min/html-tag-interfaces)](https://bundlephobia.com/package/html-tag-interfaces)

Map HTML tag names to their interfaces.

## Installation

Install using [npm](https://npmjs.com):

```sh
$ npm install html-tag-interfaces
```

Or use in browsers with [Skypack](https://www.skypack.dev/):

```html
<script type="module">
  import { interfaces } from "https://cdn.skypack.dev/html-tag-interfaces";
</script>
```

## Usage

Use the interfaces export to get the DOM interface for an HTML tag name:

```js
import { interfaces } from "html-tag-interfaces";

console.log(interfaces["div"]); // => HTMLDivElement
```

## License

Copyright 2022 [Kepler Sticka-Jones](https://keplersj.com). Licensed ISC.
