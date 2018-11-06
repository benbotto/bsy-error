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
/**
 * Specialized Error with a message, detail (copy of message for JSON
 * serialization), and code.
 */
var DetailedError = /** @class */ (function (_super) {
    __extends(DetailedError, _super);
    /**
     * Create the Error instance with a user-supplied message.  message
     * will be duplicated on the detail property for serialization.
     * @param message The description of the error.
     * @param code A unique error code.
     */
    function DetailedError(message, code) {
        var _newTarget = this.constructor;
        var _this = _super.call(this, message) || this;
        _this.message = message;
        _this.code = code;
        // Design limitation in TypeScript when extending built-in types.
        // https://github.com/Microsoft/TypeScript/wiki/Breaking-Changes#generated-constructor-code-substitutes-the-return-value-of-super-calls-as-this
        Object.setPrototypeOf(_this, _newTarget.prototype);
        _this.name = 'DetailedError';
        _this.detail = message;
        return _this;
    }
    return DetailedError;
}(Error));
exports.DetailedError = DetailedError;
