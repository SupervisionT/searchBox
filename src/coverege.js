var utils = require('./utils.js');
const proj4 = require('proj4');
const d3 = require('d3-polygon');
const fs = require('fs');
var words = fs.readFileSync(__dirname + '/Free_Mobile_Couverture_L93.json', 'utf8');
words = JSON.parse(words);
var inside = require('point-in-polygon')


module.exports = function(req, res) {

  utils.parseBody(req, function(err, body) {
          var coords = JSON.parse(body);
          var WGS84 = "+proj=gnom +lat_0=90 +lon_0=0 +x_0=6300000 +y_0=6300000 +ellps=WGS84 +datum=WGS84 +units=m +no_defs";
          var EPSG2154 = "+proj=lcc +lat_1=49 +lat_2=44 +lat_0=46.5 +lon_0=3 +x_0=700000 +y_0=6600000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs";
          var ncoords = proj4(EPSG2154,coords);
          var result =  words.features.map(function(element){
            console.log(inside(ncoords, element.geometry.coordinates[0]));
            if (inside(ncoords, element.geometry.coordinates[0]) == true){
              // d3.polygonContains(element.geometry.coordinates, ncoords)
              //  console.log(typeof inside(ncoords, element.geometry.coordinates));
              return 1
            }
              else {
                // console.log(element.geometry.coordinates[0]);
                // console.log(d3.polygonCentroid(element.geometry.coordinates));
                return 0
              }

          }
        )

          // console.log(inside(ncoords, words.features[0].geometry.coordinates));
          var sum = result.reduce((a, b) => a + b, 0);
          console.log('result', sum);
          // function isInside(element) {
          //   if (inside(ncoords, element.geometry.coordinates) == 'true'){
          //     console.log('1');
          //     return true
          //   }
          //     else {
          //       console.log('0');
          //       return false
          //     }
          //
          // }
          if (sum == 1){
            res.end('4G Covered')
          }else {
            res.end('No 4G Covered')
          }
})
  // res.writeHead(200, {'Content-Type': 'image/x-icon'} );
}
