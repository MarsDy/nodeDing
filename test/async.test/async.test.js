/**
 * Created by Administrator on 2017/4/22.
 */
var http = require('http');
var async = require('async');
var redis = require('redis');

var client = redis.createClient({port: 6379, host: '192.168.1.27', password: 'ql;555', db: 2});

//client.set("key1", 1, function (err, res) {
//    console.log(res);
//});
//client.set("key2", 2, function (err, res) {
//    console.log(res);
//});
/***************************并行执行***************************************************/

//async.parallel({
//    val1: function (cb) {
//        client.get("key1", function (err, res) {
//            console.log(res);
//            cb(null, res - 0);
//        });
//    },
//    val2: function (cb) {
//        client.get("key2", function (err, res) {
//            console.log(res);
//            cb(null, res - 0);
//        });
//    }
//}, function (err, res) {
//    var add = res.val1 + res.val2;
//    console.log(add);
//
//})


/***************************顺序执行***************************************************/

//async.auto({
//
//    key3: ["key1", "key2", function (res, cb) {
//        console.log("key3-res:", res);
//        cb(null, 'key3-exec');
//    }],
//
//    key1: function (cb) {
//        client.get("key1", function (err, res) {
//            console.log(res);
//            cb(null, res - 0, "add");
//        });
//    },
//    key2: function (cb) {
//        client.get("key2", function (err, res) {
//            console.log(res);
//            cb(null, res - 0);
//        });
//    }
//
//}, function (err, res) {
//    console.log('err = ', err);
//    console.log('results = ', res);
//});

/***Inject 注入********************/
//async.autoInject({
//
//    key3: function (key1, key2, cb) {
//        console.log("key3-res:", key1,key2);
//        cb(null, 'key3-exec');
//    },
//
//    key1: function (cb) {
//        client.get("key1", function (err, res) {
//            console.log(res);
//            cb(null, res - 0, "add");
//        });
//    },
//    key2: function (cb) {
//        client.get("key2", function (err, res) {
//            console.log(res);
//            cb(null, res - 0);
//        });
//    }
//
//}, function (err, res) {
//    console.log('err = ', err);
//    console.log('results = ', res);
//});


/***cargo ********************/
/**
 * cargo--货物
 *  装载函数，
 */

//var cargo = async.cargo(function (tasks, cb) {
//    for (var i = 0; i < tasks.length; i++) {
//        console.log("key:", tasks[i].name);
//    }
//    cb("err");
//}, 1);
//
//cargo.push({name: "key1"}, function (err) {
//    console.log('finished processing key1',err);
//})
//cargo.push({name: "key2"}, function (err) {
//    console.log('finished processing key2',err);
//})
//cargo.push({name: "key3"}, function (err) {
//    console.log('finished processing key3',err);
//})
//cargo.push({name: "key4"}, function (err) {
//    console.log('finished processing key4',err);
//})

/***compose ********************/
//
//var add1 = function (n, cb) {
//    client.get("key1", function (err, res) {
//        cb(null, n + 1);
//    })
//
//}
//
//var add2 = function (n, cb) {
//    client.get("key1", function (err, res) {
//        cb(null, n * 3);
//    })
//
//}
//
//var add1add2 = async.compose(add1, add2);
//add1add2(4, function (err, res) {
//    console.log(res);//13
//})
//var add2add1 = async.compose(add2, add1);
//add2add1(4, function (err, res) {
//    console.log(res);//15
//})

/***doDuring ********************/


/***forever ********************/
//var count = 0;
//async.forever(
//    function (next) {
//        count++;
//        console.log(arguments);
//        next();
//    },
//    function (err) {
//
//    }
//)


/***dir ********************/
//
//var hello = function (name, callback) {
//    setTimeout(function () {
//        callback(null, {hello: name},{xxxx:1});
//    }, 1000)
//}
//
//async.dir(hello, 'world');


/***memoize 自定义自己的函数名称********************/

//var slow=function(name,cb){
//    cb();
//}
//
//var fn=async.memoize(slow);
//
//fn('xx',function(err,res){
//
//})


/***sortBy ********************/
//async.sortBy([1,9,3,5],function(x,cb){
//        cb(null,x);
//},function(err,res){
//    console.log("res:",res);
//})


/***each ********************/

var obj={
    "key1":11,
    "key2":21,
    "key3":31,
}

async.each(obj,function(item,cb){
    console.log("item-",item);

},function(err,res){
    console.log("res:",res);
})