'use strict';
var punycode = require('punycode');

var re = /^[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,6}$/i;
var re = /(?!:\/\/)([a-zA-Z0-9-]+\.){0,5}[a-zA-Z0-9-][a-zA-Z0-9-]+\.[a-zA-Z]{2,64}?/;

var Domain = function() {

  this.is = function(str) {
    return domain({exact: true}).test(punycode.toASCII(str));
  }

  this.contain = function(str) {
    return domain().test(punycode.toASCII(str));
  }

  this.match = function(str) {
    return punycode.toASCII(str).match(domain());
  }

  var domain = function (opts) {
    opts = opts || {};
    return opts.exact
      ? /^((?=[a-z0-9-]{1,63}\.)(xn--)?[a-z0-9]+(-[a-z0-9]+)*\.)+[a-z]{2,6}$/i
      : /((?=[a-z0-9-]{1,63}\.)(xn--)?[a-z0-9]+(-[a-z0-9]+)*\.)+[a-z]{2,6}/ig
    //return opts.exact ? new RegExp('^' + re + '$', 'i') : new RegExp(re, 'ig');
  }

}

exports = module.exports = new Domain();