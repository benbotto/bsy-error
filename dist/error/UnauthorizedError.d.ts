import { DetailedError } from './DetailedError';
/**
 * Custom error instance that is used when a user is not allowed to access
 * a resource.  The user needs to authenticate before trying to access the
 * resrouce again.
 */
export declare class UnauthorizedError extends DetailedError {
    /**
     * Create the Error instance with a user-supplied message.
     * @param message The description of the error.
     */
    constructor(message?: string);
}
