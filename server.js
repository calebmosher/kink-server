/**
 * @module server
 */

var express = require("express"),
	urlValidator = require("./lib/url-validator"),
	requestCounter = require("./lib/request-counter"),
	app = express();



app
	/* ---------------------------------------- *\
	 * Routing
	\* ---------------------------------------- */

	.get("/api/words", urlValidator, requestCounter)

	.get("*", function(req, res) {
		res.status(500).json({error: "Internal server error"});
	})



	/* ---------------------------------------- *\
	 * Port
	\* ---------------------------------------- */

	.listen(process.env.PORT || "8888", function() {
		console.log("Listening on %d.", this.address().port);
	});
