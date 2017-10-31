# rf-api-thumbnail
⚠ unstable - do not use now ⚠

* Service for the `rf-api` project. 
* Provides the `pdfToThumbnail` function for the API
* Uses `gm` to create a PNG Thumbnail picture out of a PDF File
* Takes a buffer stream from a PDF File returns a PNG file buffer.


## Getting Started

To install the module:

> npm install rf-api-thumbnail

### Example

To load the module load the `rf-api` module first:
```js
// load API
var API = require("rf-load").require("rf-api").API;

// load module and give saveDir parameter (path where the pdfs are stored)
require("rf-load").module("rf-api-thumbnail"); 
```
Include the `pdfToThumbnail` function at your wished position:
```js
/** 
* pdfToThumbnail: create thumbnail from pdf buffer
*
* @param stream: pdf data stream
* @param res: Express ressource
* @param func: callback function with thumbnail data
*/
API.ServiceFactory.pdfToThumbnail(stream, res, func);
```

## Dependencies

Needs to have `gm` & `rf-api` to be installed.


## Legal Issues
* License: MIT
* Author: Rapidfacture GmbH
