/**
 * Created by Administrator on 2017/7/21.
 */
var obj = {}
var initValue = 'hello-init';
Object.defineProperty(obj, 'test', {

    get: function () {
        return initValue;
    }
})

obj.test = 111;
console.log(obj.test);


// writable value 和 get set 不能同时设置

var obj2={}

function a(){
    this.num=10;
}

var self=this;
this.num=11;

module.exports=obj;
console.log(self.num);
console.log(global.num);
console.log(module.exports);