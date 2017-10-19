/**
 * Created by Administrator on 2017/8/16.
 */
var http = require('http');

var isBoolean = function (obj) {
    return obj === true || obj === false || toString.call(obj) === '[object Boolean]';
}

console.log(isBoolean(new Boolean()));
console.log(isBoolean(!!2));
console.log(new Boolean());
console.log(new Boolean()===true);
console.log(new Boolean()===false);