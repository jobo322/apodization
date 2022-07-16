# window-functions

[![NPM version][npm-image]][npm-url]
[![build status][ci-image]][ci-url]
[![Test coverage][codecov-image]][codecov-url]
[![npm download][download-image]][download-url]

window function applier and some shapes.

## Installation

`$ npm i window-functions`

## Usage

It is possible to import the functions directly. Those function accepts an object with options and returns a function (i: number) => number to avoid constants calculation for each call.
```js
import { lorentzToGauss } from './src/index';
const gm = lorentzToGauss({ gaussianHz: 0.2, exponentialHz: 0, center: 0.5, length: 500 });
const value = gm(250); //returns the max value of the gaussian;
```

Current supported shapes:
> [Exponential](https://spin.niddk.nih.gov/NMRPipe/ref/nmrpipe/em.html)
>[Lorentz to gauss](https://spin.niddk.nih.gov/NMRPipe/ref/nmrpipe/gm.html)

It is possible to apply a window function directly to data (number[]). It does not change the original data.
```js
import { applyWindow, exponential } from './src/index';
const data = [1,2,3,4,5];
const result = applyWindow(data, exponential, { lb: 0.2, start: 0 });
```

Is it possibel
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
