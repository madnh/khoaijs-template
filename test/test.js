var chai_assert = chai.assert;

describe('KhoaiJS Element', function () {
    describe('Static property of KhoaiJS', function () {
        it('PreOption must be a static property of KhoaiJS if exists', function (cb) {
            if (window.hasOwnProperty('Khoai')) {
                chai_assert.property(Khoai, 'Element');
                cb();
            } else {
                cb();
            }
        });
        it('Static property of KhoaiJS and standalone object of Element must be same', function (cb) {
            if (window.hasOwnProperty('Khoai')) {
                chai_assert.strictEqual(Khoai.Element, Element);
                cb();
            } else {
                cb();
            }
        })
    });
});