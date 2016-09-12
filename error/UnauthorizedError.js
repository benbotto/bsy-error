'use strict';

require('insulin').factory('UnauthorizedError', function(DetailedError) {
  /**
   * Custom error instance that is used when a user is not allowed to access
   * a resource.  The user needs to authenticate before trying to access the
   * resrouce again.
   */
  class UnauthorizedError extends DetailedError {
    /**
     * Create the Error instance with a user-supplied message.
     * @param message The description of the error.
     */
    constructor(message) {
      super(message, 'UNAUTHORIZED_ERROR');
      this.name    = 'UnauthorizedError';
      this.message = message || 'User not authorized.  Authenticate and try again.';
    }
  }

  return UnauthorizedError;
});

