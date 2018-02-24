/**
 * pdfToThumbnail: create thumbnail from pdf buffer
 */

var gm = require('gm').subClass({
   imageMagick: true
});


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
                  callback('Error generating pdf preview pic, error: ' + err);
                  return;
               }
               var pdfPreviewPic = new Buffer(buffer, 'binary').toString('base64'); // only node versions below 6.0.0 - new: Buffer.from(pdfBuffer);
               callback(null, pdfPreviewPic);
            });
      }
   };

};
