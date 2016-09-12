'use strict';

require('insulin').factory('ValidationErrorList', function(DetailedError) {
  /**
   * Custom error message that contains an array of ValidationError instances.
   */
  class ValidationErrorList extends DetailedError {
    /**
     * Initialize the Error list.
     * @param errors An optional array of errors.
     */
    constructor(errors) {
      super('Validation errors occurred.', 'VAL_ERROR_LIST');
      this.name   = 'ValidationErrorList';
      this.errors = errors || [];
    }

    /**
     * Add an error to the list.
     * @param err A ValidationError instance.
     */
    addError(err) {
      this.errors.push(err);
    }
  }

  return ValidationErrorList;
});

