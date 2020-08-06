import 'jasmine';
import { PaymentRequiredError } from './PaymentRequiredError';

describe('PaymentRequiredError', function() {
  it('checks the ctor.', function() {
    const err = new PaymentRequiredError('You must pay.');

    expect(err.name).toBe('PaymentRequiredError');
    expect(err.code).toBe('PAYMENT_REQUIRED_ERROR');
    expect(err.message).toBe('You must pay.');
    expect(err.detail).toBe('You must pay.');
  });

  it('checks the default error message.', function() {
    const err = new PaymentRequiredError();
    expect(err.message).toBe('Payment required.');
    expect(err.detail).toBe('Payment required.');
  });

  it('checks the custom code.', function() {
    const err = new PaymentRequiredError('message here', 'code here');
    expect(err.message).toBe('message here');
    expect(err.detail).toBe('message here');
    expect(err.code).toBe('code here');
  });
});
