/* eslint-disable no-console */
import { type Request, type Response, type NextFunction } from "express";

export const loggingMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const startTime = Date.now();

  console.log("\n📥 INCOMING REQUEST");
  console.log(`Method: ${req.method}`);
  console.log(`URL: ${req.originalUrl}`);
  console.log(`Request Body:`, req.body);
  console.log(`Query Params:`, req.query);
  console.log("---");

  const originalSend = res.send;

  res.send = function (data: any) {
    const duration = Date.now() - startTime;

    console.log("📤 OUTGOING RESPONSE");
    console.log(`Status Code: ${res.statusCode}`);
    console.log(`Response Body:`, data);
    console.log(`Duration: ${duration}ms`);
    console.log("===\n");

    return originalSend.call(this, data);
  };

  next();
};
