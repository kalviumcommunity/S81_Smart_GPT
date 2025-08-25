// backend/src/controllers/chainofthought.js
import fetch from "node-fetch";
import { env } from "../config/env.js";

export const chainOfThoughtPrompt = async (req, res) => {
  try {
    const { question } = req.body;

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
            content: "You are a reasoning assistant. Always think step by step before answering."
          },
          {
            role: "user",
            content: `Question: ${question}\n\nExplain your reasoning step by step before giving the final answer.`
          }
        ],
      }),
    });

    const data = await response.json();
    const answer = data.choices[0].message.content;

    res.json({
      success: true,
      question,
      answer
    });

  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};
