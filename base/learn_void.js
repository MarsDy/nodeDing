/**
 * Created by Administrator on 2017/8/16.
 */
var http = require('http');
var _=require('underscore');


/****void 是一个关键字，一元操作符
 * 它唯一作用就是返回一个undefined,不管这个操作符后面传的操作数是什么
 */

/**void可以像下面这样使用**/
void 0;
void "you are useless?";
void false;
void [];
void /(useless)/ig;
void function () {
    console.log("you are so useless?");
}

void function b() {
    var a=1;
    console.log(a);
}();
var c=+'a';
console.log(c);
console.log(void 0);
var num=new Number();
console.log(_.isNumber(num));
var aa=[];
console.log(Object.prototype.toString.call(aa));

