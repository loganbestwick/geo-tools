var http = require('http');
var url = require('url');

(function() {

	distance = function (lat1, lon1, lat2, lon2) {
		if ((lat1.lat || lat1.latitude) && (lon1.lat || lon1.latitude)) {
			lat2 = lon1.lat || lon1.latitude
			lon2 = lon1.lon || lon1.longitude
			lon1 = lat1.lon || lat1.longitude
			lat1 = lat1.lat || lat1.latitude
		}
		var R = 6371; // km
		var dLat = toRad(lat2-lat1);
		var dLon = toRad(lon2-lon1);
		var lat1 = toRad(lat1);
		var lat2 = toRad(lat2);

		var a = Math.sin(dLat/2) * Math.sin(dLat/2) +
		        Math.sin(dLon/2) * Math.sin(dLon/2) * Math.cos(lat1) * Math.cos(lat2); 
		var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
		var d = R * c; // Distance in km
		return d;
	}

	function toRad(deg) {
	    /** Converts numeric degrees to radians */
	    return deg * Math.PI / 180;
	}

	geoCode = function(address, callback) {
		//Prepares the inputted address into search query
		var query = address.split(" ").join("+") + '&sensor=false'
		var options = {
			host : 'maps.googleapis.com',
			path: '/maps/api/geocode/json?address=?' + query
			}
			
		var req = http.get(options, function(res){
			console.log("Response: " + res.statusCode);
			var results = '';
			res.on('data', function(data){
				results += data;
			})
			res.on('end', function() {
				var body = JSON.parse(results)
				var lat = (body.results[0].geometry.location.lat);
				var lng = (body.results[0].geometry.location.lng);
				var coordinates = {'lat' : lat, 'lng' : lng}
				if (callback){ callback(coordinates)};
			})
		})
	}

	toMiles = function(distance) {
		return distance * 1.60934
	}

	toMeters = function(distance) {
		return distance * 1000
	}

	toYards = function(distance) {
		return distance * 1093.61
	}

	toFeet = function(distance) {
		return distance * 3280.84
	}
}).call(this);