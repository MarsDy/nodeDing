/**
 * Created by Administrator on 2017/9/10.
 */

var buf=new Buffer(100);


buf.write('a');

console.log(buf.toString('utf8',0,1));

buf.write('b',1);

console.log(buf.toString('utf8',0,2));
console.log(buf.length);