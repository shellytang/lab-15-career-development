'use strict';

const expect = require('chai').expect;
const Linter = require('../linter');

describe('Linter Module', function() {

  describe('a string with balanced openers and closers', function() {
    it('should return true', done => {
      let balancedTestStr = '[]{}()';
      let testBalanced = Linter(balancedTestStr);
      expect(testBalanced).to.be.true;
      done();
    });
  });

  describe('a string with an extra opening [ ( or { ', function() {
    it('should return false', done => {
      let openerTestString = '[]{';
      let testOpener = Linter(openerTestString);
      expect(testOpener).to.be.false;
      done();
    });
  });

  describe('a string with an extra closing ] ) or } ', function() {
    it('should return false', done => {
      let closerTestString = '[]{})';
      let testCloser = Linter(closerTestString);
      expect(testCloser).to.be.false;
      done();
    });
  });

});
