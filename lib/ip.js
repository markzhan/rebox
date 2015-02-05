'use strict';
var re = require('../lib/re.js');

var Ip = function() {

  this.is = function(str) {
    return ip({exact: true}).test(str);
  }

  this.v4 = function(str) {
    return ip.v4({exact: true}).test(str);
  }

  this.v6 = function(str) {
    return ip.v6({exact: true}).test(str);
  }

  this.contain = function(str) {
    return ip().test(str);
  }

  this.match = function(str) {
    return str.match(ip());
  }

  var v4 = re.ipv4;
  var v6 = re.ipv6;

  var ip = function (opts) {
    opts = opts || {};
    return opts.exact ?
    new RegExp('(?:^' + v4 + '$)|(?:^' + v6 + '$)') :
    new RegExp('(?:' + v4 + ')|(?:' + v6 + ')', 'g');
  };

  ip.v4 = function (opts) {
    opts = opts || {};
    return opts.exact ? new RegExp('^' + v4 + '$') : new RegExp(v4, 'g');
  };

  ip.v6 = function (opts) {
    opts = opts || {};
    return opts.exact ? new RegExp('^' + v6 + '$') : new RegExp(v6, 'g');
  };

  this.ip = ip;

}

exports = module.exports = new Ip();
