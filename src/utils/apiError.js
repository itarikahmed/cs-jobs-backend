const createApiError = (
  statusCode,
  message = "Something went wrong",
  errors = [],
  stack = ""
) => {
  const error = new Error(message);

  error.statusCode = statusCode;
  error.data = null;
  error.success = false;
  error.errors = errors;

  if (stack) {
    error.stack = stack;
  } else {
    Error.captureStackTrace(error, createApiError);
  }

  return error;
};

export default createApiError;
