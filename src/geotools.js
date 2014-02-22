var http = require('http');
var url = require('url');

(function() {

	//Calculates the distance between to sets of coordinates
	distance = function (lat1, lng1, lat2, lng2) {
		if (lat1.lat && lng1.lat) {
			lat2 = lng1.lat
			lng2 = lng1.lng
			lng1 = lat1.lng
			lat1 = lat1.lat
		}
		var R = 6371; // km
		var dLat = toRad(lat2-lat1);
		var dLng = toRad(lng2-lng1);
		var lat1 = toRad(lat1);
		var lat2 = toRad(lat2);

		var a = Math.sin(dLat/2) * Math.sin(dLat/2) +
		        Math.sin(dLng/2) * Math.sin(dLng/2) * Math.cos(lat1) * Math.cos(lat2); 
		var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
		var d = R * c; // Distance in k
		return d;
	}
	
	// Converts numeric degrees to radians. Used in distance()
	toRad = function(deg) {
	    return deg * Math.PI / 180;
	}

	//Converts a physical address to a set of coordinates
	geocode = function(address, callback) {
		//Prepares the inputted address into the search query
		var query = address.split(" ").join("+") + '&sensor=false'
		var options = {
			host : 'maps.googleapis.com',
			path: '/maps/api/geocode/json?address=' + query
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
				if (callback) {
					callback(coordinates)
				} else {
					return coordinates
				}
			})
		})
	}

	//Converts a set of coordinates to a physical address
	reverseGeocode = function(lat, lng, callback) {
		if (lat.lat && lat.lng) {
			callback = lng
			lng = lat.lng
			lat = lat.lat
		}
		//Prepares the inputted lat/lng into the search query
		var query = lat.toString() + ',' + lng.toString() + '&sensor=false'
		var options = {
			host : 'maps.googleapis.com',
			path: '/maps/api/geocode/json?latlng=' + query
			}
		var req = http.get(options, function(res){
			console.log("Response: " + res.statusCode);
			var results = '';
			res.on('data', function(data){
				results += data;
			})
			res.on('end', function() {
				var body = JSON.parse(results)
				var address = gMapsFormData(body)
				if (callback) {
					callback(address)
				} else {
					return address}
			})
		})
	}

	//Maps the returned JSON from Google APIs for the reverseGeocode function
	gMapsFormData = function(json) {
		var address = {
					full_address : json.results[0].formatted_address
				};
		var addressJSON = json.results[0].address_components
		for (var i = 0; i < addressJSON.length; i++) {
			switch (addressJSON[i].types[0]) {
				case 'street_number':
					address.street_number = addressJSON[i].long_name
					break;
				case 'route':
					address.street = addressJSON[i].long_name
					break;
				case 'neighborhood':
					address.neighborhood = addressJSON[i].long_name
					break;
				case 'locality' || 'sublocality':
					address.city = addressJSON[i].long_name
					break;
				case 'administrative_area_level_2':
					address.county = addressJSON[i].long_name
					break;
				case 'administrative_area_level_1':
					address.state = addressJSON[i].long_name
					break;
				case 'country':
					address.country = addressJSON[i].long_name
					break;
				case 'postal_code':
					address.postal_code = addressJSON[i].long_name
					break;
			}
		}
		return address
	}

	//Converts KM into miles
	toMiles = function(distance) {
		return distance * 1.60934
	}

	//Converts KM into meters
	toMeters = function(distance) {
		return distance * 1000
	}

	//Converts KM into yards
	toYards = function(distance) {
		return distance * 1093.61
	}

	//Converts KM into feet
	toFeet = function(distance) {
		return distance * 3280.84
	}

}).call(this);