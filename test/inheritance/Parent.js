/**
 * Created by Administrator on 2017/4/20.
 */
var http = require('http');
var util = require('util');
var EventEmitter = require("events").EventEmitter;
var Parent = function () {

    this.pid = "parent123";
}
util.inherits(Parent, EventEmitter);
Parent.prototype.showID = function () {
    console.log(this.pid);
}

//module.exports=Parent;

module.exports = Parent;