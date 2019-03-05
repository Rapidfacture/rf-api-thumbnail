# rf-api-thumbnail

Creates PNG Thumbnail picture from PDF files using `gm`.
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

### Create a Preview Pic
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

### Image utils

```js

// convert a tiff to a pdf
service.convertImageBuffer(tiffBuffer, 'PDF', function(err, pdfBuffer){

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
