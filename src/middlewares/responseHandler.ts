// import { NextFunction, Request, Response } from "express";

// export interface TypedResponse extends Response {
//   success: <T = any>(message: string, data?: T, statusCode?: number) => Response;

//   error: (message: string, statusCode?: number, details?: any) => Response
// }

// export const responseHandler = (req: Request, res: TypedResponse, next: NextFunction) => {

//   res.success = function <T= any>(message:string, data?: any, statusCode?: number) {

//     return res.status(statusCode).json({
//       success: true,
//       message,
//       data: data ?? null
//     })
//   }

//   res.error = function (message:string, statusCode = 400, details?: any) {
//     return res.status(statusCode).json({
//       success: false,
//       message,
//       details: details ?? null
//     })
//   }

//   return next()
// }

import { Request, Response, NextFunction } from "express";

export const responseHandler = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.success = function <T = any>(message: string, data?: T, statusCode = 200) {
    return this.status(statusCode).json({
      success: true,
      message,
      data: data ?? null,
    });
  };

  res.error = function (message: string, statusCode = 400, details?: any) {
    return this.status(statusCode).json({
      success: false,
      message,
      details: details ?? null,
    });
  };

  next();
};
