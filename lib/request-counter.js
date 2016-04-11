/**
 * @module request-counter
 */

var request = require("request"),
	count = require("word-count");



/**
 * @method urlValidator
 * Middleware, requests a URL and counts the words in the response
 *
 * @param req {obj} Request object
 * @param res {obj} Response object
 */
var requestCounter = function(req, res) {
	request(req.query.url, function(error, response, body) {
		if (error) {
			res.status(500).json({error: "Internal server error"});
			return;
		}
		if (response.statusCode !== 200) {
			res.status(response.statusCode).json({error: response.statusMessage});
			return;
		}

		res.status(200).json({count: count(body)});
	});
};



module.exports = requestCounter;
