'use strict';

require('insulin').factory('ValidationError', function(DetailedError) {
  /**
   * Custom error message for validation-type errors.
   */
  class ValidationError extends DetailedError {
    /**
     * Initialize the Error.
     * @param message The error message.
     * @param code A unique error code for switching upon.
     * @param field The field that failed validation.
     */
    constructor(message, code, field) {
      super(message, code);
      this.name  = 'ValidationError';
      this.field = field;
    }
  }

  return ValidationError;
});

