import { DetailedError } from './DetailedError';
import { ValidationError } from './ValidationError';
/**
 * Custom error message that contains an array of ValidationError instances.
 */
export declare class ValidationErrorList extends DetailedError {
    errors: ValidationError[];
    /**
     * Initialize the Error list.
     * @param errors An optional array of errors.
     */
    constructor();
    /**
     * Add an error to the list.
     * @param err A ValidationError instance.
     */
    addError(err: ValidationError): ValidationErrorList;
}
