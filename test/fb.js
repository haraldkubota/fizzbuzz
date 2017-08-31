var expect=require('chai').expect;
var should=require('chai').should;

var fb=require('../app/fb.js')

describe('fizzbuzz', function() {
	it('return 1 and 2 for 1 and 2', function() {
		expect(fb(1)).to.be.equal(1);
		expect(fb(2)).to.be.equal(2);
	})
	it('returns fizz for 3', function() {
		expect(fb(3)).to.be.equal('fizz');
	});
	it('return buzz for 5', function() {
		expect(fb(5)).to.be.equal('buzz');
	});
	it('returns fizz for multiple of 3', function() {
		expect(fb(6)).to.be.equal('fizzx');
		expect(fb(9)).to.be.equal('fizz');
	});
	it('returns buzz for multiple of 5', function() {
		expect(fb(10)).to.be.equal('buzz');
		expect(fb(20)).to.be.equal('buzz');
	});
	it('return fizzbuzz for multiple of 3 and 5', function() {
		expect(fb(15)).to.be.equal('fizzbuzz');
		expect(fb(30)).to.be.equal('fizzbuzz');
	})
});
