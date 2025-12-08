import 'express'
import { RoleEnum } from '../models/User';

declare module 'express-serve-static-core' {
  interface Response {
    success<T = any>(message: string, data?: T, statusCode?: number): this;
    error(message: string, statusCode?: number, details?: any): this;

  }
}

declare global {
  namespace Express {
    interface User {
      id: string;
      email: string,
      role: RoleEnum
    }

    interface Request {
      user?: User
    }
  }
}

export {};