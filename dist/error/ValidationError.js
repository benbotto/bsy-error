"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var DetailedError_1 = require("./DetailedError");
/**
 * Custom error message for validation-type errors.
 */
var ValidationError = /** @class */ (function (_super) {
    __extends(ValidationError, _super);
    /**
     * Initialize the Error.
     * @param message The error message.
     * @param field The field that failed validation.
     */
    function ValidationError(message, field) {
        var _this = _super.call(this, message, 'VALIDATION_ERROR') || this;
        _this.field = field;
        _this.name = 'ValidationError';
        return _this;
    }
    return ValidationError;
}(DetailedError_1.DetailedError));
exports.ValidationError = ValidationError;
