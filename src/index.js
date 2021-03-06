/**
 * blear.utils.hashbang
 * @author ydr.me
 * @create 2016年06月04日14:09:36
 */

'use strict';

var string = require('blear.utils.string');

var reHashbang = /#([^/]*)\/.*$/;
var reHashFlag = /^#([^/]*)/;


/**
 * 设置 hashbang 为 hashstring
 * @param path {String} path
 * @param [split] {String} 分隔符
 * @returns {string}
 */
exports.stringify = function (path, split) {
    split = split || '';
    return '#' + split + path;
};


/**
 * 解析 hashstring 为 hashbang
 * @param hashstring {String} hashstring
 * @type {Function}
 * @returns {String}
 */
exports.parse = function (hashstring) {
    var matches = hashstring.match(reHashbang);

    if (!matches) {
        return '/';
    }

    // 移除“#”
    return matches[0].replace(reHashFlag, '');
};


/**
 * 判断是否 hashbang
 * @param hashstring
 * @param [split]
 * @returns {boolean}
 */
exports.is = function (hashstring, split) {
    var reStr = split || '';
    reStr += '/';
    var re = new RegExp('^#+' + string.escapeRegExp(reStr));
    return re.test(hashstring);
};