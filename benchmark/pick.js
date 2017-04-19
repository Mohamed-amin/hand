var pick = require('./../src/pick');

var _ = require('lodash')

suite('Pick', function () {
  set('iterations', 2000000);

 var someData = {
    user:{
      name:'amin'
    },
    school:{
      year:'2017'
    },
    company:{
      name:'namshi'
    }
  }
  bench('Direct Access', function () {
    var d = someData['user']
    var c = someData['school']
  });

  bench('Pick with hand', function () {
    var d = pick(someData, ['user', 'company'])
  });

  bench('lodash pick', function () {
    var d = _.pick(someData, ['user', 'company'])
  });
});