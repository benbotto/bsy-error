'use strict';

require('insulin').factory('DuplicateError', function(DetailedError) {
  /**
   * Custom error instance for DB duplicates.
   */
  class DuplicateError extends DetailedError {
    /**
     * Create the Error instance with a user-supplied message.
     * @param message The description of the error.
     * @param field The name of the field that caused the duplication error.
     * @param id The identifier of the original record.
     */
    constructor(message, field, id) {
      super(message, 'DUPE_ERROR');
      this.name  = 'DuplicateError';
      this.field = field;
      this.id    = id;
    }
  }

  return DuplicateError;
});

