/**
 * Created by Administrator on 2017/5/13.
 */
var http = require('http');
var Promise = require('bluebird');

var readAsync = function (a) {
    return Promise.try(function () {
        return a;
    })
}

Promise.delay(500).then(function () {
    return [readAsync(1), readAsync(2)];
}).spread(function (res1, res2) {
    console.log(res1, res2);
}).catch(function (e) {
    console.error(e);
})


Promise.all([readAsync(33), readAsync(44)]).spread(function (res1, res2) {
    console.log(res1, res2);
}).catch(function (e) {
    console.error(e);
})