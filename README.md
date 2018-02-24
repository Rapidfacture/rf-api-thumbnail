# rf-api-thumbnail
⚠ unstable - do not use now ⚠

Service for the `rf-api` project. Creates PNG Thumbnail picture from PDF files using `gm`.
Takes a buffer or a stream from a PDF File and returns a PNG file buffer.

## Getting Started

> npm install rf-api-thumbnail

### Init the service


```js

var services: {
   pdfToThumbnail: require('rf-api-thumbnail').start().pdfToThumbnail
}



```

### Use the service
```js

// simple example
service.pdfToThumbnail(pdfBuffer, function(err, pdfPreviewPic){

})


// with rf-api


API.post('/pdf', function(req, res){

   // convert a pdf buffer from frontend
   Service.pdfToThumbnail(req.data, res.send);

})

```

## Development

Install the dev tools with

> npm install

Then you can runs some test cases and eslint with:

> npm test


## Legal Issues
* License: MIT
* Author: Rapidfacture GmbH
