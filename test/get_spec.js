var get = require('../src/get.js');

var someData = {
	data: {
		user: {
			id:1,
			name: 'Amin',
			details: {
				school:{
					id:123,
					name:'Loosers School'
				},
				relate:[123, {some:'data'},'mohamed']
			}
		}
	}
} 
describe("get", function(){
	it("gets shallow prop based on dot notation string", function(){
		expect(function(){ return get('lalaland') }).toThrow(new Error('the source is not valid'));
	});
	
	it("gets shallow prop based on dot notation string", function(){
		expect(get(someData, 'data.user.id')).toBe(1);
	});

	it("returns undefined if its not there", function(){
		expect(get(someData, 'data.user.id.bla.lulu.any')).toBe(undefined);
	});
});
