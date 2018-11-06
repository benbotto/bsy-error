/**
 * Specialized Error with a message, detail (copy of message for JSON
 * serialization), and code.
 */
export class DetailedError extends Error {
  name: string;
  detail: string;

  /**
   * Create the Error instance with a user-supplied message.  message
   * will be duplicated on the detail property for serialization.
   * @param message The description of the error.
   * @param code A unique error code.
   */
  constructor(public message: string, public code: string) {
    super(message);

    // Design limitation in TypeScript when extending built-in types.
    // https://github.com/Microsoft/TypeScript/wiki/Breaking-Changes#generated-constructor-code-substitutes-the-return-value-of-super-calls-as-this
    (<any>Object).setPrototypeOf(this, new.target.prototype);

    this.name   = 'DetailedError';
    this.detail = message;
  }
}

