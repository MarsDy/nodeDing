/**
 * Created by Administrator on 2017/8/16.
 */
var http = require('http');
var _ = require('underscore');

/**
 *
 * NaN这个值有两个特点：1.它是一个数；2.不等于它自己
 * ‘+’放在变量前面一般作用是把后面的变量变成一个数，在这里已经判断为一个数仍加上’+’，是为了把var num = new Number()这种没有值的数字也归为NaN。
 */

var isNaN = function (obj) {
    return _.isNumber(obj) && obj !== +obj;
}
console.log(isNaN(new Number()));
console.log(isNaN(new Number()));

var a = new Number();
var b = a + 1;
console.log(b);
console.log(a==0);
console.log(!!a);
console.log(a-1);
