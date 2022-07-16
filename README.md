# window-functions

[![NPM version][npm-image]][npm-url]
[![build status][ci-image]][ci-url]
[![Test coverage][codecov-image]][codecov-url]
[![npm download][download-image]][download-url]

window function applier and some shapes.

## Installation

`$ npm i window-functions`

## Usage

```js
import { applyWindow, exponential } from './src/index';

const data = [1,2,3,4,5];
const result = applyWindow(data, exponential, { lb: 0.2, start: 0 });
```

## License

[MIT](./LICENSE)

[npm-image]: https://img.shields.io/npm/v/window-functions.svg
[npm-url]: https://www.npmjs.com/package/window-functions
[ci-image]: https://github.com/jobo322/window-functions/workflows/Node.js%20CI/badge.svg?branch=main
[ci-url]: https://github.com/jobo322/window-functions/actions?query=workflow%3A%22Node.js+CI%22
[codecov-image]: https://img.shields.io/codecov/c/github/jobo322/window-functions.svg
[codecov-url]: https://codecov.io/gh/jobo322/window-functions
[download-image]: https://img.shields.io/npm/dm/window-functions.svg
[download-url]: https://www.npmjs.com/package/window-functions
