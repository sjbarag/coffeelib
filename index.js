/** Shortcut to speed up the lookup time for native `hasProp` function. */
hasProp = {}.hasOwnProperty;

/**
 * Correctly set up a prototype chain for inheritance, including a reference to the superclass for
 * `super()` calls, and copies of any static properties.
 */
exports.extend = function(child, parent) {
    for (var key in parent) {
        if (hasProp.call(parent, key)) child[key] = parent[key];
    }
    function ctor() {
        this.constructor = child;
    }
    ctor.prototype = parent.prototype;
    child.prototype = new ctor();
    child.__super__ = parent.prototype;
    return child;
}

/** Create a function bound to the current value of `this`. */
exports.bind = function(fn, me){
    return function(){
        return fn.apply(me, arguments);
    };
}

/** Discover if an item is in an array. */
exports.indexOf = [].indexOf || function (item) {
    for (var i = 0, l = this.length; i < l; i++) {
        if (i in this && this[i] === item) return i;
    }
    return -1;
}

exports.modulo = function(a, b) {
    return (+a % (b = +b) + b) % b;
}
