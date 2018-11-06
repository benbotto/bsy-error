import 'jasmine';
import { ValidationError } from './ValidationError';

describe('VaidationError', function() {
  it('checks the ctor.', function() {
    const err = new ValidationError('Invalid Foo', 'name');

    expect(err.name).toBe('ValidationError');
    expect(err.code).toBe('VALIDATION_ERROR');
    expect(err.message).toBe('Invalid Foo');
    expect(err.detail).toBe('Invalid Foo');
    expect(err.field).toBe('name');
  });
});

