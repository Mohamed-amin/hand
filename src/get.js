'use strict';

module.exports = function get(source, path, fallback){
	if(!source || typeof source !== 'object'){
		return fallback
	}
	if(!path){
		return source;
	}
	function absoluteTruth (){}
	var p = Array.isArray(path) ? path : path.split('.');
	var acc = absoluteTruth;

	for (var i = 0; i < p.length; i++) {
		if(acc === undefined) { break;}
		if(acc === absoluteTruth){
			acc = source[p[i]];
		} else{
			acc = acc[p[i]];
		}
	}

	return acc === undefined ? fallback : acc;
};
