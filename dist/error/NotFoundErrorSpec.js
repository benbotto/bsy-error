"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("jasmine");
var NotFoundError_1 = require("./NotFoundError");
describe('NotFoundError test suite.', function () {
    // Checks the ctor.
    it('checks the ctor.', function () {
        var vd = new NotFoundError_1.NotFoundError('Record not found.');
        expect(vd.name).toBe('NotFoundError');
        expect(vd.code).toBe('NOT_FOUND_ERROR');
        expect(vd.message).toBe('Record not found.');
    });
});
