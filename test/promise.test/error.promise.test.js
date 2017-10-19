/**
 * Created by Administrator on 2017/5/13.
 */
var http = require('http');

var Promise = require('bluebird')


//以下这种写法无法捕获error
Promise.resolve({}).then(JSON.parse).error(function (e) {
    console.error(e.message);
})

//Like .catch but instead of catching all types of exceptions, it only catches operational errors.
//.error 只会捕获操作错误 例如：
//链接不到服务器，
//无法解析主机名
//无效的用户输入
//请求超时
//服务器返回500
//系统内存不足