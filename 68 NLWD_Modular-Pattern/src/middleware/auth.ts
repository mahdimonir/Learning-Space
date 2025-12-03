import { NextFunction, Request, Response } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import config from "../config";

const auth = (...roles: string[]) => {
  return (req: Request, res: Response, next: NextFunction) => {
    try {
      const token = req.headers.authorization;
      if (!token) {
        return res.status(401).json({
          success: false,
          error: "Unauthorized",
          message:
            "Authentication required. Please provide a valid access token.",
        });
      }
      const secret = config.jwtSecret as string;
      const decode = jwt.verify(token, secret) as JwtPayload;
      req.user = decode;

      if (roles.length && !roles.includes(decode.role)) {
        return res.status(403).json({
          success: false,
          error: "Forbidden",
          message: "You do not have permission to access this resource.",
        });
      }
      next();
    } catch (error: any) {
      res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  };
};

export default auth;
