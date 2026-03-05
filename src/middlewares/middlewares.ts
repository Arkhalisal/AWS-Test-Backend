import express, { type Express } from "express";
import cors from "cors";
import { loggingMiddleware } from "./loggingMiddleware";

const initMiddlewares = (app: Express) => {
  app.use(express.json());
  app.use(cors());
  app.use(loggingMiddleware);
};

export default initMiddlewares;
