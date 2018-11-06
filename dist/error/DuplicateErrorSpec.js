"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("jasmine");
var DuplicateError_1 = require("./DuplicateError");
describe('DuplicateError test suite.', function () {
    // Checks the ctor.
    it('checks the ctor.', function () {
        var vd = new DuplicateError_1.DuplicateError('This name is taken.', 'name', 42);
        expect(vd.name).toBe('DuplicateError');
        expect(vd.code).toBe('DUPE_ERROR');
        expect(vd.message).toBe('This name is taken.');
        expect(vd.field).toBe('name');
        expect(vd.id).toBe(42);
    });
});
