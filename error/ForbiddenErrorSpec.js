describe('ForbiddenError test suite.', function() {
  'use strict';

  require('../bootstrap');

  let ForbiddenError = require('insulin').get('ForbiddenError');

  it('checks the ctor.', function() {
    let vd = new ForbiddenError('Not allowed.');

    expect(vd.name).toBe('ForbiddenError');
    expect(vd.code).toBe('FORBIDDEN_ERROR');
    expect(vd.message).toBe('Not allowed.');
  });
  
  it('checks the customized error message.', function() {
    let vd = new ForbiddenError();
    expect(vd.message).toBe('Forbidden.');
  });
});

