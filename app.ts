import express from "express";
import initMiddlewares from "./src/middlewares/middlewares";
import { aiChatbotRoute } from "./src/routes/AIChatbotRoute";

const startServer = async () => {
  const app = express();

  const port = process.env.PORT;

  initMiddlewares(app);
  app.use(aiChatbotRoute());

  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
};

startServer();
