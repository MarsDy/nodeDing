/**
 * Created by Administrator on 2017/7/31.
 */
var http = require('http');



var P = function () {

}
P.prototype.name = '__name__';
var p =new P();

var m={}
m.__defineGetter__('name', p);
console.log(m.name);