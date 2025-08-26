// backend/src/routes/dynamicPrompting.js
import express from "express";
import { dynamicPrompting } from "../controllers/dynamicPrompting.js";

const router = express.Router();

router.post("/", dynamicPrompting);

export default router;
