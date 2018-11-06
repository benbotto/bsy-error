"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("jasmine");
var UnauthorizedError_1 = require("./UnauthorizedError");
describe('UnauthorizedError test suite.', function () {
    it('checks the ctor.', function () {
        var vd = new UnauthorizedError_1.UnauthorizedError('Not allowed.');
        expect(vd.name).toBe('UnauthorizedError');
        expect(vd.code).toBe('UNAUTHORIZED_ERROR');
        expect(vd.message).toBe('Not allowed.');
        expect(vd.detail).toBe('Not allowed.');
    });
    it('checks the customized error message.', function () {
        var vd = new UnauthorizedError_1.UnauthorizedError();
        expect(vd.message).toBe('User not authorized.  Authenticate and try again.');
        expect(vd.detail).toBe('User not authorized.  Authenticate and try again.');
    });
});
