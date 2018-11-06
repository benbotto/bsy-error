"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("jasmine");
var ValidationError_1 = require("./ValidationError");
describe('VaidationError test suite.', function () {
    it('checks the ctor.', function () {
        var vd = new ValidationError_1.ValidationError('Invalid Foo', 'name');
        expect(vd.name).toBe('ValidationError');
        expect(vd.code).toBe('VALIDATION_ERROR');
        expect(vd.message).toBe('Invalid Foo');
        expect(vd.detail).toBe('Invalid Foo');
        expect(vd.field).toBe('name');
    });
});
