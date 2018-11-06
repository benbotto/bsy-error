import { DetailedError } from './DetailedError';

/**
 * Custom error message for validation-type errors.
 */
export class ValidationError extends DetailedError {
  /**
   * Initialize the Error.
   * @param message The error message.
   * @param field The field that failed validation.
   */
  constructor(message: string, public field: string) {
    super(message, 'VALIDATION_ERROR');

    this.name = 'ValidationError';
  }
}

