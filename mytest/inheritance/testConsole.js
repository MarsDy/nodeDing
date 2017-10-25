/**
 * Created by Administrator on 2017/4/20.
 */
var http = require('http');
var Child=require('./Child');
// var contextPath = require.resolve('./context.json');
//
// var Bearcat = require('bearcat');
// var bearcat = Bearcat.createApp([contextPath]);
// console.log(contextPath);
// bearcat.start(function () {
//     var child = Bearcat.getBean('child');
//     var Parent = bearcat.getFunction('parentaaa');
// //console.log(child.sid);
//     new Parent().showID();
//     child.showID(1,2);
//     console.log(child.pid);
// });

var child=new Child();
child.showID();
console.log(child.pid);