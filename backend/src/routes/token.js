import express from "express";
import { getTokenCount } from "../controllers/tokenController.js";

const router = express.Router();

router.post("/", getTokenCount);

export default router;
