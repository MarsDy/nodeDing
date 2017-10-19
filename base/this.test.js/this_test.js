/**腾讯信用分怎么查
 * Created by Administrator on 2017/8/16.
 */
var http = require('http');

/*************Global context*************/


function cc() {
    this.num = 10;
}
cc();
console.log(global.num); //10

console.log(this);//{}  module.exports
console.log(module.exports);//{}
this.num = 11;
console.log(module.exports);//{num:11}
a = 1;
console.log(global.a);

/*************Function context*************/







/******Simple call**********************/

function f1() {
    return this;
}
console.log("Simple call--等于global:", f1() === global);

function f2() {
    'use strict'
    return this;
}
console.log("Simple call--等于undefined:", f2() === void 0);


/******call apply**********************/
var obj = {aa: 'Custom'}
var a = 'Global';
function whatsThis(arg) {
    return this.a;
}

console.log(whatsThis());//Global;
console.log(whatsThis.call(obj));//Custom;
console.log(whatsThis.apply(obj));//Custom;


/******bind**********************/
function f() {
    return this.a;
}




var g = f.bind({a: 'azerty'});
console.log(g());//azerty

var h = g.bind({a: 'yoo'});//bind only works once
console.log(h());//azerty

var o = {a: 37, f: f, g: g, h: h};

console.log(o.f(), o.g(), o.h());


/******Arrow functions--匿名函数--this 是闭包执行环境的this**********************/
var globalObject=this;
// var foo=function(){
//     return ()=>this;
// };
var foo=(()=>this);

console.log(foo()===globalObject);
+function () {
    var b=function(a,c){
        return console.log(a(c));
    }
    b((c)=>2*c,11);
    console.log((2,4));
}()

