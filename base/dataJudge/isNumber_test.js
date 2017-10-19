/**
 * Created by Administrator on 2017/8/16.
 */
var http = require('http');



var isNumber=function(obj){
    return Object.prototype.toString.call(obj)==='[object Number]';
}

console.log(isNumber(1));
console.log(isNumber('1'));
console.log(isNumber(new Number()));