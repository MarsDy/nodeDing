/**
 * Created by Administrator on 2017/10/13.
 */
var http= require('http');
console.log('worker start...')
http.createServer(function(req,res){
    res.writeHead(200);
    res.end('hello world');
}).listen(Math.round(1+Math.random()*1000),'127.0.0.1');