/**
 * blear.utils.hashbang
 * @author ydr.me
 * @create 2016年06月04日14:09:36
 */

'use strict';

var reHashbang = /#([^/]*)\/.*$/;
var reHashFlag = /^#([^/]*)/;


/**
 * 设置 hashbang 为 hashstring
 * @param hashbang {String} hashbang
 * @param [split] {String} 分隔符
 * @returns {string}
 */
exports.stringify = function (hashbang, split) {
    split = split || '';
    return '#' + split + hashbang;
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