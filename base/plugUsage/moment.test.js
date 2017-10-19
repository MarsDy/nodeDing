/**
 * Created by Administrator on 2017/4/11.
 */
var moment = require('moment');

console.log(moment({hour: 15, minute: 10}));
console.log(moment('18:00:00', 'HH:mm:ss'));
console.log(moment());
console.log(moment().second(20));
console.log(moment().seconds(20));
console.log(moment().hour(2));
console.log(moment().hours(2));
console.log(moment().startOf('day'));
console.log("moment().startOf('weeks'):", moment().startOf('weeks'))
console.log(moment().endOf('day'));
console.log(moment([2017, 0, 13]).fromNow());

console.log(moment().subtract(5, 'm'));

console.log(moment().isAfter(moment().subtract(5, 'm')));

console.log("=====moment().valueOf():", moment().valueOf());
console.log(new Date().getTime());

console.log(moment().day(7).day());
console.log("=====moment().month():", moment().month());
console.log("=====moment().format('YYYYMMDDHHmmss'):", moment().format('YYYYMMDDHHmmss'));
console.log("moment(1491911034336):", moment(1491911034336));
console.log(moment().weekday());//星期（locale aware）
console.log(moment().day());//星期（地方）
console.log(moment().isoWeekday());//星期(iso-国际标准)
console.log("=====每月的几号：moment().date()--", moment().date());//每月的几号
console.log("moment().startOf('weeks').add(1,'days').format('YYYYMMDD'):", moment().startOf('weeks').add(-6, 'days').format('YYYYMMDD'));

console.log(moment(1499399981132));
console.log(moment().add(20, 'm').isBefore(moment().add(21, 'm')));

