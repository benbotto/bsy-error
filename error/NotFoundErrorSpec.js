describe('NotFoundError test suite.', function() {
  'use strict';

  require('../bootstrap');

  let NotFoundError = require('insulin').get('NotFoundError');

  // Checks the ctor.
  it('checks the ctor.', function() {
    let vd = new NotFoundError('Record not found.');

    expect(vd.name).toBe('NotFoundError');
    expect(vd.code).toBe('NOT_FOUND_ERROR');
    expect(vd.message).toBe('Record not found.');
  });
});

