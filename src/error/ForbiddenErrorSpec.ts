import 'jasmine';
import { ForbiddenError } from './ForbiddenError';

describe('ForbiddenError', function() {
  it('checks the ctor.', function() {
    const err = new ForbiddenError('Not allowed.');

    expect(err.name).toBe('ForbiddenError');
    expect(err.code).toBe('FORBIDDEN_ERROR');
    expect(err.message).toBe('Not allowed.');
    expect(err.detail).toBe('Not allowed.');
  });
  
  it('checks the customized error message.', function() {
    const err = new ForbiddenError();
    expect(err.message).toBe('Forbidden.');
    expect(err.detail).toBe('Forbidden.');
  });
});

