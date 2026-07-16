import { jwt, JWT_SECRET } from "@repo/backend-common";
import { NextFunction, Request, Response } from "express";

export function middleware(req: Request, res: Response, next: NextFunction) {
  const authHeader = req.headers["authorization"] ?? "";

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(403).json({
      message: "Unauthorized",
    });
  }

  const token = authHeader?.split(" ")[1] as string;

  const decode = jwt.verify(token, JWT_SECRET);

  if (decode) {
    req.user = decode;
    next();
  } else {
    res.status(403).json({
      message: "Unauthorized",
    });
  }
}
