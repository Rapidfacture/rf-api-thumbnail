/**
 * bufferToThumbnail: create thumbnail from pdf/png/jpeg buffer
 */

const gm = require('gm');
const {requireNativeExecutableSync} = require('require-native-executable');

requireNativeExecutableSync('gm');

module.exports.start = function () {
   return {
      bufferToThumbnail: function (inputBuffer, options, callback) {

         let opts = {
            width: 200,
            height: 200
         };

         // no options: bufferToThumbnail(buffer, callback);
         if (typeof options === 'function') {
            callback = options;

         // options available
         } else if (typeof options === 'object') {
            Object.assign(opts, options);
         }

         gm(inputBuffer)
         // .out('+adjoin')
         // .trim()
            .resize(opts.width, opts.height)
         // .crop(300, 300, 150, 130)
            .toBuffer('PNG', function (err, buffer) {
               if (err) {
                  callback('Error generating pdf preview pic: ' + err);
               } else {
                  callback(null, new Buffer(buffer, 'binary').toString('base64'));
               }
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
