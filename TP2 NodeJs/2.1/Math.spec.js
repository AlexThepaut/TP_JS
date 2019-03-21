var assert = require('assert');
describe('Array', function () {
    describe('#indexOf()', function () {
        it('should return -1 when the value is not present', function () {
            assert.equal(-1, [1, 2, 3].indexOf(4));
        });
    });
});

const Math = require('./Math');

describe('Math', function () {
    describe('addition', function () {
        it('should return 2', function () {
            assert.equal(Math.addition(1, 1), 2);
        });
    });

    describe('soustraction', function () {
        it('should return 0', function () {
            assert.equal(Math.soustraction(1, 1), 0);
        });
    });

    describe('multiplication', function () {
        it('should return 1', function () {
            assert.equal(Math.multiplication(1, 1), 1);
        });
    });

    describe('division', function () {
        it('should return 1', function () {
            assert.equal(Math.division(1, 1), 1);
        });
    });
});
