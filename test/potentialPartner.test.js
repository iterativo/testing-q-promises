/* jshint -W030 */
var should = require("should"),
	Q = require("q");

describe("A potential partner", function() {
	var potentialPartner = require("../potentialPartner");

	it("should promise to love me", function() {
		var promise = potentialPartner.willYouLoveMe();

		promise.should.have.property("then");
		promise.should.have.property("fail");
	});

	it("should promise to love me unconditionally", function(done) {
		var promise = potentialPartner.willYouLoveMe("no matter what");

		promise.done(function(){ // onFulfilled
			done();
		}, function() { // onRejected
			should.fail("I expect my partner to love me unconditionally!");
			done();
		});
	});

	it("should not promise to love me ONLY if I'm in shape", function(done) {
		var promise = potentialPartner.willYouLoveMe("even if I were out of shape");

		promise.done(function(){ // onFulfilled
			should.fail("I expect my partner to not just promise me to love me if I'm in shape :(");
			done();
		}, function() { // onRejected
			done();
		});
	});

	/*  

		This is not reliable enough. The promise API will eat the exception
		thrown by mocha, and with it the appropriate error message.In turn,
		the test fails due to done() timeout and not due to the actual error,
		which makes it hard to debug.

	*/

	// it('should not promise to love me ONLY when I love her back', function(done) {
	// 	var promise = potentialPartner.willYouLoveMe("even if I were out of shape");

	// 	promise.finally(function() {
	// 		promise.isRejected().should.be.true;
	// 		done();
	// 	});
	// });
});
