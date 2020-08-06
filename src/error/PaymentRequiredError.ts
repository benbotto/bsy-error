import { DetailedError } from './DetailedError';

/**
 * Custom error instance that is used when a payment is required for a service.
 */
export class PaymentRequiredError extends DetailedError {
  /**
   * Create the Error instance with a user-supplied message.
   * @param message The description of the error.
   */
  constructor(message: string = 'Payment required.') {
    super(message, 'PAYMENT_REQUIRED_ERROR');

    this.name = 'PaymentRequiredError';
  }
}
