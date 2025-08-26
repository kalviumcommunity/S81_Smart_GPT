// backend/src/app.js
import express from "express";
import cors from "cors";
import { env } from "./src/config/env.js";
import zeroShotRouter from "./src/routes/zeroshot.js";
import oneShotRouter from "./src/routes/oneshot.js";
import multiShotRouter from "./src/routes/multishot.js";
import functionCallingRouter from "./src/routes/functioncalling.js";
import chainOfThoughtRouter from "./src/routes/chainofthought.js";
import dynamicPromptingRouter from "./src/routes/dynamicPrompting.js";
import tokenRouter from "./src/routes/token.js";
const app = express();

app.use(cors());
app.use(express.json());
app.use((req, res) => res.status(404).json({ ok: false, error: "Not Found" }));

// Routes
app.use("/api/zeroshot", zeroShotRouter);
app.use("/api/oneshot", oneShotRouter); 
app.use("/api/multishot", multiShotRouter);
app.use("/api/function-calling", functionCallingRouter);
app.use("/api/chain-of-thought", chainOfThoughtRouter);
app.use("/api/dynamic-prompt", dynamicPromptingRouter);
app.use("/api/tokens", tokenRouter);

app.listen(env.PORT, () => {
  console.log(`✅ Server running on http://localhost:${env.PORT}`);
});
