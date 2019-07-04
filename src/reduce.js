export default function reduce(obj, value, callback) {
    if (Array.isArray(obj)) {
        return obj.reduce(callback, value);
    }
    if (typeof obj[Symbol.iterator] === 'function') {
        let i = 0;
        for (let entry of obj) {
            value = callback(value, entry, i++, obj);
        }
        return value;
    }
}
