var path=require("path");
var fs=require("fs");
var rootPath=__filename;



// var mapdata=require('E:/vrmmo/commonLib/NodejsCPPPlugin/plugin/mapData/MapData/x64/Debug/mapData.node');
// //console.error(mapdata);
// var test = mapdata.newMapObj();
// //console.error(test);
// //console.error("****************");
// console.error(test.adnLoadNewMap(1,"map"));
// console.error(test.adnGetMapWidth(1));
// console.error(test.adnGetMapHeight(1));
// console.error(test.adnGetMapMinX(1));
// console.error(test.adnGetMapMinY(1));
// console.error(test.adnGetMapMinZ(1));
// console.error(test.adnGetMapMaxX(1));
// console.error(test.adnGetMapMaxY(1));
// console.error(test.adnGetMapMaxZ(1));
// console.error(test.adnRaycastStr(1, 1, 200, 3));

var util = require("util")
var a = {};
a.b = a;
a.c = "123";
a.d={'sbc':123}

var g={'sg':123};
var f={'sf':123,gg:g};
a.f=f;
// console.log(JSON.stringify(a)); // 报错
console.log(util.inspect(a,{depth:3,color:'yellow'})); //depth:null 展开全部层级


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

//+个注释

