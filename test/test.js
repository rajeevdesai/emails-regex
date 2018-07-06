const chai = require('chai');
const should = chai.should();
const expect = chai.expect();

const emails_regex = require('../index.js');

const validMatches = [
  'avinash@gmail.com', 'raman@yamaha.in', 'johndoe@yahoo.co.uk'
];

const invalidMatches = [
  'prachi', 'avinash@icici', 'nasa.gov', 'abc.xyz.def', 'whatever@@xyz.com'
];

describe('Emails-regex', function() {
  describe('#emails-regex()', function() {
    it('should return regex that matches valid email\'s', function() {
      validMatches.forEach(function(text) {
        text.should.be.a('string');
        should.exist(text.match(emails_regex()));
      })
    });
    it('should return regex that doesn\'t match invalid email\'s', function() {
      invalidMatches.forEach(function(text) {
        text.should.be.a('string');
        should.not.exist(text.match(emails_regex()));
      })
    });
  });
});
