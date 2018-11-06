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
 * Custom error message that contains an array of ValidationError instances.
 */
var ValidationErrorList = /** @class */ (function (_super) {
    __extends(ValidationErrorList, _super);
    /**
     * Initialize the Error list.
     * @param errors An optional array of errors.
     */
    function ValidationErrorList() {
        var _this = _super.call(this, 'Validation errors occurred.', 'VAL_ERROR_LIST') || this;
        _this.errors = [];
        _this.name = 'ValidationErrorList';
        return _this;
    }
    /**
     * Add an error to the list.
     * @param err A ValidationError instance.
     */
    ValidationErrorList.prototype.addError = function (err) {
        this.errors.push(err);
        return this;
    };
    return ValidationErrorList;
}(DetailedError_1.DetailedError));
exports.ValidationErrorList = ValidationErrorList;
