/**
 * Created by Administrator on 2017/5/15.
 */
var http = require('http');

var Promise=require('bluebird');

somethingAsync().bind({})
    .spread(function (aValue, bValue) {
        this.aValue = aValue;
        this.bValue = bValue;
        return somethingElseAsync(aValue, bValue);
    })
    .then(function (cValue) {
        return this.aValue + this.bValue + cValue;
    });

var scope = {};
somethingAsync()
    .spread(function (aValue, bValue) {
        scope.aValue = aValue;
        scope.bValue = bValue;
        return somethingElseAsync(aValue, bValue);
    })
    .then(function (cValue) {
        return scope.aValue + scope.bValue + cValue;
    });