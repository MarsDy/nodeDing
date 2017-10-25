var add = require('./a.js');

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

