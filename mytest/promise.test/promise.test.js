/**
 * Created by Administrator on 2017/4/24.
 */
var http = require('http');
var Promise = require('bluebird');

var func = function (val, cb) {
    setTimeout(function () {
        cb(null, val);
    }, 10);
}

var funcAsync = Promise.promisify(func);
funcAsync('test').then(function (val) {
    console.log(val);
});


/***1-原生写法**/

function asyncFunction() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve("Async Hello world");
        }, 16);
    });
}


asyncFunction().then(function (value) {
    console.log(value);

}).catch(function (error) {
    console.log(error);
});

/***1-addEventListener写法**/


function ajaxGetAsync(url) {
    return new Promise(resolve, reject)
    {
        var xhr = new XMLHttpRequest;
        xhr.addEventListener('error', reject);
        xhr.addEventListener('load', resolve);
        xhr.open('GET', url);
        xhr.send(null);
    }
}

ajaxGetAsync('http://itbilu.com')
    .then(function (result) {
        //请求成功

    })
    .catch(function (err) {
        //请求失败
    });
//Promise.resolve(42).then(function (value) {
//    console.log(value);
//    return value;
//}).then(function (value) {
//    console.log(value + "--2");
//});
//
//function onReady(fn) {
//    var ready = document.readyState;
//
//}






