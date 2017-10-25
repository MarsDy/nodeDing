/**
 * Created by Administrator on 2017/5/13.
 */
var http = require('http');
var Promise = require('bluebird');


Promise.delay(500).then(function () {
    return Promise.reject(1);
}).then(function (res) {
    console.log(res);
}).catch(function (err) {
    console.log("err", err)
})
