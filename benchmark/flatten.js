var flatten = require('./../src/flatten');

var _ = require('lodash')

suite('Flatten', function () {
  set('iterations', 2000000);

  bench('Simple array concat', function () {
    var d = [1,2].concat([3])
  });

  bench('Flatten with hand', function () {
    var d = flatten([1,2,[3]])
  });

  bench('lodash Flatten', function () {
    var d = _.flatten([1,2,[3]])
  });
});
