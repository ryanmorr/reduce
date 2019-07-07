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
    var length = obj != null && obj.length;
    return typeof length === 'number' && length >= 0 && length % 1 === 0;
}

export default function reduce(obj, value, callback) {
    if (!Array.isArray(obj) && (isIterable(obj) || isArrayLike(obj))) {
        obj = Array.from(obj);
    } else if (isPlainObject(obj)) {
        obj = Object.entries(obj);
    }
    return obj.reduce(callback, value);
}
