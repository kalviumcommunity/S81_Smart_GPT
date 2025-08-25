// backend/src/routes/multishot.js
import express from "express";
import { multiShotPrompt } from "../controllers/multishot.js";

const router = express.Router();

router.post("/", multiShotPrompt);

export default router;
