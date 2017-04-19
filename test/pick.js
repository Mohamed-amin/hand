var pick = require('../src/pick.js');
var chai = require('chai');
var expect = chai.expect;
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
var list = [10, 20, 30]

describe("Pick", function(){
	it("should return objects by passed keys", function(){
		expect(pick(someData, ['user', 'company'])).to.deep.equal(
			{
					user:{
						name:'amin'
					},
					company:{
						name:'namshi'
					}	
			}
		);
	});

	it("should returns from array", function(){
		expect(pick([1 ,2 ,3 ,4], [3])).to.deep.equal({'3':4})
	})
});
