#Geo-tools

A simple library used to geocode an address, reverse geocode coordinates, and calculate the distance between two locations. The default distance used is KM. Unit conversion methods are provided and can be seen below. The Google Maps API service is used for geocoding and reverse geocoding. 

<h2>Methods</h2>

Latitude and longitude shoud be inputted as lat/lng and will be returned as lat/lng.

<h3>geocode(address, callback)</h3>

Returns the latitude and longitude of a given address. 

<pre>
geocode('717 California Street, San Francisco, CA', function(coordinates){
	
})
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