/*! @ryanmorr/reduce v0.1.0 | https://github.com/ryanmorr/reduce */"use strict";function _typeof2(a){return _typeof2="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},_typeof2(a)}(function(a,b){"object"===("undefined"==typeof exports?"undefined":_typeof2(exports))&&"undefined"!=typeof module?b(exports):"function"==typeof define&&define.amd?define(["exports"],b):(a=a||self,b(a.reduce={}))})(void 0,function(a){'use strict';function b(a){return b="function"==typeof Symbol&&"symbol"===_typeof2(Symbol.iterator)?function(a){return _typeof2(a)}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":_typeof2(a)},b(a)}function c(a){return"function"==typeof a[Symbol.iterator]}function d(a){if(!a||"object"!==b(a))return!1;var c=Object.getPrototypeOf(a);return null===c||c===Object.getPrototypeOf({})}function e(a){var b=null!=a&&a.length;return"number"==typeof b&&0<=b&&0==b%1}function f(a){return Array.isArray(a)?a:c(a)||e(a)?Array.from(a):d(a)?Object.entries(a):void 0}a.reduce=function(a,b,c){for(var d=f(a),e=0,g=d.length;e<g;e++)b=c(b,d[e],e,a);return b},a.reduceRight=function(a,b,c){for(var d=f(a),e=d.length-1;0<=e;--e)b=c(b,d[e],e,a);return b},Object.defineProperty(a,"__esModule",{value:!0})});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVkdWNlLnVtZC5qcyIsInNvdXJjZXMiOlsiLi4vc3JjL3JlZHVjZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBpc0l0ZXJhYmxlKG9iaikge1xyXG4gICAgcmV0dXJuIHR5cGVvZiBvYmpbU3ltYm9sLml0ZXJhdG9yXSA9PT0gJ2Z1bmN0aW9uJztcclxufVxyXG5cclxuZnVuY3Rpb24gaXNQbGFpbk9iamVjdChvYmopIHtcclxuICAgIGlmICghb2JqIHx8IHR5cGVvZiBvYmogIT09ICdvYmplY3QnKSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgY29uc3QgcHJvdG90eXBlID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKG9iaik7XHJcbiAgICByZXR1cm4gcHJvdG90eXBlID09PSBudWxsIHx8IHByb3RvdHlwZSA9PT0gT2JqZWN0LmdldFByb3RvdHlwZU9mKHt9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gaXNBcnJheUxpa2Uob2JqKSB7XHJcbiAgICBjb25zdCBsZW5ndGggPSBvYmogIT0gbnVsbCAmJiBvYmoubGVuZ3RoO1xyXG4gICAgcmV0dXJuIHR5cGVvZiBsZW5ndGggPT09ICdudW1iZXInICYmIGxlbmd0aCA+PSAwICYmIGxlbmd0aCAlIDEgPT09IDA7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHRvQXJyYXkob2JqKSB7XHJcbiAgICBpZiAoQXJyYXkuaXNBcnJheShvYmopKSB7XHJcbiAgICAgICAgcmV0dXJuIG9iajtcclxuICAgIH1cclxuICAgIGlmIChpc0l0ZXJhYmxlKG9iaikgfHwgaXNBcnJheUxpa2Uob2JqKSkge1xyXG4gICAgICAgIHJldHVybiBBcnJheS5mcm9tKG9iaik7XHJcbiAgICB9XHJcbiAgICBpZiAoaXNQbGFpbk9iamVjdChvYmopKSB7XHJcbiAgICAgICAgcmV0dXJuIE9iamVjdC5lbnRyaWVzKG9iaik7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByZWR1Y2Uob2JqLCB2YWx1ZSwgY2FsbGJhY2spIHtcclxuICAgIGNvbnN0IGFycmF5ID0gdG9BcnJheShvYmopO1xyXG4gICAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IGFycmF5Lmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XHJcbiAgICAgICAgdmFsdWUgPSBjYWxsYmFjayh2YWx1ZSwgYXJyYXlbaV0sIGksIG9iaik7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdmFsdWU7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByZWR1Y2VSaWdodChvYmosIHZhbHVlLCBjYWxsYmFjaykge1xyXG4gICAgY29uc3QgYXJyYXkgPSB0b0FycmF5KG9iaik7XHJcbiAgICBmb3IgKGxldCBpID0gYXJyYXkubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcclxuICAgICAgICB2YWx1ZSA9IGNhbGxiYWNrKHZhbHVlLCBhcnJheVtpXSwgaSwgb2JqKTtcclxuICAgIH1cclxuICAgIHJldHVybiB2YWx1ZTtcclxufVxyXG4iXSwibmFtZXMiOlsiaXNJdGVyYWJsZSIsIm9iaiIsIlN5bWJvbCIsIml0ZXJhdG9yIiwiaXNQbGFpbk9iamVjdCIsIl90eXBlb2YiLCJwcm90b3R5cGUiLCJPYmplY3QiLCJnZXRQcm90b3R5cGVPZiIsImlzQXJyYXlMaWtlIiwibGVuZ3RoIiwidG9BcnJheSIsIkFycmF5IiwiaXNBcnJheSIsImZyb20iLCJlbnRyaWVzIiwidmFsdWUiLCJjYWxsYmFjayIsImFycmF5IiwiaSIsImxlbiJdLCJtYXBwaW5ncyI6Iml6QkFBQSxRQUFTQSxDQUFBQSxDQUFULENBQW9CQyxDQUFwQixDQUF5QixPQUNrQixVQUFoQyxRQUFPQSxDQUFBQSxDQUFHLENBQUNDLE1BQU0sQ0FBQ0MsUUFBUixFQUdyQixRQUFTQyxDQUFBQSxDQUFULENBQXVCSCxDQUF2QixDQUE0QixJQUNwQixDQUFDQSxDQUFELEVBQXVCLFFBQWYsR0FBQUksRUFBT0osZUFHYkssQ0FBQUEsQ0FBUyxDQUFHQyxNQUFNLENBQUNDLGNBQVBELENBQXNCTixDQUF0Qk0sUUFDRyxLQUFkRCxHQUFBQSxDQUFTLEVBQWFBLENBQVMsR0FBS0MsTUFBTSxDQUFDQyxjQUFQRCxDQUFzQixFQUF0QkEsRUFHL0MsUUFBU0UsQ0FBQUEsQ0FBVCxDQUFxQlIsQ0FBckIsQ0FBMEIsSUFDaEJTLENBQUFBLENBQU0sQ0FBVSxJQUFQVCxFQUFBQSxDQUFHLEVBQVlBLENBQUcsQ0FBQ1MsYUFDVCxRQUFsQixRQUFPQSxDQUFBQSxDQUFQLEVBQXdDLENBQVZBLEVBQUFBLENBQTlCLEVBQTRELENBQWZBLEVBQUFBLENBQU0sQ0FBRyxFQUdqRSxRQUFTQyxDQUFBQSxDQUFULENBQWlCVixDQUFqQixDQUFzQixPQUNkVyxDQUFBQSxLQUFLLENBQUNDLE9BQU5ELENBQWNYLENBQWRXLENBRGMsQ0FFUFgsQ0FGTyxDQUlkRCxDQUFVLENBQUNDLENBQUQsQ0FBVkQsRUFBbUJTLENBQVcsQ0FBQ1IsQ0FBRCxDQUpoQixDQUtQVyxLQUFLLENBQUNFLElBQU5GLENBQVdYLENBQVhXLENBTE8sQ0FPZFIsQ0FBYSxDQUFDSCxDQUFELENBUEMsQ0FRUE0sTUFBTSxDQUFDUSxPQUFQUixDQUFlTixDQUFmTSxDQVJPLGlCQVlmLFNBQWdCTixDQUFoQixDQUFxQmUsQ0FBckIsQ0FBNEJDLENBQTVCLENBQXNDLFFBQ25DQyxDQUFBQSxDQUFLLENBQUdQLENBQU8sQ0FBQ1YsQ0FBRCxFQUNaa0IsQ0FBQyxDQUFHLEVBQUdDLENBQUcsQ0FBR0YsQ0FBSyxDQUFDUixPQUFRUyxDQUFDLENBQUdDLEVBQUtELENBQUMsR0FDMUNILENBQUssQ0FBR0MsQ0FBUSxDQUFDRCxDQUFELENBQVFFLENBQUssQ0FBQ0MsQ0FBRCxDQUFiLENBQWtCQSxDQUFsQixDQUFxQmxCLENBQXJCLENBQWhCZSxPQUVHQSxDQUFBQSxpQkFHSixTQUFxQmYsQ0FBckIsQ0FBMEJlLENBQTFCLENBQWlDQyxDQUFqQyxDQUEyQyxRQUN4Q0MsQ0FBQUEsQ0FBSyxDQUFHUCxDQUFPLENBQUNWLENBQUQsRUFDWmtCLENBQUMsQ0FBR0QsQ0FBSyxDQUFDUixNQUFOUSxDQUFlLEVBQVEsQ0FBTEMsRUFBQUEsRUFBUSxFQUFFQSxFQUNyQ0gsQ0FBSyxDQUFHQyxDQUFRLENBQUNELENBQUQsQ0FBUUUsQ0FBSyxDQUFDQyxDQUFELENBQWIsQ0FBa0JBLENBQWxCLENBQXFCbEIsQ0FBckIsQ0FBaEJlLE9BRUdBLENBQUFBIn0=
