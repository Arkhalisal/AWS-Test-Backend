import express, { Router } from "express";

const startServer = async () => {
  const app = express();

  const port = process.env.PORT;

  app.use(routeLink());

  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
};

const routeLink = () => {
  const route = Router();

  route.get("/", (req, res) => {
    res.send("Hello World!");
  });

  route.post("/data", (req, res) => {
    console.log("Data received:", req.body);

    res.send("Data received!");
  });

  return route;
};

startServer();
