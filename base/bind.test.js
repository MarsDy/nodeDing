/**
 * Created by Administrator on 2017/8/16.
 */
var http = require('http');
!function () {
    var someuser = {
        name: 'byvoid',
        func: function () {
            console.log(this.name);
        }
    };
    var foo = {
        name: 'foobar'
    };


    var func = someuser.func.bind(foo);
    func(); // 输出 foobar
    var func2 = func.bind(someuser);
// var func2 = someuser.func.bind(someuser);
    func2(); // 输出 foobar

}();


+function () {

    function LateBloom () {
        this.x = 2;
    }
    LateBloom.prototype.bloom=function(){
        var self=this;
        global.setTimeout(self.declare.bind(this),1000);
    }
    LateBloom.prototype.declare=function(){

        console.log(this.x);
    }

    var flower=new LateBloom();
    flower.bloom();
    flower.x=3;
    flower.bloom();
}();

+function(){
    function list(){
        return Array.prototype.slice.call(arguments);
    }

    list(1,2,3);

    var aaa=[1,2,3].slice(0,-1);
    console.log(aaa);
}();




