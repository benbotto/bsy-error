'use strict';

require('insulin').factory('ErrorHandler', ErrorHandlerProducer);

function ErrorHandlerProducer() {
  /**
   * Basic error handler for express that renders the correct response based
   * on the type of error.
   */
  class ErrorHandler {
    /**
     * Handle the error.
     * @param err The error object.
     * @param req The Express request object.
     * @param res The Express response object.
     * @param next function to call to proceed to the next route.
     */
    handleError(err, req, res, next) { // jshint ignore:line
			switch (err.name) {
				case 'ValidationError':
				case 'ValidationErrorList':
					res.status(400).json(err);
					break;

				case 'UnauthorizedError':
					res.status(401).json(err);
					break;

				case 'ForbiddenError':
					res.status(403).json(err);
					break;

				case 'NotFoundError':
					res.status(404).json(err);
					break;

				case 'DuplicateError':
					res.status(409).json(err);
					break;

				default:
          this.onUnhandledError(err, req, res, next);
          break;
      }
    }

    /**
     * On unhandled error, this method is called.  This method should be
     * specialized for application-specific error handling (for example,
     * sending an email to developers when an unhandled error occurs).
     * @param err The error object.
     * @param req The Express request object.
     * @param res The Express response object.
     * @param next function to call to proceed to the next route.
     */
    onUnhandledError(err, req, res, next) { // jshint ignore:line
      console.error(err.message);
      console.error(err.stack);

      res.status(500).json({error: 'Internal server error.'});
    }
  }

  return ErrorHandler;
}

