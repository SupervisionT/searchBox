var fs = require('fs');
var index = fs.readFileSync(__dirname + '/pelias-leflet-geocoder.css');
module.exports = function(req, res) {
  res.writeHead(200, {'Content-Type': 'text/css'} );
  res.end(index)
}
