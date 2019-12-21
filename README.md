# reduce

[![Version Badge][version-image]][project-url]
[![Build Status][build-image]][build-url]
[![License][license-image]][license-url]

> Array's reduce for all iterable and enumerable objects

## Install

Download the [CJS](https://github.com/ryanmorr/reduce/raw/master/dist/reduce.cjs.js), [ESM](https://github.com/ryanmorr/reduce/raw/master/dist/reduce.esm.js), [UMD](https://github.com/ryanmorr/reduce/raw/master/dist/reduce.umd.js) versions or install via NPM:

``` sh
npm install @ryanmorr/reduce
```

## Usage

Choose the `reduce` function to iterate from left-to-right or the `reduceRight` function to iterate right-to-left. Provide the iterable/enumerable object as the first argument, the initial value as the second argument, and the reducer function as the third argument:

``` javascript
import { reduce, reduceRight } from '@ryanmorr/reduce';

// Works for arrays obviously
const array = [
    '1',
    '2',
    '3'
];
reduce(array, '', (acc, val, idx, obj) => acc + val); // => "123"

// Works for iterables like maps, sets, nodelists, etc.
const map = new Map([
    ['a', '1'],
    ['b', '2'],
    ['c', '3']
]);
reduce(map, '', (acc, [key, val], idx, obj) => acc + val); // => "123"

// Works for enumerable key/value objects
const object = {
    a: '1',
    b: '2',
    c: '3'
};
reduceRight(object, '', (acc, [key, val], idx, obj) => acc + val); // => "321"
```

## License

This project is dedicated to the public domain as described by the [Unlicense](http://unlicense.org/).

[project-url]: https://github.com/ryanmorr/reduce
[version-image]: https://badge.fury.io/gh/ryanmorr%2Freduce.svg
[build-url]: https://travis-ci.org/ryanmorr/reduce
[build-image]: https://travis-ci.org/ryanmorr/reduce.svg
[license-image]: https://img.shields.io/badge/license-Unlicense-blue.svg
[license-url]: UNLICENSE