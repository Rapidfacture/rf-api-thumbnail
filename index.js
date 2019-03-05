/**
 * pdfToThumbnail: create thumbnail from pdf buffer
 */

var gm = require('gm');
var shell = require('shelljs');

if (!shell.which('gm')) {
   throw new Error('[rf-api-thumbnail] Error: graphicsmagick (gm) was not found on your system but is required, please install it.');
}


module.exports.start = function (options) {
   return {
      pdfToThumbnail: function (inputBuffer, callback) {
         gm(inputBuffer)
            .out('+adjoin')
            .trim()
            .resize(200, 200)
            // .crop(300, 300, 150, 130)
            .toBuffer('PNG', function (err, buffer) {
               if (err) {
                  callback('Error generating pdf preview pic: ' + err);
                  return;
               }
               var pdfPreviewPic = new Buffer(buffer, 'binary').toString('base64'); // only node versions below 6.0.0 - new: Buffer.from(pdfBuffer);
               callback(null, pdfPreviewPic);
            });
      },

      convertImageBuffer: function (tiffBuffer, format, callback) {
         format = format || 'PDF';
         gm(tiffBuffer)
            .toBuffer(format, function (err, pngBuffer) {
               if (err) {
                  callback('Error converting tiff to png: ' + err);
               } else {
                  callback(null, pngBuffer);
               }
            });
      }
   };

};
