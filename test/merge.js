let merge = require('../src/merge.js');
let {expect, assert} = require('chai')

let a = {a : 1}, b = {b : 1}, c = {c : 1}, d = {d : 1}, e = {e : 1};

let complix1 = {
  a:{
    a:{
      1:'1'
    },
    b:{
      1:'1'
    }
  }
};

let complix2 = {
  a:{
    a:{
      2:'2'
    },
    b:{
      2:'2'
    }
  }
};

let baseStyles = {
  header: {
      left: 10,
      position: 'absolute',
  },
  footer: {
      right: 10
  }
};

let rtlStyles = {
  header: {
      left: 40,
  }
};

describe("Merge", function(){
	it("should return a new object from passed source", function(){
    let a = {a:1}
    assert(merge({}, a) !== a, 'result Object has same reference as the source')
	});

  it("should merge deep objects", function(){
    expect(merge({}, baseStyles, rtlStyles)).to.eql({ header:{ left: 40, position: 'absolute' }, footer:{ right: 10 } })
	})

  it("should merge null", function(){
    expect(merge({}, {a:1}, {a:null})).to.eql({a:null});
	})

  it("should omit merging undefined values", function(){
    expect(merge({}, {a:1}, {a:undefined})).to.eql({a:1});
	})
});
