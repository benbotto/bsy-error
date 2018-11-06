import { DetailedError } from './DetailedError';
/**
 * Custom error message for validation-type errors.
 */
export declare class ValidationError extends DetailedError {
    field: string;
    /**
     * Initialize the Error.
     * @param message The error message.
     * @param field The field that failed validation.
     */
    constructor(message: string, field: string);
}
