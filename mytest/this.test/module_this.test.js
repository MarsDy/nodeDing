/**
 * Created by Administrator on 2017/7/21.
 */



// var self=this;
//
// // P.num=10;
// self.this_num=11;
//
// console.log(module.exports);
//
// var p={};
// p.num=10;
// module.exports=p;
// console.log(module.exports);
// // console.log(self.this_num);
// // console.log(global.this_num);


var p=module.exports={};
var self=this;
self.num1=10;
p.createApp=function(opts){
    self.num=opts.num;
    return opts.num;
}
console.log(self);
console.log(module.exports);
console.log(__dirname);
console.log(__filename);