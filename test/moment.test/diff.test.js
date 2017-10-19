/**
 * Created by Administrator on 2017/5/24.
 */
var http = require('http');

var moment = require('moment');

var diff = moment().diff(moment("1495632924915"), 'seconds');//离场多少秒
console.log(diff);