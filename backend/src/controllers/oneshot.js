// backend/src/controllers/oneshot.js
import fetch from "node-fetch";
import { env } from "../config/env.js";

export const oneShotPrompt = async (req, res) => {
  try {
    const { userInput } = req.body;

    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${env.OPENROUTER_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "openchat/openchat-7b:free",
        messages: [
          {
            role: "system",
            content: "You are an assistant that explains concepts simply."
          },
          {
            role: "user",
            content: "What is photosynthesis?"
          },
          {
            role: "assistant",
            content: "Photosynthesis is the process by which plants make their own food using sunlight, carbon dioxide, and water."
          },
          {
            role: "user",
            content: userInput
          }
        ],
      }),
    });

    const data = await response.json();

    res.json({
      success: true,
      response: data.choices[0].message.content,
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};
