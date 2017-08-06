var fs = require('fs');
var index = fs.readFileSync(__dirname + '/polygon_icon.png');
module.exports = function(req, res) {
  res.writeHead(200, {'Content-Type': 'image/x-icon'} );
  res.end(index)
}
