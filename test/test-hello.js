var chai = require('chai'), should = chai.should();
var assert = chai.assert;
var expect = chai.expect;
var should = chai.should();

var hello = require("../lib/hello")

describe('sample test', function() {
	it("test hello", function(){
		assert.strictEqual(hello.hello(), "hello")
	})
});

