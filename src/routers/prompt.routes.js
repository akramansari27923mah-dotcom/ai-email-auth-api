import { Router } from "express";
import handlePrompt from "../controllers/prompt.controller.js";
import authMiddleware from "../middleware/auth.middleware.js";

const router = Router();

router.post('/', authMiddleware, handlePrompt)

export default router