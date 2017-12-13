const assert = require('chai').assert;
const mysquare = require('../../../../src/common/util/math/mysquare');

const num1 = 2;
const num1String = "2";

describe('mysquare', function() {
    describe('toString', function() {
        it('toString(' + num1 + ') should return string value of "' + num1String + '"', function() {
            let result = mysquare.toString(num1);
            assert.equal(result, num1String);
        });

        it('toString("' + num1String + '") should return string value of "' + num1String + '"', function() {
            let result = mysquare.toString(num1String);
            assert.equal(result, num1String);
        });
    });

    describe('toNumber', function() {
        it('toNumber("' + num1String + '") should return Square value of ' + num1, function() {
            let result = mysquare.ToNumber(num1String);
            assert.equal(result, num1 * num1);
        });

        it('toNumber should return type number', function() {
            let result = mysquare.ToNumber(num1);
            assert.typeOf(result, 'number');
        });
    });
});