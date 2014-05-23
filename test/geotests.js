var should = require('should');
var geotools = require('../src/geo-tools.js')

describe('GeoTools', function(){
	describe('geocode', function(){
		it('should geocode a given address', function(done){
			var address = '717 California Street San Francisco CA'
			geocode(address, function(coordinates){
				coordinates.should.have.property('lng').and.be.type('number');
				done();
			})
		})
		it('should geocode a given address using a given API key', function(done){
			var address = '1600 Amphitheatre Pkwy, Mountain View, CA'
			geocode(address, function(coordinates){
				coordinates.should.have.property('lng').and.be.type('number');
				done();
			}, {key: 'YOUR_GOOGLE_API_KEY'})
		})
	})

	describe('reverse geocode', function(){
		it('should reverse geocode a given set of lat & lng', function(){
			var lat = 52.518611;
			var lng = 13.408056;
			reverseGeocode(lat, lng, function(address){
				address.should.have.property('full_address').and.be.type('string');
			})
		})
		it('can accept an object literal or 2 numbers for the lat/lon', function(){
			var coordinates = {lat: 51.515400, lng: 7.455185}
			reverseGeocode(coordinates, function(address){
				reverseGeocode(51.515400, 7.455185, function(address1){
					address.should.be.exactly(address1)
				})
			})
		})
	})

	describe('distance', function(){
		it('return distance between two sets of lat/lng', function(){
			var coordinates = {lat: 51.515400, lng: 7.455185}
			var coordinates1 = {lat: 40.803544, lng: -111.773849}
			distance(coordinates, coordinates1, function(length){
				length.should.be.type('number')
			})			
		})
		it('can accept 2 object literals or 4 numbers for the lat/lng', function(){
			var coordinates = {lat: 51.515400, lng: 7.455185}
			var coordinates1 = {lat: 40.803544, lng: -111.773849}
			distance(coordinates, coordinates1, function(length){
				distance(51.515400, 7.455185, 40.803544, -111.773849, function(length1){
					length.should.be.exactly(length1)
				})
			})
		})
	})

	describe('unit conversions', function(){
		it('should convert KM into respective units', function(done){
			toMiles(1).should.be.exactly(0.621371);
			toMeters(1).should.be.exactly(1000);
			toYards(1).should.be.exactly(1093.61);
			toFeet(1).should.be.exactly(3280.84);
			done();
		})
	})
})