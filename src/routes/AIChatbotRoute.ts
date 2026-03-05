import { Router } from "express";
import { OpenRouter } from "@openrouter/sdk";
import { ENV } from "../constant/ENV";

export const aiChatbotRoute = () => {
  const route = Router();

  route.post("/chatbot", async (req, res) => {
    const { question } = req.body;

    const openRouter = new OpenRouter({
      apiKey: ENV.OPEN_ROUTER_API_KEY,
    });

    const result = await openRouter.chat.send({
      chatGenerationParams: {
        model: "gpt-oss-120b",
        stream: false,
        messages: [{ role: "user", content: question }],
      },
    });

    const aiResponse = result.choices?.[0]?.message?.content;

    res.send({ aiResponse });
  });

  return route;
};
