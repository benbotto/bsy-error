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
 * Custom error instance that is used when a user is not allowed to access
 * a resource and should not try again.
 */
var ForbiddenError = /** @class */ (function (_super) {
    __extends(ForbiddenError, _super);
    /**
     * Create the Error instance with a user-supplied message.
     * @param message The description of the error.
     */
    function ForbiddenError(message) {
        if (message === void 0) { message = 'Forbidden.'; }
        var _this = _super.call(this, message, 'FORBIDDEN_ERROR') || this;
        _this.name = 'ForbiddenError';
        return _this;
    }
    return ForbiddenError;
}(DetailedError_1.DetailedError));
exports.ForbiddenError = ForbiddenError;
