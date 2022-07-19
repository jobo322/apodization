# Apodization and window functions

[![NPM version][npm-image]][npm-url]
[![build status][ci-image]][ci-url]
[![Test coverage][codecov-image]][codecov-url]
[![npm download][download-image]][download-url]

A package to compose and apply window functions.

## Installation

`$ npm i apodization`

## Usage

It is possible to import the functions directly. Those function accepts an object with options and returns a function (i: number) => number to avoid constants calculation for each call.
```js
import { lorentzToGauss } from 'apodization';
const gm = lorentzToGauss({ gaussianHz: 0.2, exponentialHz: 0, center: 0.5, length: 500, dw = 0.01 });
const value = gm(250); //returns the max value of the gaussian;
```
It is possible to use the `getFunction`
```js
import { getFunction } from 'apodization';

const gm = getFunction({ 
  kind: 'lorentzToGauss', 
  options: { 
    gaussianHz: 0.2, 
    exponentialHz: 0, 
    center: 0.5, 
    length: 500, 
    dw = 0.01
  }
});
const value = gm(250); //returns the max value of the gaussian;
```
Current supported shapes:
> [Exponential](https://spin.niddk.nih.gov/NMRPipe/ref/nmrpipe/em.html)
>[Lorentz to gauss](https://spin.niddk.nih.gov/NMRPipe/ref/nmrpipe/gm.html)

It is possible to apply a window function directly to data (number[]). It does not change the original data by default but it is possible to pass an array in `output` property.
```js
import { applyWindow, exponential } from 'apodization';
const data = [1,2,3,4,5];
const exponentialFunc = exponential({ dw: 0.1, lb: 0.2, start: 0 })
const result = applyWindow(data, {
  func: exponential,
  start: 0,
  output: data //inplace modification
});
```

It is possible to compose a window function by:
```js
import { compose } from 'apodization';

const lorentzToGaussShapeOptions = { 
  dw = 0.01,
  center: 0.5, 
  length: 500,
  gaussianHz: 0.2, 
  exponentialHz: 0, 
};

const exponentialShapeOptions = {
  dw = 0.01,
  lb = 2,
}

const func = compose({
  length: 500,
  shapes: [
    {
      start: 0,
      shape: {
        kind: 'lorentzToGauss',
        options: lorentzToGaussShapeOptions,
      }
    },
    {
      start: 0,
      shape: {
        kind: 'exponential',
        options: exponentialShapeOptions,
      }
    }
  ]
});

console.log(func(250)); //value of window function of index 250
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
