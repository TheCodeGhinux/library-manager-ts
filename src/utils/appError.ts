export class AppError extends Error {
  statusCode: number;
  details?: any

  constructor(message: string, statusCode = 400, details?: any) {
    super(message);
    this.statusCode = statusCode;
    this.details = details;
  }

  // Error.capture
}

export class BadRequestError extends AppError {
  constructor(message = "Bad Request Error", details?: any) {
    super(message, 400, details)
  }
}

export class NotFoundError extends AppError {
  constructor(message = "Not Found Error", details?: any) {
    super(message, 404, details)
  }
}

