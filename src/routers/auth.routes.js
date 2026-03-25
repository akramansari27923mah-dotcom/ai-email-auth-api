import { Router } from 'express';
import authController from '../controllers/auth.controller.js';
import authMiddleware from '../middleware/auth.middleware.js';

const router = Router()


router.post('/register', authController.register)
router.get('/get-me', authMiddleware, authController.getMe)
router.post('/logout', authMiddleware, authController.logout)
router.post('/login', authController.login)

export default router