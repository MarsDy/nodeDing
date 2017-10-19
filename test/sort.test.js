/**
 * Created by Administrator on 2017/6/15.
 */
var http = require('http');

var c = [1, 4, 2, -1, 5];
c.sort(function (a, b) {
    return a - b;
})

console.log(JSON.stringify(c));

var obj = [{a: 1}, {a: 4}, {a: 2}, {a: -1}, {a: 5}];

obj.sort(function (a, b) {
    return a.a - b.a;
})

console.log(JSON.stringify(obj));