"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("jasmine");
var ForbiddenError_1 = require("./ForbiddenError");
describe('ForbiddenError test suite.', function () {
    it('checks the ctor.', function () {
        var vd = new ForbiddenError_1.ForbiddenError('Not allowed.');
        expect(vd.name).toBe('ForbiddenError');
        expect(vd.code).toBe('FORBIDDEN_ERROR');
        expect(vd.message).toBe('Not allowed.');
        expect(vd.detail).toBe('Not allowed.');
    });
    it('checks the customized error message.', function () {
        var vd = new ForbiddenError_1.ForbiddenError();
        expect(vd.message).toBe('Forbidden.');
        expect(vd.detail).toBe('Forbidden.');
    });
});
