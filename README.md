#geo-tools

A simple library used to geocode an address, reverse geocode coordinates, and calculate the distance between two locations. The default distance used is KM. Unit conversion methods are provided and can be seen below. The Google Maps API service is used for geocoding and reverse geocoding. 

<h2>Methods</h2>

Latitude and longitude shoud be inputted as lat/lng and will be returned as lat/lng.

<h3>geocode(address, callback)</h3>

Returns the latitude and longitude of a given address. 

<pre>
geocode('717 California Street, San Francisco, CA', function(coordinates){
	console.log(coordinates)
})

//Displays to the console:

{ lat: 37.79221, lng: -122.406141 }
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

Calculates the distance between two sets of coordinates. Returns the distance in KM. Accepts either 2 object arguments (ex. distance({lat: 37.79221, lng: -122.406141}, {lat: 37.774514, lng: -122.418079})), or 4 numbers arguments (ex. distance(37.79221, -122.406141, 37.774514, -122.418079)). If you choose the latter method, order methods and should be as follows: distance(lat1, lng1, lat2, lng2). Passing in objects is reccomended. 

<pre>
distance({lat: 37.79221, lng: -122.406141}, {lat: 37.774514, lng: -122.418079})

//Returns:

2.2299158844532245
</pre>

<h3>toMiles(distance)</h3>

Converts Km into miles. The argument passed in must be in Km which is the default units used in Geo-Tools. Additional conversion methods are:

<ul>
<li>toMeters(distance)</li>
<li>toYards(distance)</li>
<li>toFeet(distance)</li>
</ul>

<pre>
var length = distance({lat: 37.79221, lng: -122.406141}, {lat: 37.774514, lng: -122.418079});

toMiles(length) //Returns

1.3856050630385846
</pre>

<h2>Notes</h2>
<ul>
	<li>Sexagesimal format is not supported</li>
</ul>

<h2>To-Do:</h2>
<ul>
	<li>Allow use of API key</li>
</ul>

<h2>Sources</h2>
<ul>
	<li>HAVERSINE SOURCE</li>
</ul>

Any and all feedback/suggestions is appreciated and should be sent to: [loganbestwick@gmail.com](mailto:loganbestwick@gmail.com)

Enjoy!