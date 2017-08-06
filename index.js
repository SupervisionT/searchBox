'use strict';

var http = require('http');
var mainHandler = require('./src/main.js');

http.createServer(mainHandler).listen(process.env.PORT || 8080, function() {
  console.log('Listening on 8080');
});
