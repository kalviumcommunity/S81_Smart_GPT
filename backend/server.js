// backend/src/app.js
import express from "express";
import cors from "cors";
import { env } from "./src/config/env.js";
import zeroShotRouter from "./src/routes/zeroshot.js";
import oneShotRouter from "./src/routes/oneshot.js";
const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.use("/api/zeroshot", zeroShotRouter);
app.use("/api/oneshot", oneShotRouter); 

app.listen(env.PORT, () => {
  console.log(`✅ Server running on http://localhost:${env.PORT}`);
});
