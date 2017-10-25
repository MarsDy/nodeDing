var http = require('http');

http.createServer(function (req, res) {
    var pm=req;

    res.writeHead(200);
    require('./test')();
    res.end('hello world-'+pm);
}).listen(8000);

console.log('Server running at http://127.0.0.1:8000/');

http.createServer(function (req, res) {
    var pm=req;

    res.writeHead(200);
    delete require.cache['./test'];
    res.end('hello world-8001');
}).listen(8001);

console.log('Server running at http://127.0.0.1:8001/');