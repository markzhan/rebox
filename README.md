# relib [![Build Status](https://travis-ci.org/markzhan/relib.svg?branch=master)](https://travis-ci.org/markzhan/relib) [![Coverage Status](https://coveralls.io/repos/markzhan/relib/badge.svg)](https://coveralls.io/r/markzhan/relib)

A regular expression library for node.js


## Installation

```sh
$ npm install relib
or
$ npm install relib --save
```

## Usage

```js
var re = require('relib');
re.ip.is('192.168.0.1'); // true
re.ip.is('1:2:3:4:5:6:7:8'); // true
re.domain.is('markzhan.com'); // true
re.domain.is('domain'); // false
```
or
```js
var ip = require('relib').ip;
ip.v6('192.168.0.1'); // false
ip.v6('1:2:3:4:5:6:7:8'); // true
ip.v4('1:2:3:4:5:6:7:8'); // false
ip.v4('192.168.0.1'); // true
```

## API

### IP Address Regex
```js
var ip = require('relib').ip;
```
* ip.v4(string)  - Check if a string is IPv4.
* ip.v6(string)  - Check if a string is IPv6.
* ip.is(string)  - Check if a string is IPv4 or IPv6.
* ip.match(string)  - Return an array if a string contains IPv4 or IPv6.
* ip.contain(string)  - Check if a string contains IPv4 or IPv6.

### Domain Regex with IDN Support
```js
var domain = require('relib').domain;
```
* domain.is(string)  - Check if a string is Domain.
* domain.match(string)  - Return an array if a string contains Domain.
* domain.contain(string)  - Check if a string contains Domain.

...


## Contributions

To run the tests for **relib** simply run:
```sh
npm i && npm test  # install dev dependencies and test
```
For bugs and feature requests, [please create an issue](https://github.com/markzhan/relib/issues).

Pull requests and stars are always welcome.

1. Fork it
2. Create your feature branch (git checkout -b my-new-feature)
3. Commit your changes (git commit -am 'Add some feature')
4. Push to the branch (git push origin my-new-feature)
5. Create new Pull Request

[contributors](https://github.com/markzhan/relib/graphs/contributors)


## License

MIT © 2015 [Mark Zhan](http://markzhan.com).
