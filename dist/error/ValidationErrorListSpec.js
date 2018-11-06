"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("jasmine");
var ValidationErrorList_1 = require("./ValidationErrorList");
var ValidationError_1 = require("./ValidationError");
describe('ValidationErrorList test suite.', function () {
    it('checks the constructor', function () {
        var val = new ValidationErrorList_1.ValidationErrorList();
        expect(val.name).toBe('ValidationErrorList');
        expect(val.message).toBe('Validation errors occurred.');
        expect(val.detail).toBe('Validation errors occurred.');
        expect(val.code).toBe('VAL_ERROR_LIST');
        expect(val.errors).toEqual([]);
    });
    it('checks that errors can be added', function () {
        var val = new ValidationErrorList_1.ValidationErrorList();
        var ve = new ValidationError_1.ValidationError('Invalid int.', 'age');
        val.addError(ve);
        expect(val.errors[0]).toBe(ve);
    });
});
