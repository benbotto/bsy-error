import { DetailedError } from './DetailedError';
/**
 * Custom error instance for duplicates.
 */
export declare class DuplicateError extends DetailedError {
    field: string;
    id: any;
    /**
     * Create the Error instance with a user-supplied message.
     * @param message The description of the error.
     * @param field The name of the field that caused the duplication error.
     * @param id The identifier of the original record.
     */
    constructor(message: string, field: string, id: any);
}
