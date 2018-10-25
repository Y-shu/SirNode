var assert= require('assert')
var sample=require('../app/controller/sample.js');
// describe('Calculator Tests', function() {
	// And then we describe our testcases.
	it('returns 1+1=2', function(done) {
		assert.equal(sample.add(1, 1), 2);
		// Invoke done when the test is complete.
		done();
	});
// });
