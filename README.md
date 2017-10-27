# rf-api-thumbnail

* unstable - do not use now
* will be the common part for every rapidfacture app

API thumbnail service.


## Getting Started

> npm install rf-api-thumbnail

## Example
```js
// load API
var API = require("rf-load").require("rf-api").API;

// load module and give saveDir parameter (path where the pdfs are stored)
require("rf-load").module("rf-api-thumbnail"); 

/** 
* pdfToThumbnail: create thumbnail from pdf buffer
*
* @param stream: pdf data stream
* @param res: Express ressource
* @param func: callback function with thumbnail data
*/
API.ServiceFactory.pdfToThumbnail(stream, res, func); // execute pdfToThumbnail function
```

## Dependencies

Needs to have gm & rf-api to be installed.


## Legal Issues
* License: MIT
* Author: Rapidfacture GmbH
