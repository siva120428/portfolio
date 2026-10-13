import { Router } from 'express';
import { handleContactSubmit } from '../controllers/contactController.js';
import { contactLimiter } from '../middleware/rateLimiter.js';

const router = Router();

router.post('/contact', contactLimiter, handleContactSubmit);

export default router;
