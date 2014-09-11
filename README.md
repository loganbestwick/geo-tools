#geo-tools

A simple library used to geocode an address, reverse geocode coordinates, and calculate the distance between two locations. The default distance used is KM. Unit conversion methods are provided and can be seen below. The Google Maps API service is used for geocoding and reverse geocoding. 

<h2>Installation</h2>

<pre>
npm install geo-tools
</pre>

<h2>Require</h2>

At the top of your app:

<pre>
var geoTools = require('geo-tools');
</pre>

<h2>Methods</h2>

Latitude and longitude shoud be inputted as lat/lng and will be returned as lat/lng.

<h3>geocode(address, callback, options)</h3>

Returns the latitude and longitude of a given address. 

<pre>
geocode('717 California Street, San Francisco, CA', function(coordinates){
  console.log(coordinates)
})

//Displays to the console:

{ lat: 37.79221, lng: -122.406141 }
</pre>

Options(not required):

<pre>
{key: 'YOUR_GOOGLE_API_KEY'}
</pre>

<h3>reverseGeocode(object[lat], [lng], callback)</h3>

Takes 2 or 3 arguments. It can accept either an object with the lat/lng (ex. reverseGeocode({lat: 51.515400, lng: 7.455185}, callback)) or two numbers and the callback (ex. reverseGeocode(51.515400, 7.455185, callback)). If you use the latter format, order matters. Latitude must go first and longitude second.

<pre>
reverseGeocode({lat: 37.79221, lng: -122.406141}, function(address){
	console.log(address)
})

//Displays to the console:

{ full_address: '717 California Street, San Francisco, CA 94108, USA',
  street_number: '717',
  street: 'California Street',
  neighborhood: 'Chinatown',
  city: 'San Francisco',
  county: 'San Francisco County',
  state: 'California',
  country: 'United States',
  postal_code: '94108' }
</pre>

<h3>distance(object1, object2[lat1], [lng1], [lat2], [lng2])</h3>

Calculates the distance between two sets of coordinates. Returns the distance in Km. Accepts either 2 object arguments (ex. distance({lat: 37.79221, lng: -122.406141}, {lat: 37.774514, lng: -122.418079})), or 4 number arguments (ex. distance(37.79221, -122.406141, 37.774514, -122.418079)). If you choose the latter method, order matters and should be as follows: distance(lat1, lng1, lat2, lng2). Passing in objects is reccomended. 

<pre>
distance({lat: 37.79221, lng: -122.406141}, {lat: 37.774514, lng: -122.418079})

//Returns:

2.2299158844532245
</pre>

<h3>toMiles(distance)</h3>

Converts Km into miles. The argument passed must be in Km which is the default unit used in geo-tools.

<pre>
var length = distance({lat: 37.79221, lng: -122.406141}, {lat: 37.774514, lng: -122.418079});

toMiles(length) //Returns

1.3856050630385846
</pre>

<h3>toMeters(distance)</h3>

Converts Km into meters. The argument passed must be in Km which is the default unit used in geo-tools.

<h3>toYards(distance)</h3>

Converts Km into yards. The argument passed must be in Km which is the default unit used in geo-tools.

<h3>toFeet(distance)</h3>

Converts Km into feet. The argument passed must be in Km which is the default unit used in geo-tools.

<h2>Tests</h2>

To run tests, type mocha into your terminal

<pre>
mocha
</pre>

<h2>Notes</h2>
<ul>
	<li>Sexagesimal format is not supported</li>
	<li>Google Maps API will allow for up to 2500 API calls in 24 hours. For additional calls, a business API key is required.</li>
</ul>

<h2>Sources</h2>
<ul>
	<li>To calculate distance, the Haversine formula is used. The formula comes from the following source:</li>
	<li><a href="http://www.movable-type.co.uk/scripts/latlong.html">http://www.movable-type.co.uk/scripts/latlong.html</a></li>
</ul>

Any and all feedback/suggestions is appreciated and should be sent to: [loganbestwick@gmail.com](mailto:loganbestwick@gmail.com)

Enjoy!