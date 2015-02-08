'use strict';
var assert = require('assert');
var email = require('../').email;

var iss = [
'sindresorhus@gmail.com',
'foo@bar',
'test@about.museum',
'test@nominet.org.uk',
'test.test@sindresorhus.com',
'test@255.255.255.255',
'a@sindresorhus.com',
'test@e.com',
'test@xn--hxajbheg2az3al.xn--jxalpdlp',
'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghiklm@sindresorhus.com',
'!#$%&amp;`*+/=?^`{|}~@sindresorhus.com',
'test@g--a.com',
'a@abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghikl.abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghikl.abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghikl.abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefg.hij',
'123@sindresorhus.com',
'"\\a"@sindresorhus.com',
'""@sindresorhus.com',
'"test"@sindresorhus.com',
'"\\""@sindresorhus.com',
'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghiklmn@sindresorhus.com',
'test@iana.co-uk',
'a@a.b.c.d.e.f.g.h.i.j.k.l.m.n.o.p.q.r.s.t.u.v.w.x.y.z.a.b.c.d.e.f.g.h.i.j.k.l.m.n.o.p.q.r.s.t.u.v.w.x.y.z.a.b.c.d.e.f.g.h.i.j.k.l.m.n.o.p.q.r.s.t.u.v.w.x.y.z.a.b.c.d.e.f.g.h.i.j.k.l.m.n.o.p.q.r.s.t.u.v.w.x.y.z.a.b.c.d.e.f.g.h.i.j.k.l.m.n.o.p.q.r.s.t.u.v',
'test@foo-bar.com',
];

var nots = [
'@',
'@io',
'@sindresorhus.com',
'test..sindresorhus.com',
'test@iana..com',
'test@sindresorhus.com.',
'.test@sindresorhus.com',
'sindre@sindre@sindre.com'
];

var contains = [
'123@notvalid.com.',
'abc foo@www.abc.com, 123@qq.com'
];

describe('email', function() {

  it('is(String)', function() {
    iss.forEach(function(str){
      assert.ok(email.is(str));
    });
    iss.forEach(function(el){
      assert.ok((email.re().exec('foo ' + el + ' bar') || [])[0] === el);
    });
  });

  it('is(notMatchString)', function() {
    nots.forEach(function(str){
      assert.ok(!email.is(str));
    });
    contains.forEach(function(str){
      assert.ok(!email.is(str));
    });
  });

  it('re([{exact: true}])', function(){
    assert.equal(typeof /re/, typeof email.re());
    assert.equal(typeof /re/, typeof email.re({exact: true}));
  });

  it('contain(string)', function(){
    contains.forEach(function(str){
      assert.ok(email.contain(str));
    });
  });

  it('match(string)', function(){
    contains.forEach(function(str){
      assert.ok(email.contain(str));
    });
  });

});
