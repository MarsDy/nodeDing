// var http= require('http');
// http.createServer(function(req,res){
//   res.writeHead(200);
//   res.end('hello world');
// }).listen(Math.round(1+Math.random()*1000),'127.0.0.1');


var Waterline=require('waterline');
// var app=require
var http=require('http');
var mysql=require('mysql');

var add=function (x,y) {
    return x+y;
}

var add5=function (y) {
    return add;
}

var a=add5(2);
var b=a(1,2);
console.log(b);















// var express = require('express');
// var path = require('path');
// var favicon = require('serve-favicon');
// var logger = require('morgan');
// var cookieParser = require('cookie-parser');
// var bodyParser = require('body-parser');
//
// var index = require('./routes/index');
// var users = require('./routes/users');
//
// var app = express();

// view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
// app.use(logger('dev'));
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));
//
// app.use('/', index);
// app.use('/users', users);
//
// // catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   var err = new Error('Not Found');
//   err.status = 404;
//   next(err);
// });
//
// // error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};
//
//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });

// app.get('/',function(req,res){
//   res.send('Hello world');
// })
//
// var server=app.listen(3000,function(){
//   var host=server.address().address;
//   var port=server.address().port;
//   console.log('app:',host,port);
// })
//
// module.exports = app;

