[![Build Status](https://travis-ci.org/markzhan/relib.svg?branch=master)](https://travis-ci.org/markzhan/relib)
[![Coverage Status](https://coveralls.io/repos/markzhan/relib/badge.svg)](https://coveralls.io/r/markzhan/relib)
[![NPM Downloads](https://img.shields.io/npm/dm/relib.svg?style=flat)](https://www.npmjs.org/package/relib)


# relib

A regular expression library for node.js


## Installation

```sh
$ npm install relib
or
$ npm install relib --save
```

## Usage

```js
var relib = require('relib');

relib.ip.is('192.168.0.1'); // true
relib.ip.is('1:2:3:4:5:6:7:8'); // true

relib.domain.is('github.com'); // true
relib.domain.is('domain'); // false
```
or
```js
var ip = require('relib').ip;
ip.is('192.168.0.1'); // true
ip.is('1:2:3:4:5:6:7:8'); // true
...
var domain = require('relib').domain;
domain.is('github.com'); // true
domain.is('domain'); // false
```

## API

- [IP Address Regex](#ip)
- [Domain Regex with IDN Support](#domain)
- [URLs Regex](#url)
- [Email Address Regex](#email)
...

<a name='ip'></a>
### IP Address Regex

* **ip.v4(string)**  - Check if a string is IPv4.
* **ip.v6(string)**  - Check if a string is IPv6.
* **ip.is(string)**  - Check if a string is IPv4 or IPv6.
* **ip.contain(string)**  - Check if a string contains IPv4 or IPv6.
* **ip.match(string)**  - Return an array if a string contains IPv4 or IPv6.
* **ip.re([{exact: true}])**  - Returns a regex for matching both IPv4 and IPv6.

```js
var ip = require('relib').ip;

ip.v4('192.168.0.1'); // true
ip.is('1:2:3:4:5:6:7:8'); // true
ip.v6('1:2:3:4:5:6:7:8'); // true
ip.v4('1:2:3:4:5:6:7:8'); // false
ip.contain('unicorn 192.168.0.1 cake 1:2:3:4:5:6:7:8 rainbow'); // true
ip.match('unicorn 192.168.0.1 cake 1:2:3:4:5:6:7:8 rainbow'); // ['192.168.0.1', '1:2:3:4:5:6:7:8']
ip.re({exact: true}).test('unicorn 192.168.0.1'); // false
ip.re().test('unicorn 192.168.0.1'); // true
```
<a name='domain'></a>
### Domain Regex with IDN Support

* **domain.is(string)**  - Check if a string is domain.
* **domain.contain(string)**  - Check if a string contains domain.
* **domain.match(string)**  - Return an array if a string contains domain.
* **domain.re([{exact: true}])**  - Return a regex for matching domain.

```js
var domain = require('relib').domain;

domain.is('example.com'); // true
domain.is('unicorn example.com'); // false
domain.contain('unicorn example.com cake a.sub.domain.org rainbow'); // true
domain.match('unicorn example.com cake a.sub.domain.org rainbow'); // ['example.com', 'a.sub.domain.org']
domain.re({exact: true}).test('unicorn example.com'); // false
domain.re().test('unicorn example.com'); // true
```
<a name='url'></a>
### URLs Regex

* **url.is(string)**  - Check if a string is URL.
* **url.contain(string)**  - Check if a string contains URL.
* **url.match(string)**  - Return an array if a string contains URL.
* **url.re([{exact: true}])** - Return a regex for matching URLs.

```js
var url = require('relib').url;

url.is('https://github.com'); // true
url.contain('foo github.com bar google.com'); // true
url.match('foo https://github.com bar google.com'); // ['https://github.com', 'google.com']
url.re().test('github.com foo bar'); // true
url.re({exact: true}).test('github.com foo bar'); // false
```
<a name='email'></a>
### Email Address Regex

* **email.is(string)**  - Check if a string is email address.
* **email.contain(string)**  - Check if a string contains email address.
* **email.match(string)**  - Return an array if a string contains email address.
* **email.re([{exact: true}])** - Return a regex for matching email addresses.

```js
var email = require('relib').email;

email.is('sindresorhus@gmail.com'); // true
email.contain('unicorn sindresorhus@gmail.com'); // true
email.match('unicorn sindresorhus@gmail.com cake john@doe.com rainbow'); // ['sindresorhus@gmail.com', 'john@doe.com']
email.re().test('unicorn sindresorhus@gmail.com'); // true
email.re({exact: true}).test('unicorn sindresorhus@gmail.com'); // false
```

...


## References

- https://github.com/sindresorhus/ip-regex
- https://github.com/johnotander/domain-regex
- https://github.com/kevva/url-regex
- https://github.com/sindresorhus/email-regex
...


## Contributions

To run the tests for **relib** simply run:
```sh
npm i && npm test  # install dev dependencies and test
```
For bugs and feature requests, [please create an issue](https://github.com/markzhan/relib/issues).

Pull requests is always welcome.

1. Fork it
2. Create your feature branch `git checkout -b my-new-feature`
3. Commit your changes `git commit -am 'Add some feature'`
4. Push to the branch `git push origin my-new-feature`
5. Create new Pull Request

[Contributors](https://github.com/markzhan/relib/graphs/contributors)


## License

MIT © 2015 [Mark Zhan](http://markzhan.com).
