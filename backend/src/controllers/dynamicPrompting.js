// backend/src/controllers/dynamicPrompting.js
import fetch from "node-fetch";
import { env } from "../config/env.js";

export const dynamicPrompting = async (req, res) => {
  try {
    const { task, text } = req.body;

    // Create dynamic prompt template
    const dynamicPrompt = `Perform the following task:\nTask: ${task}\nText: ${text}`;

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
            content: "You are a helpful assistant that executes user-defined tasks dynamically."
          },
          {
            role: "user",
            content: dynamicPrompt
          }
        ],
      }),
    });

    const data = await response.json();
    const answer = data.choices[0].message.content;

    res.json({
      success: true,
      task,
      text,
      answer
    });

  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};
