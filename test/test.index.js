/**
 * 测试 文件
 * @author ydr.me
 * @create 2016-05-17 12:13
 */


'use strict';

var hashbang = require('../src/index.js');

describe('测试文件', function () {
    var hs = '/a/b/c/?x=1&y=2&z=3';

    it('.parse', function () {
        expect(hashbang.parse('')).toEqual('/');
        expect(hashbang.parse('#')).toEqual('/');
        expect(hashbang.parse('#/')).toEqual('/');
        expect(hashbang.parse('#!')).toEqual('/');
        expect(hashbang.parse('#' + hs)).toEqual(hs);
        expect(hashbang.parse('#!(@!' + hs)).toEqual(hs);
    });

    it('.stringify', function () {
        expect(hashbang.stringify('/')).toEqual('#/');
        expect(hashbang.stringify('/', '!')).toEqual('#!/');
        expect(hashbang.stringify('/', '~~')).toEqual('#~~/');
        expect(hashbang.stringify('/123/456')).toEqual('#/123/456');
    });

    it('.is', function () {
        expect(hashbang.is('#!/', '!')).toBe(true);
        expect(hashbang.is('#!/')).toBe(true);
        expect(hashbang.is('#!/', '~')).toBe(false);
    });
});
