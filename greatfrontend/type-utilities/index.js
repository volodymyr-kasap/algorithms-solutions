module.exports.isBoolean = function (value) {
  return typeof value === 'boolean';
};

module.exports.isNumber = function(value) {
  return typeof value === 'number';
};

module.exports.isNull = function (value) {
  return value === null;
};

module.exports.isString = function (value) {
  return typeof value === 'string';
};

module.exports.isSymbol = function (value) {
  return typeof value === 'symbol';
};

module.exports.isUndefined = function(value) {
  return value === undefined;
};
