'use strict';

require('insulin').factory('ForbiddenError', function(DetailedError) {
  /**
   * Custom error instance that is used when a user is not allowed to access
   * a resource and should not try again.
   */
  class ForbiddenError extends DetailedError {
    /**
     * Create the Error instance with a user-supplied message.
     * @param message The description of the error.
     */
    constructor(message) {
      super(message, 'FORBIDDEN_ERROR');
      this.name    = 'ForbiddenError';
      this.message = message || 'Forbidden.';
    }
  }

  return ForbiddenError;
});

