import { tokenizeText } from "../utils/tokenizer.js";

export const getTokenCount = (req, res) => {
  try {
    const { text } = req.body;

    if (!text) {
      return res.status(400).json({ ok: false, error: "Text is required" });
    }

    const result = tokenizeText(text);

    res.json({
      ok: true,
      tokenCount: result.tokenCount,
      tokens: result.tokens,
      decodedText: result.decodedText,
    });
  } catch (error) {
    res.status(500).json({ ok: false, error: error.message });
  }
};
