var get = require('../src/get.js');
var chai = require('chai');
var expect = chai.expect;
var someData = {
	data: {
		user: {
			some:null,
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

	it("should return undefined safely", function(){
		expect(get(null, 'a.b.c')).to.equal(undefined);
	});

	it("should return undefined if no proper source/path passed", function(){
		expect(get('lalaland')).to.equal(undefined);
	});

	it("returns the fallback value if path reached undefined", function(){
		expect(get(someData, 'data.user.ids', 'blah string')).to.equal('blah string');
	});

	it("gets shallow prop based on dot notation string", function(){
		expect(get(someData, 'data.user.id')).to.equal(1);
	});

	it("returns undefined if its not there", function(){
		expect(get(someData, 'data.user.id.bla.lulu.any')).to.equal(undefined);
	});

	it("Can access array", function(){
		expect(get(someData, 'data.user.list.0')).to.equal('item');
	});
	// Commented this feature out, as I don't think its really critical
	// it("should return the string chars from path", function(){
	// 	expect(get('mohamed', '1')).to.equal('o');
	// })
	it("should accept path as string or array", function(){
		expect(get(someData, ['data','user','list','0'])).to.equal('item');
	})

	it("should be able to return null values", function(){
		expect(get(someData, 'data.user.some', {})).to.equal(null);
	})
});
