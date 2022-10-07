const hof = {};

hof.identity = function (arg) {
  return arg;
};

hof.identityF = function (x) {
  return function (x) {
    return x;
  };
};

hof.add = function (x, y) {
  return x + y;
};

hof.subtract = function (x, y) {
  return x - y;
};

hof.multiply = function (x, y) {
  return x * y;
};

hof.increment = function (x) {
  return hof.add(x, 1);
};

hof.addF = function (x) {
  function innerAddF(y) {
    return hof.add(x, y);
  }
  return innerAddF;
};

hof.curry = function (binary, x) {
  return function newFunc(y) {
    return binary(x, y);
  };
};

hof.liftF = function () {};

hof.twice = function () {};

hof.composeU = function () {};

hof.composeB = function () {};

hof.limit = function () {};

hof.from = function () {};

hof.to = function () {};

hof.fromTo = function () {};

hof.element = function () {};

hof.collect = function () {};

hof.filter = function () {};

hof.concat = function () {};

hof.fibonacciF = function () {};

hof.genSymF = function () {};

hof.genSymFF = function () {};

hof.counter = function () {};

hof.revokable = function () {};

module.exports = hof;
