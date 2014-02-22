var should = require('should');
var geotools = require('../src/geotools.js')

describe('GeoTools', function(){
	describe('geocode', function(){
		it('should geocode a given address', function(done){
			var address = '717 California Street San Francisco CA'
			geocode(address, function(coordinates){
				coordinates.should.have.property('lng').and.be.type('number');
				done();
			})
		})

		it('should reverse geocode a given set of lat & lng', function(done){
			
		})
	})
})