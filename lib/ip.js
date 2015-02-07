'use strict';

var Ip = function() {

  var v4 = '(?:25[0-5]|2[0-4][0-9]|1?[0-9][0-9]{1,2}|[0-9]){1,}(?:\\.(?:25[0-5]|2[0-4][0-9]|1?[0-9]{1,2}|0)){3}';
  var v6 = '(?:(?:[0-9a-fA-F:]){1,4}(?:(?::(?:[0-9a-fA-F]){1,4}|:)){2,7})+';

  var ip = function (opts) {
    opts = opts || {};
    return opts.exact
    ? new RegExp('(?:^' + v4 + '$)|(?:^' + v6 + '$)')
    : new RegExp('(?:' + v4 + ')|(?:' + v6 + ')', 'g');
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

Ip.prototype.re = function(opts) {
  return this.ip(opts);
}

Ip.prototype.is = function(str) {
  return this.ip({exact: true}).test(str);
}

Ip.prototype.v4 = function(str) {
  return this.ip.v4({exact: true}).test(str);
}

Ip.prototype.v6 = function(str) {
  return this.ip.v6({exact: true}).test(str);
}

Ip.prototype.contain = function(str) {
  return this.ip().test(str);
}

Ip.prototype.match = function(str) {
  return str.match(this.ip());
}

exports = module.exports = new Ip();
