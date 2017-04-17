'use strict';

module.exports = function get(source, path, fallback){
	if(!source || typeof source !== 'object'){
		throw new Error('the source is not valid');
	}
	var p = path.split('.');
	var acc = null;
	for (var i = 0; i < p.length; i++) { 
		if(acc === undefined) { break;}
		if(acc === null){
			acc = source[p[i]];
		} else{
			acc = acc[p[i]];
		}
	}
	
	return acc;
};

