const chai = require('chai');
const should = chai.should();
const expect = chai.expect();

const emails_regex = require('../index.js');

const validMatches = [
  'avinash@gmail.com', 'raman@yamaha.in',
];

const invalidMatches = [
  'prachi', 'avinash@icici'
];

describe('Emails-regex', function() {
  describe('#emails-regex()', function() {
    it('should return regex that matches valid emails\'s', function() {
      validMatches.forEach(function(text) {
        text.should.be.a('string');
        should.exist(text.match(emails_regex()));
      })
    });
    it('should return regex that doesn\'t match invalid emails\'s', function() {
      invalidMatches.forEach(function(text) {
        text.should.be.a('string');
        should.not.exist(text.match(emails_regex()));
      })
    });
  });
});
