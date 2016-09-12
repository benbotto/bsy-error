describe('UnauthorizedError test suite.', function() {
  'use strict';

  require('../bootstrap');

  let UnauthorizedError = require('insulin').get('UnauthorizedError');

  it('checks the ctor.', function() {
    let vd = new UnauthorizedError('Not allowed.');

    expect(vd.name).toBe('UnauthorizedError');
    expect(vd.code).toBe('UNAUTHORIZED_ERROR');
    expect(vd.message).toBe('Not allowed.');
  });
  
  it('checks the customized error message.', function() {
    let vd = new UnauthorizedError();
    expect(vd.message).toBe('User not authorized.  Authenticate and try again.');
  });
});

