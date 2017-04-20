var merge = require('./../src/merge');

var _ = require('lodash')

suite('Merge', function () {
  set('iterations', 2000000);
  var baseStyles = {
    header: {
        left: 10,
        position: 'absolute',
    },
    footer: {
        right: 10
    }
  };

  var rtlStyles = {
    header: {
        left: 40,
    }
  };

  bench('Object.assign', function () {
    var d = Object.assign({}, baseStyles, rtlStyles)
  });

  bench('Pick with hand', function () {
    var d = merge({}, baseStyles, rtlStyles)
  });

  bench('lodash merge', function () {
    var d = _.merge({}, baseStyles, rtlStyles)
  });
});
