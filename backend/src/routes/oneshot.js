// backend/src/routes/oneshot.js
import express from "express";
import { oneShotPrompt } from "../controllers/oneshot.js";

const router = express.Router();

router.post("/", oneShotPrompt);

export default router;
