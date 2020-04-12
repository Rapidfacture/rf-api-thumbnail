/**
 * pdfToThumbnail: create thumbnail from pdf buffer
 */

const gm = require('gm');
const {requireNativeExecutableSync} = require('require-native-executable');

requireNativeExecutableSync('gm');

module.exports.start = function (options) {
   return {
      pdfToThumbnail: function (inputBuffer, callback) {
         gm(inputBuffer)
            // .out('+adjoin')
            // .trim()
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
                  callback('Error converting image buffer to ' + format, 'error: ', err);
               } else {
                  callback(null, pngBuffer);
               }
            });
      }
   };

};
