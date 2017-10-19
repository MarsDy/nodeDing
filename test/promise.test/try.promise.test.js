/**
 * Created by Administrator on 2017/5/15.
 */


var http = require('http');
var Promise=require('bluebird');


//Promise.try calls the passed function immediately while Promise.method returns awrapped version of if.

var p1=new Promise(function(resolve,reject){
    throw 'bla bla 1';
})

var p2=Promise.try(function(){
    throw 'bla bla 2'
})

var p3=Promise.try(function(){
    return 'bal bal 3'
})

p1.catch(function(err){
    console.log(err);
})

p2.catch(function(err){
    console.log(err);
})

p3.then(function(res){
    console.log(res);
})