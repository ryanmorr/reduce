function isIterable(obj) {
    return typeof obj[Symbol.iterator] === 'function';
}

function isPlainObject(obj) {
    if (!obj || typeof obj !== 'object') {
        return false;
    }
    const prototype = Object.getPrototypeOf(obj);
    return prototype === null || prototype === Object.getPrototypeOf({});
}

function isArrayLike(obj) {
    const length = obj != null && obj.length;
    return typeof length === 'number' && length >= 0 && length % 1 === 0;
}

function toArray(obj) {
    if (Array.isArray(obj)) {
        return obj;
    }
    if (isIterable(obj) || isArrayLike(obj)) {
        return Array.from(obj);
    }
    if (isPlainObject(obj)) {
        return Object.entries(obj);
    }
}

export function reduce(obj, value, callback) {
    const array = toArray(obj);
    for (let i = 0, len = array.length; i < len; i++) {
        value = callback(value, array[i], i, obj);
    }
    return value;
}

export function reduceRight(obj, value, callback) {
    const array = toArray(obj);
    for (let i = array.length - 1; i >= 0; --i) {
        value = callback(value, array[i], i, obj);
    }
    return value;
}
