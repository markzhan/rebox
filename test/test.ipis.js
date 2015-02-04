'use strict';
var test = require('ava');
var re = require('../');

test(function (t) {
  t.assert(re.ip.is('192.168.0.1'));
  t.assert(re.ip.is('1:2:3:4:5:6:7:8'));
  t.assert(!re.ip.is('unicorn 192.168.0.1'));
  t.assert(re.ip.v4('192.168.0.1'));
  t.assert(!re.ip.v6('192.168.0.1'));
  t.assert(re.ip.v6('1:2:3:4:5:6:7:8'));
  t.assert(!re.ip.v4('1:2:3:4:5:6:7:8'));
  t.assert(re.ip.contain('unicorn 192.168.0.1'));
  t.assert(re.ip.contain('unicorn 1:2:3:4:5:6:7:8'));
  t.assert(re.ip.match('unicorn 192.168.0.1 cake 1:2:3:4:5:6:7:8 rainbow'));
});
