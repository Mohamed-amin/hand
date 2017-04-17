var get = require('../src/get.js');

var someData = {
	data: {
		user: {
			id:1,
			list:['item',1,2],
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
var list = [10, 20, 30]
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

	it("Can access array", function(){
		expect(get(someData, 'data.user.list.0')).toBe('item');
	});
});
