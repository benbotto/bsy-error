'use strict';

require('insulin').factory('DetailedError', function() {
  /**
   * Custom error instance for DB Detaileds.
   */
  class DetailedError extends Error {
    /**
     * Create the Error instance with a user-supplied message.  message
     * will be duplicated on the detail property for serialization.
     * @param message The description of the error.
     * @param code A unique error code.
     */
    constructor(message, code) {
      super(message);
      this.name   = 'DetailedError';
      this.detail = message;
      this.code   = code;
    }
  }

  return DetailedError;
});

