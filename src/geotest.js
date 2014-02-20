var geoTools = require('./geotools.js');
var y = geoCode('224 evergreen drive, kentfield, ca, 94904')
var x = distance(40.79162, -111.765609, 40.803544, -111.773849)

console.log(x);
console.log(toYards(x));
console.log(toMeters(x));
console.log(toFeet(x));
console.log(toMiles(x));

console.log(y);
