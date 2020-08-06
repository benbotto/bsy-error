import { DetailedError } from './DetailedError';

/**
 * Custom error instance that is used when a payment is required for a service.
 */
export class PaymentRequiredError extends DetailedError {
  /**
   * Create the Error instance with a user-supplied message.
   * @param message The description of the error.
   * @param code An optional error code.
   */
  constructor(
    message: string = 'Payment required.',
    code: string = 'PAYMENT_REQUIRED_ERROR',
  ) {
    super(message, code);

    this.name = 'PaymentRequiredError';
  }
}
