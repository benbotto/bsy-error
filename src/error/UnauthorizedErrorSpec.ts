import 'jasmine';
import { UnauthorizedError } from './UnauthorizedError';

describe('UnauthorizedError', function() {
  it('checks the ctor.', function() {
    const err = new UnauthorizedError('Not allowed.');

    expect(err.name).toBe('UnauthorizedError');
    expect(err.code).toBe('UNAUTHORIZED_ERROR');
    expect(err.message).toBe('Not allowed.');
    expect(err.detail).toBe('Not allowed.');
  });
  
  it('checks the customized error message.', function() {
    const err = new UnauthorizedError();
    expect(err.message).toBe('User not authorized.  Authenticate and try again.');
    expect(err.detail).toBe('User not authorized.  Authenticate and try again.');
  });
});

