/**
 * Created by Administrator on 2017/8/16.
 */
var http = require('http');

/****
 * 源码来自 underscore.js
 * 判断是否为对象。
 * 先用typeof判断数据类型。
 * 函数也属于对象，但是由于typeof null也是object，所以用!!obj来区分这种情况
 ***/
var isObject = function (obj) {
    var type = typeof obj;
    return type === 'function' || type === 'object' && !!obj;
}

var c = {};
console.log(isObject(c));//true
console.log(isObject(null));//false
console.log(isObject(void 0));//false
console.log(typeof void 0);//undefined
console.log(typeof null);//object
console.log(isObject(1));//false
console.log(isObject(new Number(1)));//true



