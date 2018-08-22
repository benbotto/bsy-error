describe('ErrorHandler test suite.', function() {
  'use strict';

  require('../bootstrap');

  const insulin      = require('insulin');
  const ErrorHandler = insulin.get('ErrorHandler');

  let res, errorHandler;

  beforeEach(function() {
    // Mocked response object with a fake json() method.
    res = jasmine.createSpyObj('res', ['status', 'json']);
    res.status.and.returnValue(res);

    errorHandler = new ErrorHandler();
  });

  describe('handleError()', function() {
    it('handles ValidationError with a 400.', function() {
      const CError = insulin.get('ValidationError');
      const error = new CError('Val Error', 'VALIDATION_ERROR', 'field');

      errorHandler.handleError(error, null, res);

      expect(res.status).toHaveBeenCalledWith(400);
      expect(res.json).toHaveBeenCalledWith(error);
    });

    it('handles ValidationErrorList with a 400.', function() {
      const CError = insulin.get('ValidationErrorList');
      const error = new CError();

      errorHandler.handleError(error, null, res);

      expect(res.status).toHaveBeenCalledWith(400);
      expect(res.json).toHaveBeenCalledWith(error);
    });

    it('handles UnauthorizedError with a 401.', function() {
      const CError = insulin.get('UnauthorizedError');
      const error = new CError();

      errorHandler.handleError(error, null, res);

      expect(res.status).toHaveBeenCalledWith(401);
      expect(res.json).toHaveBeenCalledWith(error);
    });

    it('handles ForbiddenError with a 403.', function() {
      const CError = insulin.get('ForbiddenError');
      const error = new CError();

      errorHandler.handleError(error, null, res);

      expect(res.status).toHaveBeenCalledWith(403);
      expect(res.json).toHaveBeenCalledWith(error);
    });

    it('handles NotFoundError with a 404.', function() {
      const CError = insulin.get('NotFoundError');
      const error = new CError();

      errorHandler.handleError(error, null, res);

      expect(res.status).toHaveBeenCalledWith(404);
      expect(res.json).toHaveBeenCalledWith(error);
    });

    it('handles DuplicateError with a 409.', function() {
      const CError = insulin.get('DuplicateError');
      const error = new CError();

      errorHandler.handleError(error, null, res);

      expect(res.status).toHaveBeenCalledWith(409);
      expect(res.json).toHaveBeenCalledWith(error);
    });

    it('handles other errors with a 500.', function() {
      spyOn(console, 'error');

      const error = new Error('test');

      errorHandler.handleError(error, null, res);

      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.json.calls.argsFor(0)[0].detail).toBe('Internal server error.');

      // message and stack are logged.
      expect(console.error.calls.argsFor(0)[0]).toBe(error.message);
      expect(console.error.calls.argsFor(1)[0]).toBe(error.stack);
    });
  });
});

