/**
 * Created by Administrator on 2017/10/14.
 */


var cluster = require('cluster');

var http = require('http');

var numCPUS = require('os').cpus().length;

if (cluster.isMaster) {
    console.log('master start' + process.pid);


    for (var i = 0; i < numCPUS; i++) {
        cluster.fork();
    }

    cluster.on('exit', function (worker, code, signal) {
        console.log('worker exit' + worker.process.pid);
    })


} else {
    http.createServer(function (req, res) {
        res.writeHead(200);
        res.end('hello workd')

    }).listen(8000);

    console.log('worker start...' + process.pid);
}