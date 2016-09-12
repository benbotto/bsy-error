describe('ValidationErrorList test suite.', function() {
  'use strict';

  require('../bootstrap');

  let ValidationErrorList = require('insulin').get('ValidationErrorList');
  let ValidationError     = require('insulin').get('ValidationError');

  // Checks the constructor
  it('checks the constructor', function() {
    let val = new ValidationErrorList();
    expect(val.name).toBe('ValidationErrorList');
    expect(val.message).toBe('Validation errors occurred.');
    expect(val.code).toBe('VAL_ERROR_LIST');
    expect(val.errors).toEqual([]);
  });

  // Checks that errors can be added
  it('checks that errors can be added', function() {
    let val = new ValidationErrorList();
    let ve  = new ValidationError('Invalid int.', 'VAL_INT', 'age');
    val.addError(ve);
    expect(val.errors[0]).toBe(ve);
  });

  // Checks that errors can be added in the ctor
  it('checks that errors can be added in the ctor', function() {
    let ve  = new ValidationError('Invalid int.', 'VAL_INT', 'age');
    let val = new ValidationErrorList([ve]);
    expect(val.errors[0]).toBe(ve);
  });
});

