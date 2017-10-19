/**
 * Created by Administrator on 2017/5/13.
 */
var http = require('http');

var EventEmitter = require('events').EventEmitter;

function StreamLibrary(resourceName) {
    this.emit('start');
    this.emit('data');
}

StreamLibrary.prototype.__proto__ = EventEmitter.prototype;

var stream = new StreamLibrary('foo');
stream.on('start', function () {
    console.log('Reading has started');
})
stream.on('data', function (chunk) {
    console.log('Received: ' + chunk);
})