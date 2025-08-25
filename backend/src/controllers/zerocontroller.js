// backend/src/controllers/zeroshot.js
import fetch from "node-fetch";
import { env } from "../config/env.js";

export const zeroShotPrompt = async (req, res) => {
  try {
    const { userInput } = req.body;

    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${env.OPENROUTER_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "openchat/openchat-7b:free",   // free model
        messages: [
          {
            role: "user",
            content: userInput,   // Zero shot: directly ask without example
          },
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
