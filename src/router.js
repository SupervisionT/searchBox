module.exports = {
    'GET /': require('./frontEnd.js'),
    'GET /favicon.ico': require('./favicon.js'),
    'GET /pelias-leaflet-geocoder.js': require('./plg.js'),
    'GET /css/pelias-leaflet-geocoder.css': require('./plg-css.js'),
    'GET /images/point_icon.png': require('./plg-icon.js'),
    'POST /Coverege': require('./coverege.js')

    // 'POST /checkCov': require('./backend/getdata.js')
};
