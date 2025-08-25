// backend/src/routes/chainofthought.js
import express from "express";
import { chainOfThoughtPrompt } from "../controllers/chainofthought.js";

const router = express.Router();

router.post("/", chainOfThoughtPrompt);

export default router;
