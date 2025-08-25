// backend/src/controllers/multishot.js
import fetch from "node-fetch";
import { env } from "../config/env.js";

export const multiShotPrompt = async (req, res) => {
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
          { role: "system", content: "You are a helpful assistant that explains concepts simply." },

          // Example 1
          { role: "user", content: "What is photosynthesis?" },
          { role: "assistant", content: "Photosynthesis is how plants make food using sunlight, carbon dioxide, and water." },

          // Example 2
          { role: "user", content: "What is gravity?" },
          { role: "assistant", content: "Gravity is the force that pulls objects towards each other, like how Earth pulls us down." },

          // Example 3
          { role: "user", content: "What is the Internet?" },
          { role: "assistant", content: "The Internet is a global network that connects computers, allowing people to share information quickly." },

          // Actual user query
          { role: "user", content: userInput },
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
