'use strict';

module.exports = function pick(source, path){
	var acc = {};
	
	path.forEach( p => {
		if(p in source){
			acc[p] = source[p]
		}
	})

	return acc
};
