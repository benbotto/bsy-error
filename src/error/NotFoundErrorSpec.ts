import 'jasmine';
import { NotFoundError } from './NotFoundError';

describe('NotFoundError', function() {
  it('checks the ctor.', function() {
    const err = new NotFoundError('Record not found.');

    expect(err.name).toBe('NotFoundError');
    expect(err.code).toBe('NOT_FOUND_ERROR');
    expect(err.message).toBe('Record not found.');
  });
});

