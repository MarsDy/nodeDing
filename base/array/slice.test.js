/**
 * Created by Administrator on 2017/8/16.
 */
var http = require('http');


/****
 * slice(begin,end)
 * begin>=0, index begin
 * begin<0, offset from the end of the Array
 *
 * end>=0  extracts up to but not including end
 * end<0
 * end is omitted (省略)   slice extracts through the end of the sequence (arr.length).
 * end is greater than the length of the sequence,slice extracts through the end of the sequence (arr.length).
 * **/
function slice_func() {

}

var a = [1, 2, 3, 4, 5];

var b = a.slice(0, 1);
console.log(a.slice(0));//[1,2,3,4,5];
console.log(a.slice(0, 1));//[1];
console.log(a.slice(3, -1));//[3,4];
console.log(a.slice(-1));//[5]
console.log(a.slice(-4));//[2,3,4,5];
console.log(a.slice(undefined, 2));//[1,2]

var obj={
    a:1

}
console.log(++obj.a);


