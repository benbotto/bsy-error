describe('DuplicateError test suite.', function() {
  'use strict';

  require('../bootstrap');

  let DuplicateError = require('insulin').get('DuplicateError');

  // Checks the ctor.
  it('checks the ctor.', function() {
    let vd = new DuplicateError('This name is taken.', 'name', 42);

    expect(vd.name).toBe('DuplicateError');
    expect(vd.code).toBe('DUPE_ERROR');
    expect(vd.message).toBe('This name is taken.');
    expect(vd.field).toBe('name');
    expect(vd.id).toBe(42);
  });
});

