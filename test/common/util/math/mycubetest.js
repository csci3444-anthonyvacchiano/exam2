const assert = require('chai').assert;
var mycube = require('../../../../src/common/util/math/mycube.js');

const num1 = 3;
const num1String = "3";

describe('mycube', function() {
    describe('tostring', function() {
        it('toString(' + num1 + ') should return string value of "' + num1String + '"', function() {
            let result = mycube.toString(num1);
            assert.equal(result, num1String);
        });

        it('toString("' + num1String + '") should return string value of "' + num1String + '"', function() {
            let result = mycube.toString(num1String);
            assert.equal(result, num1String);
        });
    });

    describe('ToNumber', function() {
        it('ToNumber("' + num1String + '") should return square value of ' + num1, function() {
            let result = mycube.ToNumber(num1String);
            assert.equal(result, num1 * num1 * num1);
        });

        it('toNumber should return type number', function() {
            let result = mycube.ToNumber(num1);
            assert.typeOf(result, 'number');
        });
    });
});