var get = require('./../src/get');
var getOld = function (source, path, fallback){
	if(!source || typeof source !== 'object'){
		throw new Error('the source is not valid')
	}
	var p = path.split('.');
	var result = p.reduce(function(acc, next, i, array) {
		if(!acc) return source[next];
		return acc[next];
	}, null)

	return result;
};
var _ = require('lodash')

suite('Object get', function () {
  set('iterations', 2000000);

  var source = {
  	a:{
  		b:{
  			c:{
  				d:1
  			}
  		}
  	}
  }
  bench('Direct Access', function () {
    var d = source.a.b.c.d
  });

  bench('Get Via Reduce', function () {
    var d = getOld(source, 'a.b.c.d')
  });

  bench('Get with break', function () {
    var d = get(source, 'a.b.c.d')
  });

  bench('lodash get', function () {
   var d = _.get(source, 'a.b.c.d')
  });
});