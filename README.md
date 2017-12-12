# rf-api-thumbnail
⚠ unstable - do not use now ⚠

Service for the `rf-api` project. Creates PNG Thumbnail picture from PDF files using `gm`.
Takes a buffer stream from a PDF File returns a PNG file buffer.

## Getting Started

> npm install rf-api-thumbnail

### Init the service


```js
var Loader = require('rf-load').moduleLoader
var load = new Loader()
load.setModulePath(config.paths.modules)

// other stuff
load.file('db')
load.file('http')

// start request api
load.module('rf-api')

// plug in thumbnail into the api
load.module("rf-api-thumbnail");

```

### Use the service
```js
var API = require("rf-load").require("rf-api").API;

API.post('/pdf', function(req, res, services){

   // convert a pdf stream from frontend
   Service.pdfToThumbnail(req.data, res.send);

})

```


## Peer Dependencies
* `rf-api`


## Development

Install the dev tools with

> npm install

Then you can runs some test cases and eslint with:

> npm test


## Legal Issues
* License: MIT
* Author: Rapidfacture GmbH
