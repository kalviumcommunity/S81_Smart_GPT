import { callOpenRouter } from "../utils/openRouterClient.js";

export const temperaturePrompt = async (req, res) => {
  try {
    const { prompt, temperature } = req.body;

    if (!prompt) {
      return res.status(400).json({ error: "Prompt is required" });
    }

    // default temperature = 1
    const tempValue = temperature !== undefined ? Number(temperature) : 1;

    const result = await callOpenRouter(prompt, tempValue);
    res.json({ success: true, result });
  } catch (err) {
    res.status(500).json({ error: "Failed to process temperature prompt" });
  }
};
