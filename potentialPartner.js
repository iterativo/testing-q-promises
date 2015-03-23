var Q = require("q");

function willYouLoveMe(cond){
	var deferred = Q.defer();

	if (cond === "even if I were out of shape")
		deferred.reject("I only like guys in shape");
	else
		deferred.resolve("I love you unconditionally!");

	return deferred.promise;
}

module.exports = {
	willYouLoveMe: willYouLoveMe
};