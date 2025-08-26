import { Router } from "express";
import { temperaturePrompt } from "../controllers/temperatureController.js";

const router = Router();

router.post("/", temperaturePrompt);

export default router;
