/**
 * Created by Administrator on 2017/5/15.
 */
var http = require('http');
var moment = require('moment');

var a = function (cardTimeStamp) {
    if (!cardTimestamp) {
        return 0;
    }
    var now = moment();
    var startTime = moment(cardTimestamp, 'YYYYMMDD');
    var endTime = startTime.clone().add(30, 'd');

    return now.isBetween(startTime, endTime, null, '[]') ? 1 : 0;
}
console.log(!undefined);
//console.log(a(undefined));