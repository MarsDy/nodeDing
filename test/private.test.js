/**
 * Created by Administrator on 2017/5/3.
 */
var http = require('http');

var PrivateClass = function () {
    var a = 'private';
    this.getA_public = function () {
        return a;
    }
}

PrivateClass.prototype.getA = function () {
    var _this = this;

}

var aa = new PrivateClass().getA_public();
console.log(aa);

var bb;
for (var j in bb) {
    console.log(1);
    console.log(bb[j].id);
}