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
 * Custom error instance for duplicates.
 */
var DuplicateError = /** @class */ (function (_super) {
    __extends(DuplicateError, _super);
    /**
     * Create the Error instance with a user-supplied message.
     * @param message The description of the error.
     * @param field The name of the field that caused the duplication error.
     * @param id The identifier of the original record.
     */
    function DuplicateError(message, field, id) {
        var _this = _super.call(this, message, 'DUPE_ERROR') || this;
        _this.field = field;
        _this.id = id;
        _this.name = 'DuplicateError';
        return _this;
    }
    return DuplicateError;
}(DetailedError_1.DetailedError));
exports.DuplicateError = DuplicateError;
