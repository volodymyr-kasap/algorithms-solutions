const myMap = function(callback, thisArg) {
    if (typeof callback !== "function") {
        throw new TypeError(callback + " is not a function");
    }
    const result = [];
    for (let i = 0; i < this.length; i++) {
        if (i in this) {
            result[i] = callback.call(thisArg, this[i], i, this);
        }
    }
    return result;
};

if (!Array.prototype.myMap) {
  Array.prototype.myMap = myMap;
}

const myFilter = function(callback, thisArg) {
    if (typeof callback !== "function") {
        throw new TypeError(callback + " is not a function");
    }
    const result = [];
    for (let i = 0; i < this.length; i++) {
        if (i in this && callback.call(thisArg, this[i], i, this)) {
            result.push(this[i]);
        }
    }
    return result;
};

if (!Array.prototype.myFilter) {
  Array.prototype.myFilter = myFilter;
}


const myReduce = function(callback, initialValue) {
    if (typeof callback !== "function") {
        throw new TypeError(callback + " is not a function");
    }
    if (this.length === 0 && arguments.length < 2) {
        throw new TypeError("Reduce of empty array with no initial value");
    }

    let accumulator = arguments.length >= 2 ? initialValue : this[0];
    let startIndex = arguments.length >= 2 ? 0 : 1;

    for (let i = startIndex; i < this.length; i++) {
        if (i in this) {
            accumulator = callback(accumulator, this[i], i, this);
        }
    }
    return accumulator;
};

if (!Array.prototype.myReduce) {
  Array.prototype.myReduce = myReduce;
}

module.exports = {
    myFilter,
    myReduce,
    myMap,
}