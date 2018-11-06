import 'jasmine';
import { ValidationErrorList } from './ValidationErrorList';
import { ValidationError } from './ValidationError';

describe('ValidationErrorList', function() {
  it('checks the ctor.', function() {
    const val = new ValidationErrorList();

    expect(val.name).toBe('ValidationErrorList');
    expect(val.message).toBe('Validation errors occurred.');
    expect(val.detail).toBe('Validation errors occurred.');
    expect(val.code).toBe('VAL_ERROR_LIST');
    expect(val.errors).toEqual([]);
  });

  it('checks that errors can be added.', function() {
    const val = new ValidationErrorList();
    const ve  = new ValidationError('Invalid int.', 'age');
    val.addError(ve);
    expect(val.errors[0]).toBe(ve);
  });
});

