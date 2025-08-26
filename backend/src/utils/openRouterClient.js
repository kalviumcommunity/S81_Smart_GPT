import fetch from "node-fetch";
import { env } from "../config/env.js";

export async function callOpenRouter(prompt, temperature = 1) {
  try {
    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${env.OPENROUTER_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        temperature, // 👈 added here
        messages: [{ role: "user", content: prompt }],
      }),
    });

    const data = await response.json();
    return data.choices[0]?.message?.content || "No response from model.";
  } catch (err) {
    console.error("❌ Error calling OpenRouter:", err.message);
    return "Error occurred while fetching AI response.";
  }
}
