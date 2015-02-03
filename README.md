# relib [![Build Status](https://travis-ci.org/markzhan/relib.svg?branch=master)](https://travis-ci.org/markzhan/relib)

A regular expression library for node.js


## Install

```sh
$ npm install relib --save
```

## Usage

```js
var re = require('relib');

re.ip.is('192.168.0.1'); //=> true
re.ip.is('1:2:3:4:5:6:7:8'); //=> true
re.ip.v4('1:2:3:4:5:6:7:8'); //=> false
```

## API

### ip

* ip.is(string)  Check if a string is IPv4 or IPv6.
* ip.v4(string)  Check if a string is IPv4.
* ip.v6(string)  Check if a string is IPv6.
* ip.contain(string)  Check if a string contains IPv4 or IPv6.
* ip.match(string)  Return an array if a string contains IPv4 or IPv6.

###


## License

MIT © [Mark Zhan](http://markzhan.com)
