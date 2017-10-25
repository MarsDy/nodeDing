/**
 * Created by Administrator on 2017/4/20.
 */
var util = require('util');
var http = require('http');
var Parent = require('./Parent');

var bearcat = require('bearcat');
var Child = function () {
    // Parent.call(this);/
    // /对象继承
    this.cid = "child123";

}
util.inherits(Child,Parent);

//Child.prototype.showID = function (b, a) {
//    console.log("=====Child:", this.name, b, a);
//};


module.exports = Child;
