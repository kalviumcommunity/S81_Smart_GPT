// backend/src/controllers/functioncalling.js
import fetch from "node-fetch";
import { env } from "../config/env.js";

// Dummy function to simulate weather lookup
function getWeather(city) {
  const data = {
    London: "Cloudy, 20°C",
    Paris: "Sunny, 25°C",
    Tokyo: "Rainy, 28°C",
  };
  return data[city] || "Weather data not available";
}

export const functionCallingPrompt = async (req, res) => {
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
          { role: "system", content: "You are a helpful assistant with access to functions." },
          { role: "user", content: userInput },
        ],
        tools: [
          {
            type: "function",
            function: {
              name: "getWeather",
              description: "Get the current weather for a given city",
              parameters: {
                type: "object",
                properties: {
                  city: { type: "string", description: "The name of the city" }
                },
                required: ["city"]
              }
            }
          }
        ]
      }),
    });

    const data = await response.json();
    const message = data.choices[0].message;

    // If model calls a function
    if (message.tool_calls) {
      const toolCall = message.tool_calls[0];
      const city = JSON.parse(toolCall.function.arguments).city;

      const weather = getWeather(city);

      return res.json({
        success: true,
        function: "getWeather",
        args: { city },
        response: weather
      });
    }

    // Otherwise normal text answer
    res.json({
      success: true,
      response: message.content
    });

  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};
