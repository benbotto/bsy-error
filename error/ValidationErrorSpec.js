describe('VaidationError test suite.', function() {
  'use strict';

  require('../bootstrap');

  let ValidationError = require('insulin').get('ValidationError');

  // Checks the ctor.
  it('checks the ctor.', function() {
    let vd = new ValidationError('Invalid Foo', 'INV_FOO', 'name');

    expect(vd.name).toBe('ValidationError');
    expect(vd.code).toBe('INV_FOO');
    expect(vd.message).toBe('Invalid Foo');
    expect(vd.field).toBe('name');
  });
});

