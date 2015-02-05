'use strict';
var ip = require('../').ip;
var assert = require('assert');

var v4 = [
	'0.0.0.0',
	'8.8.8.8',
	'127.0.0.1',
	'100.100.100.100',
	'192.168.0.1',
	'18.101.25.153',
	'123.23.34.2',
	'172.26.168.134',
	'212.58.241.131',
	'128.0.0.0',
	'23.71.254.72',
	'223.255.255.255',
	'192.0.2.235',
	'99.198.122.146',
	'46.51.197.88',
	'173.194.34.134'
];

var v4not = [
	'.100.100.100.100',
	'100..100.100.100.',
	'100.100.100.100.',
	'999.999.999.999',
	'256.256.256.256',
	'256.100.100.100.100',
	'123.123.123',
	'http://123.123.123'
];

var v6 = [
	'1::',
	'1::8',
	'1::7:8',
	'1:2:3:4:5:6:7:8',
	'1:2:3:4:5:6::8',
	'1:2:3:4:5:6:7::',
	'1:2:3:4:5::7:8',
	'1:2:3:4:5::8',
	'1:2:3::8',
	'1::4:5:6:7:8',
	'1::6:7:8',
	'1::3:4:5:6:7:8',
	'1:2:3:4::6:7:8',
	'1:2::4:5:6:7:8',
	'::2:3:4:5:6:7:8',
	'1:2::8'
];

var v6not = [
	'1:2:3:4:5:6:1.2.3.4',
	'::',
	'1:',
	':1'
];

describe('ip', function(){
	it('ip.ip(v4)', function(){
		v4.forEach(function (el) {
			assert.ok(ip.ip({exact: true}).test(el));
		});
		v4.forEach(function (el) {
			assert.ok((ip.ip().exec('foo ' + el + ' bar') || [])[0] === el);
		});
		v4not.forEach(function (el) {
			assert.ok(!ip.ip({exact: true}).test(el));
		});
	});

	it('ip.ip(v6)', function(){
		v6.forEach(function (el) {
			assert.ok(ip.ip({exact: true}).test(el));
		});
		v6.forEach(function (el) {
			assert.ok((ip.ip().exec('foo ' + el + ' bar') || [])[0] === el);
		});
		v6not.forEach(function (el) {
			assert.ok(!ip.ip({exact: true}).test(el));
		});
	});

	it('ip.ip.v4(v4)', function(){
		v4.forEach(function (el) {
			assert.ok(ip.ip.v4({exact: true}).test(el));
		});
		v4.forEach(function (el) {
			assert.ok((ip.ip.v4().exec('foo ' + el + ' bar') || [])[0] === el);
		});
		v4not.forEach(function (el) {
			assert.ok(!ip.ip.v4({exact: true}).test(el));
		});
	});

	it('ip.ip.v6(v6)', function(){
		v6.forEach(function (el) {
			assert.ok(ip.ip.v6({exact: true}).test(el));
		});
		v6.forEach(function (el) {
			assert.ok((ip.ip.v6().exec('foo ' + el + ' bar') || [])[0] === el);
		});
		v6not.forEach(function (el) {
			assert.ok(!ip.ip.v6({exact: true}).test(el));
		});
	});

	it('ip.is()', function(){
		assert.ok(ip.is('192.168.0.1'));
		assert.ok(ip.is('1:2:3:4:5:6:7:8'));
		assert.ok(!ip.is('unicorn 192.168.0.1'));
	});

	it('ip.v4(), ip.v6()', function(){
		assert.ok(ip.v4('192.168.0.1'));
		assert.ok(!ip.v4('1:2:3:4:5:6:7:8'));
		assert.ok(ip.v6('1:2:3:4:5:6:7:8'));
		assert.ok(!ip.v6('192.168.0.1'));
	});

	it('ip.contain(), ip.match()', function(){
		assert.ok(ip.contain('unicorn 192.168.0.1'));
		assert.ok(ip.contain('unicorn 1:2:3:4:5:6:7:8'));
		assert.ok(ip.match('unicorn 192.168.0.1 cake 1:2:3:4:5:6:7:8 rainbow'));
	});

});
