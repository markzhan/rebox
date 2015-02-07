'use strict';

var ip = require('../lib/ip.js').ip.v4().source;
var tlds = require('../tlds.json').join('|');

var urlre = function (opts) {
  opts = opts || {};

  var auth = '(?:\\S+(?::\\S*)?@)?';
  var domain = '(?:\\.(?:xn--[a-z0-9\\-]{1,59}|(?:[a-z\\u00a1-\\uffff0-9]+-?){0,62}[a-z\\u00a1-\\uffff0-9]{1,63}))*';
  var host = '(?:xn--[a-z0-9\\-]{1,59}|(?:(?:[a-z\\u00a1-\\uffff0-9]+-?){0,62}[a-z\\u00a1-\\uffff0-9]{1,63}))';
  var path = '(?:\/[^\\s]*)?';
  var port = '(?::\\d{2,5})?';
  var protocol = '(?:(?:(?:\\w)+:)?\/\/)?';
  var tld = '(?:\\.(?:xn--[a-z0-9\\-]{1,59}|' + tlds + '+))';

  var regex = [
  protocol + auth + '(?:' + ip + '|',
  '(?:localhost)|' + host + domain + tld + ')' + port + path
  ].join('');

  return opts.exact ? new RegExp('(?:^' + regex + '$)', 'i') :
  new RegExp('(?:^|\\s)(["\'])?' + regex + '\\1', 'ig');
};

var Url = function() {}

Url.prototype.re = function(opts) {
  return urlre(opts);
}

Url.prototype.is = function(str) {
  return urlre({exact: true}).test(str);
}

Url.prototype.contain = function(str) {
  return urlre().test(str);
}

Url.prototype.match = function(str) {
  return str.match(urlre());
}

exports = module.exports = new Url();
