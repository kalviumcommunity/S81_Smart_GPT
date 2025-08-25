// backend/src/routes/zeroshot.js
import express from "express";
import { zeroShotPrompt } from "../controllers/zerocontroller.js";

const router = express.Router();

router.post("/", zeroShotPrompt);

export default router;
