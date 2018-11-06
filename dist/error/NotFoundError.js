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
 * Custom error instance that is used when a record is not found.
 */
var NotFoundError = /** @class */ (function (_super) {
    __extends(NotFoundError, _super);
    /**
     * Create the Error instance with a user-supplied message.
     * @param message The description of the error.
     */
    function NotFoundError(message) {
        var _this = _super.call(this, message, 'NOT_FOUND_ERROR') || this;
        _this.name = 'NotFoundError';
        return _this;
    }
    return NotFoundError;
}(DetailedError_1.DetailedError));
exports.NotFoundError = NotFoundError;
