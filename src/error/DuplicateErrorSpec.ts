import 'jasmine';
import { DuplicateError } from './DuplicateError';

describe('DuplicateError', function() {
  it('checks the ctor.', function() {
    const err = new DuplicateError('This name is taken.', 'name', 42);

    expect(err.name).toBe('DuplicateError');
    expect(err.code).toBe('DUPE_ERROR');
    expect(err.message).toBe('This name is taken.');
    expect(err.field).toBe('name');
    expect(err.id).toBe(42);
  });
});

