export class BadRequestError extends Error {
  status: number;

  constructor(message: string = "Bad request") {
    super(message);
    this.status = 400;

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, BadRequestError);
    }

    this.name = "BadRequestError";
  }
}

export class NotFoundError extends Error {
  status: number;

  constructor(message: string = "Resource not found") {
    super(message);
    this.status = 404;

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, NotFoundError);
    }

    this.name = "NotFoundError";
  }
}

export class ConflictError extends Error {
  status: number;

  constructor(message: string = "Conflict") {
    super(message);
    this.status = 409;

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, ConflictError);
    }

    this.name = "ConflictError";
  }
}

