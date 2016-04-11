/**
 * @module url-validator
 */

var validUrl = require("valid-url");



/**
 * @method urlValidator
 * Middleware, validates the format of a URL string
 *
 * @param req {obj} Request object
 * @param res {obj} Response object
 * @param next {func} Next middleware to call
 */
var urlValidator = function(req, res, next) {
	var url = validUrl.isWebUri(req.query.url);

	if (!url) {
		res.status(500).json({error: "URL was invalid or not supplied"});
		return;
	}

	next();
};



module.exports = urlValidator;
