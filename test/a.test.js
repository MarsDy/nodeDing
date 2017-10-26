var add = require('../unittest/a.js');

// var should=require('chai').should();

var should = require('should');
describe('add', function () {
    it('1+1应该等于2', function () {
        var num = add(1, 1);
        num.should.be.equalOneOf('a', 2, 'b');
        num.should.be.equalOneOf(['a', 2, 'b']);

        ({a: 10}).should.be.oneOf('a', 'b', {a: 10});
        ({a: 10}).should.be.oneOf(['a', 'b', {a: 10}]);
        num.should.be.equal(2);

        ({foo:'bar'}).should.eql({foo:'bar'})

    })
})

describe('异步请求应该返回一个对象',function () {
    //异步
})

//钩子(hooks)
describe('hooks', function() {

    before(function() {
        // 在本区块的所有测试用例之前执行
    });

    after(function() {
        // 在本区块的所有测试用例之后执行
    });

    beforeEach(function() {
        // 在本区块的每个测试用例之前执行
    });

    afterEach(function() {
        // 在本区块的每个测试用例之后执行
    });

    // test cases
});