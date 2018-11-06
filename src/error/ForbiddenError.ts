import { DetailedError } from './DetailedError';

/**
 * Custom error instance that is used when a user is not allowed to access
 * a resource and should not try again.
 */
export class ForbiddenError extends DetailedError {
  /**
   * Create the Error instance with a user-supplied message.
   * @param message The description of the error.
   */
  constructor(message: string = 'Forbidden.') {
    super(message, 'FORBIDDEN_ERROR');

    this.name  = 'ForbiddenError';
  }
}

