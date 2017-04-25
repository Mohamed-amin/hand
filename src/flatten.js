'use strict';

module.exports = function get(source){
	var res = []
	
	source.forEach(function(item){
		if(item.length) {
			res = res.concat(item);
			return
		}
		res.push(item)
	})
	
	return res;
};
