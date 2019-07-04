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

export default function reduce(obj, value, callback) {
    if (isPlainObject(obj)) {
        obj = Object.entries(obj);
    }
    if (isIterable(obj)) {
        obj = Array.from(obj);
    }
    return obj.reduce(callback, value);
}
