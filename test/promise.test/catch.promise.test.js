/**
 * Created by Administrator on 2017/5/13.
 */
var http = require('http');

var Promise = require('bluebird');

var testFun = function () {
    return Promise.try(function () {
        var a = {};

        var b = JSON.parse(a);

        return b;
    })
}


Promise.resolve({}).then(JSON.parse)
    .catch(SyntaxError, function (e) {
        console.log('SyntaxError');
        console.log('SyntaxError', SyntaxError);
        console.error(e);
    })
    .catch(TypeError, function (e) {
        console.log('TypeError');
        console.log(TypeError);
        console.error(e);
    })
    .catch(function (e) {
        console.log('n');
        console.error(e);
    })

Promise.resolve(5).then(testFun)
    .catch(SyntaxError, function (e) {
        console.log('SyntaxError');
        console.log('SyntaxError', SyntaxError);
        console.error(e);
    })
    .catch(TypeError, function (e) {
        console.log('TypeError');
        console.log(TypeError);
        console.error(e);
    })
    .catch(function (e) {
        console.log('n');
        console.error(e);
    })