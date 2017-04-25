'use strict';

function isObject(o) {
    if(o === null || o === undefined) return false;

    return o instanceof Object;
}
function quickMerge(a, b) {
    a = a || {};
    for (let i in b) {
        if (isObject(b[i])) {
            a[i] = quickMerge(a[i], b[i]);
        } else {
            a[i] = b[i] === undefined ? a[i] : b[i];
        }
    }
    return a;
}

module.exports = function merge(obj, base, secondary) {
    var args = [].slice.call(arguments);
    return args.reduce(function(acc, current, i) {
        return quickMerge(acc, current);
    }, {});
};
