'use strict';
var punycode = require('punycode');

var regex = function (opts) {
  opts = opts || {};
  var re = '[^\\.\\s@][^\\s@]*(?!\\.)@[^\\.\\s@]+(?:\\.[^\\.\\s@]+)*';
  return opts.exact ? new RegExp('^' + re + '$') : new RegExp(re, 'g');
  //var re = /^([\w_\.\-\+])+\@([\w\-]+\.)+([\w]{2,10})+$/;
  //var re = '(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))';
  //return opts.exact ? new RegExp('^' + res + '$', 'i') : new RegExp(res, 'ig');
}

var Email = function() {}

Email.prototype.re = function(opts) {
  return regex(opts);
}

Email.prototype.is = function(str) {
  return regex({exact: true}).test(punycode.toASCII(str));
}

Email.prototype.contain = function(str) {
  return regex().test(punycode.toASCII(str));
}

Email.prototype.match = function(str) {
  return punycode.toASCII(str).match(regex());
}

exports = module.exports = new Email();
