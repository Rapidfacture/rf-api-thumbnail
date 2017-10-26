/* jshint node: true */ "use strict";

/**
 * API service: thumbnail
 */

var gm = require('gm').subClass({
  imageMagick: true
});

var API = require("rf-load").require("rf-api").API;

module.exports.start = function(options, next) {

	function pdfToThumbnail(stream, res, func) {
	  gm(stream)
	    .out('+adjoin')
	    .trim()
	    .resize(200, 200)
	    //.crop(300, 300, 150, 130)
	    .toBuffer('PNG', function(err, buffer) {
	      if (err) {
	        res.status(404).send("Error generating pdf preview pic, error: " + err);
	        return;
	      }
	      var pdfPreviewPic = new Buffer(buffer, 'binary').toString('base64'); // only node versions below 6.0.0 - new: Buffer.from(pdfBuffer);
	      func(pdfPreviewPic);
	    });
	};

	API.ServiceFactory.registerFunction(pdfToThumbnail);

	//console.log(API);

	next();

};
