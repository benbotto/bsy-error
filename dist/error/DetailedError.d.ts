/**
 * Specialized Error with a message, detail (copy of message for JSON
 * serialization), and code.
 */
export declare class DetailedError extends Error {
    message: string;
    code: string;
    name: string;
    detail: string;
    /**
     * Create the Error instance with a user-supplied message.  message
     * will be duplicated on the detail property for serialization.
     * @param message The description of the error.
     * @param code A unique error code.
     */
    constructor(message: string, code: string);
}
