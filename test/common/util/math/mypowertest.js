const assert = require('chai').assert;
const mypower = require('../../../../src/common/util/math/mypower');


const num1 = 3;
const num1String = "3";


describe('tosquare', function() {
    describe('tosquare', function() {
        it('tosquare("' + num1String + '") should return square value of ' + num1, function() {
            let result = mypower.tosquare(num1String);
            assert.equal(result, num1 * num1);
        });
        it('tosquare should return type number', function() {
            let result = mypower.tosquare(num1String);
            assert.typeOf(result, 'number');
        });
    });

    describe('tocube', function() {
        it('tocube("' + num1String + '") should return Square value of ' + num1, function() {
            let result = mypower.tocube(num1String);
            assert.equal(result, num1 * num1 * num1);
        });

        it('tocube should return type number', function() {
            let result = mypower.tocube(num1String);
            assert.typeOf(result, 'number');
        });
    });
});