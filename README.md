# reduce

[![Version Badge][version-image]][project-url]
[![License][license-image]][license-url]
[![Build Status][build-image]][build-url]

> Array's reduce for all iterable and enumerable objects

## Install

Download the [CJS](https://github.com/ryanmorr/reduce/raw/master/dist/cjs/reduce.js), [ESM](https://github.com/ryanmorr/reduce/raw/master/dist/esm/reduce.js), [UMD](https://github.com/ryanmorr/reduce/raw/master/dist/umd/reduce.js) versions or install via NPM:

``` sh
npm install @ryanmorr/reduce
```

## Usage

Choose the `reduce` function to iterate from left-to-right or the `reduceRight` function to iterate right-to-left. Provide the iterable/enumerable object as the first argument, the initial value as the second argument, and the reducer function as the third argument:

``` javascript
import { reduce, reduceRight } from '@ryanmorr/reduce';

// Supports arrays obviously
const array = ['1', '2', '3'];
const arrayValue = reduce(array, '', (accumulator, value, index, object) => {
    return accumulator + value;
});
console.log(arrayValue); // => "123"

// Supports iterables like maps, sets, nodelists, etc.
const set = new Set(['1', '2', '3']);
const setValue = reduce(set, '', (accumulator, value, index, object) => {
    return accumulator + value;
});
console.log(setValue); // => "123"

// Supports enumerable key/value objects
const object = {a: '1', b: '2', c: '3'};
const objectValue = reduceRight(object, '', (accumulator, [key, value], index, object) => {
    return accumulator + value;
});
console.log(objectValue); // => "321"
```

## License

This project is dedicated to the public domain as described by the [Unlicense](http://unlicense.org/).

[project-url]: https://github.com/ryanmorr/reduce
[version-image]: https://img.shields.io/github/package-json/v/ryanmorr/reduce?color=blue&style=flat-square
[build-url]: https://github.com/ryanmorr/reduce/actions
[build-image]: https://img.shields.io/github/actions/workflow/status/ryanmorr/reduce/node.js.yml?style=flat-square
[license-image]: https://img.shields.io/github/license/ryanmorr/reduce?color=blue&style=flat-square
[license-url]: UNLICENSE