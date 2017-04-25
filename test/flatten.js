let flatten = require('../src/flatten.js');
let {expect} = require('chai')

describe("Flatten", function(){
	it("should return array of first level", function(){
    expect(flatten([1,2,[3]])).to.eql([1,2,3])
	});

});
