/*! @ryanmorr/reduce v0.1.0 | https://github.com/ryanmorr/reduce */"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.reduce=reduce,exports.reduceRight=reduceRight;function _typeof2(a){return _typeof2="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},_typeof2(a)}function _typeof(a){return _typeof="function"==typeof Symbol&&"symbol"===_typeof2(Symbol.iterator)?function(a){return _typeof2(a)}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":_typeof2(a)},_typeof(a)}function isIterable(a){return"function"==typeof a[Symbol.iterator]}function isPlainObject(a){if(!a||"object"!==_typeof(a))return!1;var b=Object.getPrototypeOf(a);return null===b||b===Object.getPrototypeOf({})}function isArrayLike(a){var b=null!=a&&a.length;return"number"==typeof b&&0<=b&&0==b%1}function toArray(a){return Array.isArray(a)?a:isIterable(a)||isArrayLike(a)?Array.from(a):isPlainObject(a)?Object.entries(a):void 0}function reduce(a,b,c){for(var d=toArray(a),e=0,f=d.length;e<f;e++)b=c(b,d[e],e,a);return b}function reduceRight(a,b,c){for(var d=toArray(a),e=d.length-1;0<=e;--e)b=c(b,d[e],e,a);return b}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVkdWNlLmVzbS5qcyIsInNvdXJjZXMiOlsiLi4vc3JjL3JlZHVjZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBpc0l0ZXJhYmxlKG9iaikge1xyXG4gICAgcmV0dXJuIHR5cGVvZiBvYmpbU3ltYm9sLml0ZXJhdG9yXSA9PT0gJ2Z1bmN0aW9uJztcclxufVxyXG5cclxuZnVuY3Rpb24gaXNQbGFpbk9iamVjdChvYmopIHtcclxuICAgIGlmICghb2JqIHx8IHR5cGVvZiBvYmogIT09ICdvYmplY3QnKSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgY29uc3QgcHJvdG90eXBlID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKG9iaik7XHJcbiAgICByZXR1cm4gcHJvdG90eXBlID09PSBudWxsIHx8IHByb3RvdHlwZSA9PT0gT2JqZWN0LmdldFByb3RvdHlwZU9mKHt9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gaXNBcnJheUxpa2Uob2JqKSB7XHJcbiAgICBjb25zdCBsZW5ndGggPSBvYmogIT0gbnVsbCAmJiBvYmoubGVuZ3RoO1xyXG4gICAgcmV0dXJuIHR5cGVvZiBsZW5ndGggPT09ICdudW1iZXInICYmIGxlbmd0aCA+PSAwICYmIGxlbmd0aCAlIDEgPT09IDA7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHRvQXJyYXkob2JqKSB7XHJcbiAgICBpZiAoQXJyYXkuaXNBcnJheShvYmopKSB7XHJcbiAgICAgICAgcmV0dXJuIG9iajtcclxuICAgIH1cclxuICAgIGlmIChpc0l0ZXJhYmxlKG9iaikgfHwgaXNBcnJheUxpa2Uob2JqKSkge1xyXG4gICAgICAgIHJldHVybiBBcnJheS5mcm9tKG9iaik7XHJcbiAgICB9XHJcbiAgICBpZiAoaXNQbGFpbk9iamVjdChvYmopKSB7XHJcbiAgICAgICAgcmV0dXJuIE9iamVjdC5lbnRyaWVzKG9iaik7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByZWR1Y2Uob2JqLCB2YWx1ZSwgY2FsbGJhY2spIHtcclxuICAgIGNvbnN0IGFycmF5ID0gdG9BcnJheShvYmopO1xyXG4gICAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IGFycmF5Lmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XHJcbiAgICAgICAgdmFsdWUgPSBjYWxsYmFjayh2YWx1ZSwgYXJyYXlbaV0sIGksIG9iaik7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdmFsdWU7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByZWR1Y2VSaWdodChvYmosIHZhbHVlLCBjYWxsYmFjaykge1xyXG4gICAgY29uc3QgYXJyYXkgPSB0b0FycmF5KG9iaik7XHJcbiAgICBmb3IgKGxldCBpID0gYXJyYXkubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcclxuICAgICAgICB2YWx1ZSA9IGNhbGxiYWNrKHZhbHVlLCBhcnJheVtpXSwgaSwgb2JqKTtcclxuICAgIH1cclxuICAgIHJldHVybiB2YWx1ZTtcclxufVxyXG4iXSwibmFtZXMiOlsiaXNJdGVyYWJsZSIsIm9iaiIsIlN5bWJvbCIsIml0ZXJhdG9yIiwiaXNQbGFpbk9iamVjdCIsIl90eXBlb2YiLCJwcm90b3R5cGUiLCJPYmplY3QiLCJnZXRQcm90b3R5cGVPZiIsImlzQXJyYXlMaWtlIiwibGVuZ3RoIiwidG9BcnJheSIsIkFycmF5IiwiaXNBcnJheSIsImZyb20iLCJlbnRyaWVzIiwicmVkdWNlIiwidmFsdWUiLCJjYWxsYmFjayIsImFycmF5IiwiaSIsImxlbiIsInJlZHVjZVJpZ2h0Il0sIm1hcHBpbmdzIjoiMHJCQUFBLFFBQVNBLENBQUFBLFVBQVQsQ0FBb0JDLENBQXBCLENBQXlCLE9BQ2tCLFVBQWhDLFFBQU9BLENBQUFBLENBQUcsQ0FBQ0MsTUFBTSxDQUFDQyxRQUFSLEVBR3JCLFFBQVNDLENBQUFBLGFBQVQsQ0FBdUJILENBQXZCLENBQTRCLElBQ3BCLENBQUNBLENBQUQsRUFBdUIsUUFBZixHQUFBSSxRQUFPSixlQUdiSyxDQUFBQSxDQUFTLENBQUdDLE1BQU0sQ0FBQ0MsY0FBUEQsQ0FBc0JOLENBQXRCTSxRQUNHLEtBQWRELEdBQUFBLENBQVMsRUFBYUEsQ0FBUyxHQUFLQyxNQUFNLENBQUNDLGNBQVBELENBQXNCLEVBQXRCQSxFQUcvQyxRQUFTRSxDQUFBQSxXQUFULENBQXFCUixDQUFyQixDQUEwQixJQUNoQlMsQ0FBQUEsQ0FBTSxDQUFVLElBQVBULEVBQUFBLENBQUcsRUFBWUEsQ0FBRyxDQUFDUyxhQUNULFFBQWxCLFFBQU9BLENBQUFBLENBQVAsRUFBd0MsQ0FBVkEsRUFBQUEsQ0FBOUIsRUFBNEQsQ0FBZkEsRUFBQUEsQ0FBTSxDQUFHLEVBR2pFLFFBQVNDLENBQUFBLE9BQVQsQ0FBaUJWLENBQWpCLENBQXNCLE9BQ2RXLENBQUFBLEtBQUssQ0FBQ0MsT0FBTkQsQ0FBY1gsQ0FBZFcsQ0FEYyxDQUVQWCxDQUZPLENBSWRELFVBQVUsQ0FBQ0MsQ0FBRCxDQUFWRCxFQUFtQlMsV0FBVyxDQUFDUixDQUFELENBSmhCLENBS1BXLEtBQUssQ0FBQ0UsSUFBTkYsQ0FBV1gsQ0FBWFcsQ0FMTyxDQU9kUixhQUFhLENBQUNILENBQUQsQ0FQQyxDQVFQTSxNQUFNLENBQUNRLE9BQVBSLENBQWVOLENBQWZNLENBUk8sUUFZdEIsUUFBZ0JTLENBQUFBLE1BQWhCLENBQXVCZixDQUF2QixDQUE0QmdCLENBQTVCLENBQW1DQyxDQUFuQyxDQUE2QyxRQUNuQ0MsQ0FBQUEsQ0FBSyxDQUFHUixPQUFPLENBQUNWLENBQUQsRUFDWm1CLENBQUMsQ0FBRyxFQUFHQyxDQUFHLENBQUdGLENBQUssQ0FBQ1QsT0FBUVUsQ0FBQyxDQUFHQyxFQUFLRCxDQUFDLEdBQzFDSCxDQUFLLENBQUdDLENBQVEsQ0FBQ0QsQ0FBRCxDQUFRRSxDQUFLLENBQUNDLENBQUQsQ0FBYixDQUFrQkEsQ0FBbEIsQ0FBcUJuQixDQUFyQixDQUFoQmdCLE9BRUdBLENBQUFBLEVBR1gsUUFBZ0JLLENBQUFBLFdBQWhCLENBQTRCckIsQ0FBNUIsQ0FBaUNnQixDQUFqQyxDQUF3Q0MsQ0FBeEMsQ0FBa0QsUUFDeENDLENBQUFBLENBQUssQ0FBR1IsT0FBTyxDQUFDVixDQUFELEVBQ1ptQixDQUFDLENBQUdELENBQUssQ0FBQ1QsTUFBTlMsQ0FBZSxFQUFRLENBQUxDLEVBQUFBLEVBQVEsRUFBRUEsRUFDckNILENBQUssQ0FBR0MsQ0FBUSxDQUFDRCxDQUFELENBQVFFLENBQUssQ0FBQ0MsQ0FBRCxDQUFiLENBQWtCQSxDQUFsQixDQUFxQm5CLENBQXJCLENBQWhCZ0IsT0FFR0EsQ0FBQUEifQ==
