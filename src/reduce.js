export default function reduce(obj, initialValue, callback) {
    if (Array.isArray(obj)) {
        return obj.reduce(callback, initialValue);
    }
}
