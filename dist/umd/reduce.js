/*! @ryanmorr/reduce v0.1.2 | https://github.com/ryanmorr/reduce */
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).reduce={})}(this,(function(e){"use strict";function t(e){return Array.isArray(e)?e:function(e){return"function"==typeof e[Symbol.iterator]}(e)||function(e){const t=null!=e&&e.length;return"number"==typeof t&&t>=0&&t%1==0}(e)?Array.from(e):function(e){if(!e||"object"!=typeof e)return!1;const t=Object.getPrototypeOf(e);return null===t||t===Object.getPrototypeOf({})}(e)?Object.entries(e):void 0}e.reduce=function(e,n,o){const r=t(e);for(let t=0,f=r.length;t<f;t++)n=o(n,r[t],t,e);return n},e.reduceRight=function(e,n,o){const r=t(e);for(let t=r.length-1;t>=0;--t)n=o(n,r[t],t,e);return n}}));
