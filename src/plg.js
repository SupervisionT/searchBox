var fs = require('fs');
var index = fs.readFileSync(__dirname + '/pelias-leaflet-geocoder.js');
module.exports = function(req, res) {
    res.end(index)
}
