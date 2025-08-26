// backend/src/routes/topK.js
import express from "express";
import fetch from "node-fetch";
import { env } from "../config/env.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { prompt, top_k } = req.body;

    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${env.OPENROUTER_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "openai/gpt-3.5-turbo", // or any other OpenRouter model
        messages: [{ role: "user", content: prompt }],
        top_k: top_k || 50, // default value for top-k sampling
      }),
    });

    const data = await response.json();
    res.json({ ok: true, data });
  } catch (error) {
    console.error(error);
    res.status(500).json({ ok: false, error: "Something went wrong with Top-K!" });
  }
});

export default router;
