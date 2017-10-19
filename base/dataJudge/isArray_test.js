/**
 * Created by Administrator on 2017/8/16.
 */
var http = require('http');
var _ = require('underscore');

var aa = [];
console.log(_.isArray(aa));
/****
 * 源码来自 underscore.js
 * 判断是否为数组
 * 由于Array.isArray函数是ECMAScript 5新增函数，所以为了兼容之前的版本，在原生判断函数不存在的情况下，后面重写了一个判断函数。
 * 用call函数来改变作用域可以避免当obj没有toString函数报错的情况
 ***/
var _isArray = Array.isArray || function (obj) {
        return Object.prototype.toString.call(obj) === '[object Array]';
    }


console.log(_isArray(aa));