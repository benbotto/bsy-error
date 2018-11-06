import { DetailedError } from './DetailedError';

/**
 * Custom error instance for duplicates.
 */
export class DuplicateError extends DetailedError {
  /**
   * Create the Error instance with a user-supplied message.
   * @param message The description of the error.
   * @param field The name of the field that caused the duplication error.
   * @param id The identifier of the original record.
   */
  constructor(message: string, public field: string, public id: any) {
    super(message, 'DUPE_ERROR');

    this.name = 'DuplicateError';
  }
}

