'use strict';

var router = require('./router.js');

module.exports = function(req, res) {
  var path = req.method + ' ' + req.url;
  console.log('path:',path);
  try {
    router[path](req, res);
  } catch (err) {
    console.log('path', path);
    console.log('err', err);
    res.end('Not found');
  }
};
