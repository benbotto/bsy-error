import { DetailedError } from './DetailedError';

/**
 * Custom error instance that is used when a record is not found.
 */
export class NotFoundError extends DetailedError {
  /**
   * Create the Error instance with a user-supplied message.
   * @param message The description of the error.
   */
  constructor(message: string) {
    super(message, 'NOT_FOUND_ERROR');

    this.name = 'NotFoundError';
  }
}

