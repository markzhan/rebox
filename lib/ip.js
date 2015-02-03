'use strict';
var ipRegex = require('ip-regex');

module.exports = {
  is: function(str) {
    return ipRegex({exact: true}).test(str);
  },
  v4: function(str) {
    return ipRegex.v4({exact: true}).test(str);
  },
  v6: function(str) {
    return ipRegex.v6({exact: true}).test(str);
  },
  contain: function(str) {
    return ipRegex().test(str);
  },
  match: function(str) {
    return str.match(ipRegex());
  }
};
