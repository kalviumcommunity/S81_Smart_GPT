// backend/src/routes/functioncalling.js
import express from "express";
import { functionCallingPrompt } from "../controllers/functioncalling.js";

const router = express.Router();

router.post("/", functionCallingPrompt);

export default router;
