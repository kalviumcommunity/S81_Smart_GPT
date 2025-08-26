import { encode, decode } from "gpt-tokenizer";

// count tokens in text
export const tokenizeText = (text) => {
  const tokens = encode(text);
  return {
    tokens,
    tokenCount: tokens.length,
    decodedText: decode(tokens),
  };
};
