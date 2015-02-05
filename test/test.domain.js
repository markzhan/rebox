'use strict';
var assert = require('assert');
var domain = require('../').domain;

var domains = [
  'G.co',
  'example.com',
  'foo.example.com',
  'bar.foo.example.com',
  'a.sub.domain.org',
  'exa-mple.co.uk',
  'example.co.uk',
  'example.2000.hu',
  'example.aerodrome.aero'
];

var notDomains = [
  'exa_mple.com',
  'ex*mple.com',
  'example',
  '1234',
  'invalid_domain',
  'some-example.construction',
  'this.123456789-123456789-123456789-123456789-123456789-123456789-long.com'
];

var containDomains = [
  'notvalid.com.',
  '.notvalid.com',
  '-notvalid.com',
  'notvalid.com-',
  'abc www.abc.com'
];

describe('domain', function() {

  it('is(domain)', function() {
    domains.forEach(function(name){
      assert.ok(domain.is(name));
    });
  });

  it('is(IDNs)', function() {
    assert.ok(domain.is('something.組织.hk'));
    assert.ok(domain.is('組織.tw'));
    assert.ok(domain.is('上海.cn'));
  });

  it('is(not)', function() {
    notDomains.forEach(function(name){
      assert.ok(!domain.is(name));
    });
    containDomains.forEach(function(name){
      assert.ok(!domain.is(name));
    });
  });

  it('contain()', function(){
    containDomains.forEach(function(name){
      assert.ok(domain.contain(name));
    });
    assert.ok(!domain.contain('abc wwwabccom'));
  });

  it('match()', function(){
    assert.ok(domain.match('abc www.abc.com'));
    assert.ok(!domain.match('abc wwwabccom'));
  });

});
