import dotenv from "dotenv";
dotenv.config();

export const env = {
  PORT: process.env.PORT || 5000,
  OPENROUTER_API_KEY: process.env.OPENROUTER_API_KEY || "", // set in .env file
};
